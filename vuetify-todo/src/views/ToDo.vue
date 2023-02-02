<template>
  <div class="home">
    <v-list flat>
      <v-subheader>Daily TODO</v-subheader>
      <v-text-field class="pa-3"
            v-model="newTask"
            outlined
            label="Task"
            append-icon="mdi-plus"
            clearable
            hide-details
            @click:append="addTask"
            @keyup.enter="addTask"

          ></v-text-field>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item @click="taskCompleted(task.id)" :class="{'green lighten-5': task.completed}">
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.completed"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{ 'text-decoration-line-through' : task.completed}">{{ task.title }}
              </v-list-item-title>

            </v-list-item-content>
            <v-list-item-action>

              <v-icon v-if="!task.completed" color="red lighten-1" @click.stop="deleteTask(task.id)">
                mdi-delete
              </v-icon>

              <v-icon v-else color="yellow darken-3">
                mdi-star
              </v-icon>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>


    </v-list>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    data() {
      return {
        newTask: '',
        tasks: [
        //   {
        //   id: 1,
        //   title: "Prepare material",
        //   completed: false
        // }, {
        //   id: 2,
        //   title: "Organize logic",
        //   completed: false
        // }, {
        //   id: 3,
        //   title: "Program",
        //   completed: true
        // }
      ]
      }
    },
    methods: {
      addTask(){
        console.log('adding tasks');
        if(this.newTask){
          let newTask = {
            id: Date.now(),
            title: this.newTask,
            completed: false
          }
          this.tasks.push(newTask);
          this.newTask = '';
        }

      },
      taskCompleted(id) {
        let task = this.tasks.filter(task => task.id === id)[0];
        task.completed = !task.completed;
      },
      deleteTask(id){
       this.tasks = this.tasks.filter(task => task.id !== id)
      }
    }
  }
</script>