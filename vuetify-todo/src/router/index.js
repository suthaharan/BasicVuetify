import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDoView from '../views/ToDo'
import ProjectView from '../views/ProjectView'
import TeamView from '../views/ProjectTeam'
import MyProjects from '../views/MyProjects'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ToDoView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/myprojects',
    name: 'myprojects',
    component: MyProjects
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
