import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import TestLayout from './layouts/TestLayout';
import Home from './views/Home.vue';
import About from './views/About.vue';
import TestView from './views/TestView.vue';
import Contacts from './views/Contacts.vue';
import History from './views/History.vue';

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
          path: '/about',
          name: 'about',
          component: About,
        },
        {
          path: '/test',
          name: 'test',
          component: TestView,
        },
        {
          path: '/contacts',
          name: 'contacts',
          component: Contacts,
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
