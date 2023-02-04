<template>
  <v-app id="inspire">

    <NavBar />

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
  }
</script>