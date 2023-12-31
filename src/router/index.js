import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Services from '@/views/Services.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '/',
    component: Home,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
