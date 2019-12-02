import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './quasar';
import Map from './components/Map.vue';


Vue.component('map-import', Map);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
