import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Request from '@/components/Request.vue';
import Reg from '@/components/Reg.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },  {
    path: '/about',
    name: 'About',
    component: About,
  }, {
    path: '/request',
    name: 'Request',
    component: Request,
  }, {
    path: '/reg',
    name: 'Reg',
    component: Reg,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
