import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue'

/**
 * To get the material design guidelines out of the box, Vue Material project was used.
 * Many of typical controls and UI elements are prepared for use there. 
 * More info : https://vuematerial.io/
 * NOTE: It is possible to import only individual UI parts that are used.
 *       Importing everything is not recommended and is here for the sake of simplicity.
 */
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

/**
 * Using Axios Http client library to handle HTTP communication is a common practice.
 * VueAxios is used as a wrapper to siplify the usage of Axios.
 * More info here : 
 * https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
 * https://dev.to/heftyhead/lets-talk-about-an-unnecessary-but-popular-vue-plugin-1ied 
 */
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
