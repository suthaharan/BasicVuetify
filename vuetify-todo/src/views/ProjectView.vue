<template>
  <div class="project pa-2">
    <h1 class="lighter--grey">Project YuLu!</h1>
    <v-container class="my-5">
      <v-card flat class="pa-3"  v-for="project in projects" :key="project.id">

        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <!-- <v-btn outline block class="primary">1</v-btn> -->
            <div class="caption grey--text">Project</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <!-- <v-btn outline block class="primary">2</v-btn> -->
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <!-- <v-btn outline block class="primary">2</v-btn> -->
            <div class="caption grey--text">Due By</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <v-chip small :class="`${project.status} dark caption my-2`">{{project.status}}</v-chip>
          </v-flex>

        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor maiores sint excepturi hic temporibus. Animi doloribus, aut ipsam officia amet at excepturi est quia earum vero ducimus pariatur minus modi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem, officia beatae excepturi quis corrupti facere tempore consequatur illo voluptatibus, consectetur doloremque quam, omnis minima aliquid. Nostrum praesentium quibusdam incidunt!</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id soluta dignissimos quos ipsam ipsa sed inventore fuga. Ea porro excepturi obcaecati, quod doloribus doloremque laboriosam veniam consequatur cumque neque. Voluptate.</p>
  </div>
</template>
<script>
  export default {
    name: 'ProjectView',
    data() {
      return {
        newTask: '',
        projects: [
            {
            id: 1,
            title: "Prepare material",
            person: 'John Doe',
            due: '1st Feb 2023',
            status: 'ongoing'
          }, {
            id: 2,
            title: "Analyze material",
            person: 'Robert Doe',
            due: '1st Jan 2023',
            status: 'complete'
          }, {
            id: 3,
            title: "Research material",
            person: 'Mary Doe',
            due: '1st Dec 2023',
            status: 'inactive'
          }
        ]
      }
    }
  }
  </script>
  <style scoped>
  .project.complete{
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing{
    border-left: 4px solid orange;
  }
  .project.inactive{
    border-left: 4px solid tomato;
  }

  .v-chip.complete{
    border-left: 4px solid #3cd1c2;
  }
  .v-chip.ongoing{
    border-left: 4px solid orange;
  }
  .v-chip.inactive{
    border-left: 4px solid tomato;
  }

  </style>