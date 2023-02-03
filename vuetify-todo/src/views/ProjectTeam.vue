<template>
    <div class="team  pa-8 a-2">
        <h1 class="subheading greey--text">Team</h1>
        <v-container class="my-5">

            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="member in team" :key="member.name">
                    <v-card flat class="text-center ma-3" outlined=true>
                        <v-responsive class="pt-4">
                            <v-avatar color="primary" size="150">
                                <v-img :src="member.picture" height="200px"></v-img>
                            </v-avatar>
                        </v-responsive>
                        <v-card-title class="justify-center">
                            {{ member.name }}
                        </v-card-title>
                        <v-card-subtitle>
                            {{ member.role }}
                        </v-card-subtitle>

                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-btn icon>
                                <v-icon>mdi-mail</v-icon>
                            </v-btn>

                            <v-btn color="orange lighten-2" text>
                                Message
                            </v-btn>

                        </v-card-actions>

                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script scoped>
    export default {
        data: () => ({
            show: false,
            team: [{
                    name: "Lori John",
                    role: 'Developer',
                    picture: 'https://randomuser.me/api/portraits/women/2.jpg'
                },
                {
                    name: "Viktor Roy",
                    role: 'Architect',
                    picture: 'https://randomuser.me/api/portraits/men/11.jpg'
                },
                {
                    name: "Shiv Sara",
                    role: 'Project Manager',
                    picture: 'https://randomuser.me/api/portraits/men/7.jpg'
                },
                {
                    name: "Durg Pandiya",
                    role: 'Designer',
                    picture: 'https://randomuser.me/api/portraits/women/3.jpg'
                },
                {
                    name: "Carpenter Will",
                    role: 'Sales',
                    picture: 'https://randomuser.me/api/portraits/men/19.jpg'
                },
            ]
        }),
    }
</script>