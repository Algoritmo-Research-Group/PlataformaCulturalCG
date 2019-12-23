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

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
          path: '/profile',
          name: 'profile',
          component: Profile,
          meta: { requiresAuth: true}
        },
        {
          path: '/adm',
          name: 'adm',
          component: Adm,
          meta: { requiresAuth: true}
        },
        {
          path: '/debates',
          name: 'debates',
          component: Debates,
          meta: { requiresAuth: true}
        },
        {
          path: '/schedule',
          name: 'schedule',
          component: Schedule,
          meta: { requiresAuth: true}
        },
      ],
    },
  ],
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
      if (data && data.signInUserSession) {
        user = data;
      next()
      }
    }).catch((e) => {
      console.log(e)
    });
    if (!user) {
      next({path:'/'});
    }else {
      next()
    }
  } else {
  next()
  }
})



export default router;
