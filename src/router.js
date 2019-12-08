import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Profile from './views/Profile.vue';
import Adm from './views/AdmPage.vue';
import Register from './views/Register.vue';
import Recover from './views/Recover.vue';
import SignIn from './views/SignIn.vue';
import Debates from './views/Debates.vue';
import Schedule from './views/Schedule.vue';

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
          path: '/signIn',
          name: 'signIn',
          component: SignIn,
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
        {
          path: '/debates',
          name: 'debates',
          component: Debates,
        },
        {
          path: '/schedule',
          name: 'schedule',
          component: Schedule,
        },
      ],
    },
  ],
});
