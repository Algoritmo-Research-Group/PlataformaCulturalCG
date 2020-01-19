<template>
  <div class="body">
    <div class="overlay" ref="overlay">
      <!-- <img class="imgPresentation" src="../assets/esboco.png" alt=""> -->
      <h1 class="presentation" ref="presentation">CULTURA</h1>
    </div>

    <q-btn class="btn-menu" round @click="showNav" size="1.3em">
      <q-icon name="keyboard_arrow_right" size="2.5em"></q-icon>
    </q-btn>
    <nav class="column align-center space-around" :class="{ 'show' : showSideBar }">
      <q-btn class="text-black top-32" @click="showNav" round size="1.3em" style="position: absolute;">
        <q-icon name="keyboard_arrow_left" color="white"></q-icon>
      </q-btn>
      <ul class="navigation-list">
        <li class="navigation-item">
          <router-link class="navigation-link a" type="link" to="/about" exact>
            <span class="text-link" data-text="SOBRE">SOBRE</span>
          </router-link>
        </li>
        <li class="navigation-item">
          <router-link class="navigation-link a" ref="link" to="/schedule" exact>
            <span class="text-link" data-text="AGENDA">AGENDA</span>
          </router-link>
        </li>
        <li class="navigation-item">
          <router-link class="navigation-link a" ref="link" to="/signIn" exact>
            <span class="text-link" data-text="LOGIN">LOGIN</span>
          </router-link>
        </li>
      </ul>
      <div class="row space-around social-media">
        <q-btn flat round type="a" target="_blank" size="1.1em" href="https://www.facebook.com/AlgoRitmo.ufms/">
          <q-icon size="1.3em" name="fab fa-facebook-square" color="white"></q-icon>
        </q-btn>
        <q-btn flat round  type="a" target="_blank" size="1.1em" href="https://www.instagram.com/algo.ritmo_/">
          <q-icon size="1.3em" name="fab fa-instagram" color="white"></q-icon>
        </q-btn>
      </div>
      
    </nav>

    <div class="title-field">
      <h1 class="title" data-text="CARTOGRAFIA DA CULTURA">cartografia da cultura</h1>
    </div>

    <div class="wrapper">
      <q-btn round class="btn-filter" @click="showFilterBar" size="1.3em">
        <q-icon size="2.5em" name="keyboard_arrow_up" />
      </q-btn>
      <div class="filter" :class="{ 'showFilter' : showFilter }">
        <div class="row first-context">
          <q-select
            class="primaryfltr"
            v-show="opemFilter"
            v-model="primarySelection"
            multiple
            :options="primaryOptions"
            rounded
            outlined
            dense
            options-dense
            options-selected-class="text-blue"
            label="Categorias"
            color="primary"
            bg-color="white"
            emit-value
            map-options
          >
            <template v-slot:option="scope">
              <q-item
                v-bind="scope.itemProps"
                v-on="scope.itemEvents"
                style=""
              >
                <q-item-section>
                  <q-item-label v-html="scope.opt.label" ></q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-toggle v-model="primarySelection" :val="scope.opt.value" />
                </q-item-section>
              </q-item>
            </template>
          </q-select>

          <q-select
            class="artistfltr"
            v-show="opemFilter"
            v-model="artistSelection"
            multiple
            :options="artistOptions"
            rounded
            outlined
            dense
            options-dense
            options-selected-class="text-blue"
            label="Artistas"
            color="primary"
            bg-color="white"
            emit-value
            map-options
          >
            <template v-slot:option="scope">
              <q-item
                v-bind="scope.itemProps"
                v-on="scope.itemEvents"
                style=""
              >
                <q-item-section>
                  <q-item-label v-html="scope.opt.label" ></q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-toggle v-model="artistSelection" :val="scope.opt.value" />
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
    </div>

    <div class="map-container">
      <l-map
        style="width: 100%, height: 100vh"
        :zoom="zoom"
        :center="center"
        :options="{zoomControl: false}"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <l-tile-layer
          :url="url"
        ></l-tile-layer>
        <l-control-zoom position="topright" style="position: absolute; top: 100px" ></l-control-zoom>
        <l-marker class="" :lat-lng="markerLatLng">
          <l-popup class="align-center hover-scale05" style="max-width: 230px; padding: 0px">
            <div class="column" style="width: 100%">
              <div class="row align-center" style="justify-content: flex-start;">
                <q-avatar class="" size="60px;" style="width: 60px">
                  <img src="../assets/statics/avatar01.jpg">
                </q-avatar>
                <span style="margin-left: 16px; font-size: 15px; font-weight: bold">Pin de exemplo</span>
              </div>
              <div class="description-pin">
                <p style="font-size: 13px; ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Accusantium excepturi, quisquam similique quis 
                </p>
              </div>
              <div class="actions flex flex-end">
                <q-btn rounded color="teal" >
                  <q-icon size="1.2em" name="fas fa-arrow-right" />
                </q-btn>
              </div>
            </div>
          </l-popup>
        </l-marker>
        <!-- <l-control-attribution position="topleft" prefix="Algo+Ritmo - Research Group" /> -->
      </l-map>
    </div>
  </div>
</template>

<script>
import * as Vue2Leaflet from 'vue2-leaflet';
import {
  LMap, LTileLayer, LMarker, LControlZoom, LPopup
} from 'vue2-leaflet';


import gsap from 'gsap/all';
import { TweenMax, Expo } from 'gsap/all';
gsap.registerPlugin( TweenMax, Expo );

export default {
  name: 'PageHome',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlZoom,
    LPopup,
  },
  data() {
    return {
      showSideBar: false,
      showFilter: false,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 15,
      center: [-20.460277, -54.612277],
      markerLatLng: [-20.460277, -54.612277],
      bounds: null,
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      opemFilter: false,
      // selection refece a seleçoes de categorias
      primarySelection: [],
      artistSelection: [],
      primaryOptions: [
        { label: 'Produtores Culturais', value: 1 },
        { label: 'Estabelecimentos', value: 2 },
        { label: 'Instituições', value: 3 },
      ],
      artistOptions: [
        { label: 'Pintor', value: 4 },
        { label: 'Dançarino', value: 5 },
        { label: 'Músico', value: 6 },
        { label: 'Poeta', value: 7 },
      ]
    }
  },
  mounted() {
    const { overlay, presentation, title, smIcon1, smIcon2 } = this.$refs;

    TweenMax.to(presentation, 2, {
          opacity: 0,
          y: -60,
          ease: Expo.easeInOut
    });

    TweenMax.to(overlay, 2, {
          delay: 1,
          top: "-100%",
          ease: Expo.easeInOut
    });

    TweenMax.staggerFrom(title, 2, {
          delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut
    }, 0.2);

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
    onChange: function (message) {
      console.log(message)
    },
    showNav() {
      this.showSideBar = !this.showSideBar;
    },
    showFilterBar() {
      this.showFilter = !this.showFilter;
    }
  },
};
</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css?family=Monoton|Righteous&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  position: relative;
  font-family: 'Poppins';
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.overlay {
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #fff;
  top: 0%;
}

.overlay img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: black;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 14px;
  text-transform: uppercase;
  // font-size: 3.25rem;
  // font-weight: 900;
  // padding: 0.5em 1em;
  // color: #1d1e22;
  // background-color: #f4f4f4;
  // mix-blend-mode: screen;
  // border-radius: 0.2em;
  // pointer-events: none;
  // user-select: none;
}

.btn-menu {
  z-index: 2; 
  position: absolute; 
  top: 32px; 
  left: 32px; 
  box-shadow: none;
}

.btn-menu:hover::before {
  content: 'MENU';
  font-family: 'Courier new';
  font-size: 1.5em;
  font-weight: 900;
  letter-spacing: 4px;
  margin-left: 45px;
  color: black;
}

nav{
  height: 100vh;
  width: 0px;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 0;
}

.show {
  width: 120px;
  transition: 1.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 1;
}

.navigation-list {
  position: absolute;
  top: 15%;
}

.navigation-item {
  display: block;
  user-select: none;
  margin: 16px;
}

.a {
  font-family: 'Monoton', 'Courier New', Courier, monospace;
  font-size: 2.2em;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
}

span {
  position: relative;
  display: block;
  writing-mode: vertical-lr;
}

.navigation-item span:before {
  height: 0px;
  color: white;
  overflow: hidden;
  position: absolute;
  content: attr(data-text);
  transition: all 1s cubic-bezier(0.84, 0, 0.08, 0.99);
}

.navigation-item span:hover::before {
  height: 100%;
}

.social-media {
  height: 50px;
  position: absolute;
  bottom: 8px !important;
}

.wrapper {
  // background: url('../assets/unsplash02.jpg') no-repeat 50% 50%;
  // background-size: cover;
  height: 100vh;
}

.map-container {
  position: absolute;
  z-index: 0;
  top: 0px;
  // left: 50%;
  // transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  // overflow: hidden;
}

.title-field {
  position: absolute;
  top: 0px !important;
  left: 50% !important;
  transform: translateX(-50%);
  width: 100%;
  height: 100px;
  z-index: 1;
  text-align: center;
  display: block;
  user-select: none;
  // border: 2px solid red;
}

.title {
  font-family: 'Monoton' !important;
  font-size: 3.8em;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: black;
  position: relative;
}

.filter {
  display: flex;
  position: absolute;
  bottom: 0px;
  right: 50%;
  transform: translateX(50%);
  height: 0px;
  width: 70%;
  background-color: black;
  z-index: 2;
  overflow: hidden;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 0; 
}

.showFilter {
  height: 80px;
  transition: 1.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 1;
}

.first-context {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex start;
  //border: 2px solid green;
}

.primaryfltr {
  margin-right: 8px;
  min-width: 250px;
  max-height: 50px;
}

.artistfltr{
  margin-right: 50px;
  min-width: 200px;
  max-height: 50px;
}

.btn-filter {
  position: absolute;
  bottom: 32px;
  right: 32px;
  z-index: 1;
  box-shadow: none;
  content: 'Filtro';
}

.btn-filter:hover::before {
  content: 'FILTRO';
  font-family: 'Courier new';
  font-size: 1.2em;
  font-weight: 900;
  letter-spacing: 4px;
  margin-left: -120px;
  color: black;
  box-shadow: none;
}

</style>
