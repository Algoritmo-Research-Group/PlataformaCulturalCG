import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import Home from './views/Home.vue';
import Posts from './views/Posts.vue';
import TestView from './views/TestView.vue';
import Map from './views/Map.vue';
import History from './views/History.vue';
import Paralax from './components/Paralax.vue';

Vue.component('plx', Paralax);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: '/posts',
          name: 'posts',
          component: Posts,
        },
        {
          path: '/test',
          name: 'test',
          component: TestView,
        },
        {
          path: '/map',
          name: 'map',
          component: Map,
        },
        {
          path: '/history',
          name: 'history',
          component: History,
        },
      ],
    },
  ],
});
