<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <NavBar/>
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
  import NavBar from "./components/NavBar.vue";

  export default {
    name: "App",
    components: {
      NavBar
    },
    data: () => ({
      drawer: null,
      right: null,
    }),
  }
</script>