<template>
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in shortmenu"
            :key="item.title"
            :to="item.to" link
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  <script scoped>
  export default {
    props: ['shortmenu'],
  }
</script>