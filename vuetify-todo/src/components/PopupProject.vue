<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn x-small color="info" dark v-bind="attrs" v-on="on">
                    Create Project
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Add a Project</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Project name*" v-model="title" required prepend-icon="mdi-folder">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="id" label="Project id" prepend-icon="mdi-map-marker"
                                    hint="Unique Project ID"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">

                                <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40"
                                    transition="scale-transition" offset-y min-width="auto">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field :value="formattedDate" label="Due Date"
                                            prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-date-picker v-model="due"></v-date-picker>
                                </v-menu>

                                <v-textarea v-model="content" prepend-icon="mdi-comment" 
                                    label="Project Description" rows="2"></v-textarea>

                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="white darken-1" text @click="dialog = false" class="red">
                        Close
                    </v-btn>
                    <v-btn color="white darken-1" text @click="submit" class="green">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>

import format from "date-fns/format";
    export default {
        data: () => ({
            dialog: false,
            title: '',
            content: '',
            id: '',
            due: null,
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
        }),
        methods: {
            submit() {
                console.log(this.title, this.content)
            }
        },
        computed:{
            formattedDate(){
                return this.due? format(new Date(this.due.replace(/-/g, '/')), 'do MMM YYY') : '';
            }
        }
    }
</script>