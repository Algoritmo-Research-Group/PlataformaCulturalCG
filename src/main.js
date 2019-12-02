import Vue from 'vue';
import App from './App.vue';
import Map from './components/Map.vue';
import router from './router';
import store from './store';
import './quasar';

Vue.component('map', Map);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
