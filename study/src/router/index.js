import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../Pages/Home.vue';
import About from '../../Pages/Map.vue';
import Request from '../../Pages/Request.vue';
import Reg from '../components/Reg.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },  {
    path: '/about',
    name: 'Map',
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
