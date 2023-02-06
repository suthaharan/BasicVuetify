<template>
    <div>
        <v-navigation-drawer v-model="drawer" app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Yulu ToDo
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Simple Task Manager
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar color="primary" size="100">
                        <v-img src="https://randomuser.me/api/portraits/men/21.jpg"></v-img>
                    </v-avatar>
                    <p class="dark subheading mt-2 font-weight-bold text-center">Robert Doe</p>
                </v-flex>

                <v-flex xs12 sm12 md12 class="mt-4 mb-3">
                    <v-card  class="d-flex justify-center mb-6">
                            <PopupProfile />
                        </v-card>
                    <v-card  class="d-flex justify-center mb-6">
                            <PopupProject @projectAdded="snackbar = true"/>
                        </v-card>
                </v-flex>
            </v-layout>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>

        <v-app-bar app flat color="primary" dark src="mandalas.jpg">
            <v-snackbar v-model="snackbar" :timeout="10000" top color="success">
                <div>Awesome! You added a new project
                <v-btn dark @click="snackbar=false">Close</v-btn>
                </div>
            </v-snackbar>
            <template v-slot:img="{ props }">
                <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
            </template>

            <v-toolbar-title class="white--text">
                <v-app-bar-nav-icon @click="drawer = !drawer">

                </v-app-bar-nav-icon>
                <span class="fontweight-light">YULU</span>
                <span>ToDo</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <ShortMenu :shortmenu="items"/>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

    </div>
</template>

<script>
    import ShortMenu from "@/components/ShortMenu";
    import PopupProfile from "@/components/PopupProfile";
    import PopupProject from "@/components/PopupProject";
    export default {
        components: {
            ShortMenu,
            PopupProfile,
            PopupProject
        },
        data: () => ({
            drawer: null,
            right: null,
            snackbar: false,
            items: [{
                    title: 'ToDo',
                    icon: 'mdi-format-list-checks',
                    to: '/'
                },
                {
                    title: 'About',
                    icon: 'mdi-account-box',
                    to: '/about'
                },
                {
                    title: 'Projects',
                    icon: 'mdi-briefcase',
                    to: '/project'
                },
                {
                    title: 'My Projects',
                    icon: 'mdi-account-group',
                    to: '/myprojects'
                },
                {
                    title: 'Team',
                    icon: 'mdi-account-group',
                    to: '/team'
                },
            ],
        }),
    }
</script>