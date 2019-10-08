import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import VueMaterial from 'vue-material';
import Contact from '@/views/Contact.vue'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Router);
Vue.use(VueMaterial);
Vue.use(VueAxios, axios);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/detail:id',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Detail.vue'),
    },
  ],
});
