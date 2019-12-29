<template>
  <div>
    <!--<div class="info" style="height: 15%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div>-->
    <l-map ref="myMap"
      style="width: 100%, height: 90vh"
      :zoom="zoom"
      :minZoom="1"
      :center="center"
      :options="{zoomControl: false}"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-control-zoom position="topright"  ></l-control-zoom>
      <l-tile-layer :noWrap="true" :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
  </div>
</template>

<script>
import * as Vue2Leaflet from 'vue2-leaflet';
import {
  LMap, LTileLayer, LMarker, LControlZoom,
} from 'vue2-leaflet';

export default {
  name: 'MyAwesomeMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlZoom,
  },
  data() {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 14,
      center: [-20.460277, -54.612277],
      markerLatLng: [-20.460277, -54.612277],
      bounds: null,
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
  },
  mounted() {
    // this.$refs.map.mapObject._onResize();
    this.$nextTick(() => {
      this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD();
    })
  },
};
</script>
