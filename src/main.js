import Vue from 'vue';
import App from './App.vue';
import './quasar';

import router from './router';
import store from './store';

import {
  LMap, LTileLayer, LMarker, LControlZoom, LControlAttribution, LPopup
} from 'vue2-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-control-zoom', LControlZoom);
Vue.component('l-control-attribution', LControlAttribution);
Vue.component('l-popup', LPopup);


delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
import { AmplifyEventBus } from 'aws-amplify-vue';
AmplifyEventBus.$on('authState', info => {
  console.log(`Here is the auth event that was just emitted by an Amplify component: ${info}`)
});

import CardLogo from './components/CardLogo.vue';
Vue.component('card-logo', CardLogo);

Vue.use(AmplifyPlugin, AmplifyModules);
Vue.component('map-import', Map);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
