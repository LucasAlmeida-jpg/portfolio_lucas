import { createRouter, createWebHistory } from 'vue-router';

import All from '../views/All.vue';
import HeaderView from '../components/HeaderView.vue';
import MainView from '../components/MainView.vue';
import About from '../views/About.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'all',
      component: All 
    },
    {
      name: 'headerView',
      component: HeaderView 
    },
    {
      name: 'mainView',
      component: MainView
    },
    { path: '/about/:company', component: About },
  ]
});

export default router;


