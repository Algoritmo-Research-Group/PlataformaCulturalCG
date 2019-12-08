import Vue from 'vue';
import App from './App.vue';
import './quasar';
import router from './router';
import store from './store';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

import { AmplifyEventBus } from 'aws-amplify-vue';
AmplifyEventBus.$on('authState', info => {
  console.log(`Here is the auth event that was just emitted by an Amplify component: ${info}`)
});

import Map from './components/Map.vue';

Vue.use(AmplifyPlugin, AmplifyModules);
Vue.component('map-import', Map);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
