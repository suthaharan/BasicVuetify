<template>
  <v-app id="inspire">
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

    <v-main>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
  export default {
    name: "App",
    data: () => ({
      drawer: null,
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
          title: 'Team',
          icon: 'mdi-account-group',
          to: '/team'
        },
      ],
      right: null,
    }),
  }
</script>