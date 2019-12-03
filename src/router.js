import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Profile from './views/Profile.vue';
import Adm from './views/AdmPage.vue';
import Register from './views/Register.vue';
import Recover from './views/Recover.vue';

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
          path: '/profile',
          name: 'profile',
          component: Profile,
        },
        {
          path: '/adm',
          name: 'adm',
          component: Adm,
        },
        {
          path: '/Register',
          name: 'register',
          component: Register,
        },
        {
          path: '/recover',
          name: 'recover',
          component: Recover,
        },
      ],
    },
  ],
});
