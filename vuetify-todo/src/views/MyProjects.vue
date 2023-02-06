<template>
    <div class="project pa-8 a-2">
        <h1 class="subheading greey--text">My Projects</h1>
        <v-container class="my-5">
            <v-expansion-panels>
                <v-expansion-panel v-for="myproject in myProjects" :key="myproject.title">
                    <v-expansion-panel-header :class="`project ${myproject.status}`">
                        {{ myproject.title}}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>

                                <div class="font-weight-bold">Due by</div>
                                <div class="pt-5">
                                    {{  myproject.content }}
                                </div>

                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>


        </v-container>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor maiores sint excepturi hic temporibus. Animi
            doloribus, aut ipsam officia amet at excepturi est quia earum vero ducimus pariatur minus modi?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem, officia beatae excepturi
            quis corrupti facere tempore consequatur illo voluptatibus, consectetur doloremque quam, omnis minima
            aliquid. Nostrum praesentium quibusdam incidunt!</p>
    </div>
</template>
<script>
import {db} from '@/fb';
    export default {
        name: 'MyProjects',
        data() {
            return {
                newTask: '',
                projects: [
                //     {
                //     id: 1,
                //     title: "Prepare material",
                //     person: 'John Doe',
                //     due: '1st Feb 2023',
                //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                //     status: 'ongoing'
                // }, {
                //     id: 2,
                //     title: "Analyze material",
                //     person: 'Robert Doe',
                //     due: '1st Jan 2023',
                //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                //     status: 'complete'
                // }, {
                //     id: 3,
                //     title: "Research material",
                //     person: 'Mary Doe',
                //     due: '1st Dec 2023',
                //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                //     status: 'inactive'
                // }, {
                //     id: 4,
                //     title: "Test Program",
                //     person: 'Robert Doe',
                //     due: '21st Jul 2023',
                //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                //     status: 'ongoing'
                // }, {
                //     id: 5,
                //     title: "Quality Check",
                //     person: 'Robert Doe',
                //     due: '31st Dec 2023',
                //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                //     status: 'inactive'
                // }
            ]
            }
        },
        computed: {
            myProjects(){
                return this.projects.filter(project => {
                    return project.person === 'Robert Doe';
                })
            }
        },
    created(){
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if(change.type === 'added'){
            this.projects.push({
              ...change.doc.data(), 
              id: change.doc.id
            });
          }
        })
      })
    }
    }
</script>
<style scoped>
    .project.complete {
        border-left: 4px solid #3cd1c2;
    }

    .project.ongoing {
        border-left: 4px solid orange;
    }

    .project.inactive {
        border-left: 4px solid tomato;
    }

    .v-chip.complete {
        background: #3cd1c2;
    }

    .v-chip.ongoing {
        background: orange;
    }

    .v-chip.inactive {
        background: tomato;
    }
</style>