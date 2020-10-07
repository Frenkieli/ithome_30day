import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  }
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes
})


export default router;
