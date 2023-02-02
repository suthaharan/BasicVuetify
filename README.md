### BasicVuetify
Vuetify Beginner Tutorial - Material Design component framework for Vue.js


### References
Vue Getting Started: https://cli.vuejs.org/#getting-started
Vuetify Library: https://vuetifyjs.com/en/
YouTube: https://www.youtube.com/watch?v=CjXgoYo86yY
Vuetify Wireframes: https://vuetifyjs.com/en/getting-started/wireframes/
Random pictures: https://picsum.photos/1920/1080?random

### Local Setup
NodeJS v14.20.1
Vue
Vuetify
```

$ npm install -g @vue/cli
OR
$ yarn global add @vue/cli

If you want to remove an old version, 
$ yarn global remove vue-cli
OR
$ npm uninstall -g vue-cli

To get to know the versions
$ npm v vue
$ vue --version


$ vue create vuetify-todo
[Options: Vue2 and npm]

$ cd vuetify-todo
$ vue add vuetify
$ npm run serve
```

* In this tutorial, we will be using the Base template from https://vuetifyjs.com/en/getting-started/wireframes/ (there is github link at the bottom of the template page which you can use to copy the code)
* Replace App.vue with the base template code from github URI
* Add Navigation to the base wireframe by going to UI Components > Navigation Drawers
* Check if vue router is already installed (there will be a router folder in the project), if not
```
$ vue add router
```
* If we are using vue-router, we will need to add <router-view> inside <v-main>. To read more you can go to Vuetify documentation, UI Components > Application 
* For Material design icons, 
* For styling the design of the form, go to Styles and animations > spacing
* To improve the header of the wireframe, let's go to UI Components > Bars > App bars
* To display list of todo's, go to UI Components > Lists 


![YuLu About](assets/yulu-about.jpg)

![YuLu Tasks](assets/yulu-todo.jpg)