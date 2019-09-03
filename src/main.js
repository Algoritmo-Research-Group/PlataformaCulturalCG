import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';
import router from './router';
import store from './store';
import './quasar';


Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: { key: 'AIzaSyC75wkZ9FZwiwBKxZpOZR0TjjP2BBGlsu8' },
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
