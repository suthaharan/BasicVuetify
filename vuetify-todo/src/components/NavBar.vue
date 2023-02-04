<template>
<div>
    <v-layout column align-center>
      <v-flex class="mt-5">
        <v-avatar color="primary" size="100">
          <v-img src="https://randomuser.me/api/portraits/men/21.jpg"></v-img>
        </v-avatar>
        <p class="dark subheading mt-2 font-weight-bold text-center">Insta Vue</p>
      </v-flex>
    </v-layout>
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
</div>
</template>

<script>
  export default {
    data: () => ({
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
          title: 'Project',
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