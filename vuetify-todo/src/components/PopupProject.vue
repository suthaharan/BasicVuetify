<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn x-small color="info" dark v-bind="attrs" v-on="on">
                    Create Project
                </v-btn>
            </template>
            <v-form class="pa-3" ref="projectform">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Add a Project</span>
                </v-card-title>
                <v-card-text> 
                    <v-container>
                        <v-row>
                           
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Project name*" v-model="title" required prepend-icon="mdi-folder" :rules="inputRules">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="person" label="Person name" prepend-icon="mdi-map-marker"
                                    hint="Person"  :rules="inputRules"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">

                                <v-menu v-model="menu2" :close-on-content-click="true" :nudge-right="40"
                                    transition="scale-transition" offset-y min-width="auto">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field :value="formattedDate" :rules="inputRules" label="Due Date"
                                            prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-date-picker v-model="due" ></v-date-picker>
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
                    <v-btn color="white darken-1" text @click="submit" :loading="loading" class="green">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
        </v-dialog>
    </v-row>
</template>
<script>

import format from "date-fns/format";
import db from '@/fb';

    export default {
        data: () => ({
            dialog: false,
            title: '',
            content: '',
            person: '',
            id: '',
            due: null,
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
            inputRules:[
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading: false
        }),
        methods: {
            submit() {
                if(this.$refs.projectform.validate()){
                    this.loading = true;
                    //console.log(`Title: ${this.title}, Content: ${this.content}, Due: ${this.due}`);
                    const project = {
                        title: this.title,
                        content: this.content,
                        due:  format(new Date(this.due.replace(/-/g, '/')), 'do MMM yyyy'),
                        person: this.person,
                        status: 'ongoing',
                        id: (this.id? this.id: Math.floor((Math.random() * 10000) + 1))
                    };
                    //console.log(project);
                    db.collection('projects').add(project).then(() => {
                        this.inputRules = [] //clear rules
                        this.$refs.projectform.reset();
                        console.log("Added to Firestore!");
                        this.loading = false;
                        this.dialog = false;
                        this.$emit('projectAdded');
                    });

                }else{
                    console.log("Cannot submit project form")
                }
                
            },
            reset () {
            this.$refs.projectform.reset()
            },
            resetValidation () {
            this.$refs.projectform.resetValidation()
            },
            customError() {
            this.nameErrorCount=3;
            this.nameErrorMessages = ["Oh this field has error"]
            }
        },
        computed:{
            formattedDate(){
                return this.due? format(new Date(this.due.replace(/-/g, '/')), 'do MMM yyyy') : '';
            }
        }
    }
</script>