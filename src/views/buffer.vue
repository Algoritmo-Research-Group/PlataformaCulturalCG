<template>
  <div class="body">
    <div class="overlay" ref="overlay">
      <img class="imgPresentation" src="../assets/esboco.png" alt="">
      <h1 class="presentation" ref="presentation">CULTURA</h1>
    </div>
    <div class="wrapper">
      <div class="title">
        <h1 ref="title">cartografia da cultura</h1>
      </div>
      <div class="menu">
        <ul>
          <li ref="mC1">
            <router-link ref="menu" to="/about" exact>
              <span class="link-menu">SOBRE</span>
            </router-link>
          </li>
          <!-- <li ref="mC2">
            <router-link ref="menu" to="/profile" exact>
              <span class="link-menu">PERFIL</span>
            </router-link>
          </li> -->
          <li ref="mC2">
            <router-link ref="menu" to="/schedule" exact>
              <span class="link-menu">AGENDA</span>
            </router-link>
          </li>
          <li ref="mC3">
            <router-link ref="menu" to="/signIn" exact>
              <span class="link-menu">LOGIN</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="social-media">
        <ul>
          <li ref="smIcon1">
            <q-btn flat round type="a" target="_blank" href="https://www.facebook.com/AlgoRitmo.ufms/">
              <q-icon size="35px" name="fab fa-facebook-square"></q-icon>
            </q-btn>
          </li>
          <li ref="smIcon2">
            <q-btn flat round  type="a" target="_blank" href="https://www.instagram.com/algo.ritmo_/">
              <q-icon size="35px" name="fab fa-instagram" href="https://www.instagram.com/algo.ritmo_/"></q-icon>
            </q-btn>
          </li>
        </ul>
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
        <l-control-zoom position="topright"  ></l-control-zoom>
        <l-marker :lat-lng="markerLatLng">
          <l-popup>
            <div class="column align-center">
              <span>Au au</span>
              <q-avatar class="imgfq" size="60px">
                <img src="../assets/avatar01.jpg">
              </q-avatar>
            </div>
          </l-popup>
        </l-marker>
        <l-control-attribution position="topleft" prefix="Algo+Ritmo - Research Group" />
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
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 15,
      center: [-20.460277, -54.612277],
      markerLatLng: [-20.460277, -54.612277],
      bounds: null,
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }
  },
  mounted() {
    const { overlay, presentation, title, smIcon1, smIcon2, mC1, mC2, mC3 } = this.$refs;

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

    TweenMax.staggerFrom(mC1, 2, {
          delay: 3.4, opacity: 0, y: 20, ease: Expo.easeInOut
    }, 0.2);

    TweenMax.staggerFrom(mC2, 2, {
          delay: 3.6, opacity: 0, y: 20, ease: Expo.easeInOut
    }, 0.2);

    TweenMax.staggerFrom(mC3, 2, {
          delay: 3.8, opacity: 0, y: 20, ease: Expo.easeInOut
    }, 0.2);

    TweenMax.staggerFrom(smIcon1, 2, {
          delay: 3.5, opacity: 0, y: 50, ease: Expo.easeInOut
    }, 0.2);

    TweenMax.staggerFrom(smIcon2, 2.2, {
          delay: 3.7, opacity: 0, y: 50, ease: Expo.easeInOut
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
  },
};
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css?family=Monoton|Righteous&display=swap');

*
  margin: 0
  padding: 0
  box-sizing: border-box

.body
  position: relative
  font-family: 'Poppins !important'

.overlay
    z-index: 2
    position: absolute
    width: 100%
    height: 100vh
    background: #fff
    top: 0%

.overlay img
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.overlay h1
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  width: 100%
  text-align: center
  color: black
  font-size: 30px
  font-weight: 900
  letter-spacing: 14px
  text-transform: uppercase
  // font-size: 3.25rem
  // font-weight: 900
  // padding: 0.5em 1em
  // color: #1d1e22
  // background-color: #f4f4f4
  // mix-blend-mode: screen
  // border-radius: 0.2em
  // pointer-events: none
  // user-select: none

.wrapper
  // background: url('../assets/unsplash02.jpg') no-repeat 50% 50%
  // background-size: cover
  height: 100vh

.map-container
  position: absolute
  z-index: 0
  top: 0px;
  // left: 50%
  // transform: translate(-50%, -50%)
  height: 100%
  width: 100%
  // overflow: hidden

.title
  position: absolute
  top: 20px !important
  left: 50% !important
  transform: translateX(-50%)
  width: 80%
  height: 150px
  z-index: 1
  text-align: center

.title h1
  font-family: 'Monoton' !important
  font-size: 45px
  letter-spacing: 4px
  text-transform: uppercase
  color: black

.menu
  position: absolute
  top: 50%
  left: 0px
  z-index: 1
  transform: translateY(-50%)

.menu ul li
  padding: 8px
  letter-spacing: 6px
  background-color: black
  padding: 16px
  text-align: center
  font-family: 'Comic Sans' !important
  font-size: 22px
  

.link-menu
  list-style: none
  text-decoration: none !important
  color: white

.link-menu:hover
  color: orange

.social-media
    position: absolute
    right: 100px
    bottom: 50px
    z-index: 1

.social-media ul li
    list-style: none
    display: inline-block
    color: black

</style>
