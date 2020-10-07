import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import home from '../views/home.vue'
import addNumber from '../views/addNumber.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/addNumber',
    name: 'addNumber',
    component: addNumber,
  },

]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes
})


export default router;
