<template>
  <div class="body">
    <div class="overlay" ref="overlay">
      <!-- <img class="imgPresentation" src="../assets/esboco.png" alt=""> -->
      <h1 class="presentation" ref="presentation">CULTURA</h1>
    </div>
    <div class="wrapper">
      <div class="title">
        <h1 ref="title">cartografia da cultura</h1>
      </div>
      <div class="nav">
        
          <q-btn to="/about" class="btn-menu-text btn-sobre">
            <span class="link-menu">SOBRE</span>
          </q-btn>
          <!-- <li ref="btn-menu-2">
            <router-link ref="menu" to="/profile" exact>
              <span class="link-menu">PERFIL</span>
            </router-link>
          </li> -->
          <q-btn to="/schedule" class="btn-menu-text btn-agenda">
            <span class="link-menu text-black">AGENDA</span>
          </q-btn>
          <q-btn to="/signIn" class="btn-menu-text btn-login">
            <span class="link-menu text-white">LOGIN</span>
          </q-btn>
        
      </div>
      <div class="filter">
        <div class="row first-context">
          <q-select
            class="opmfltr"
            v-show="opemFilter"
            v-model="model"
            multiple
            :options="options"
            use-chips
            stack-label
            rounded
            outlined
            dense
            options-selected-class="text-deep-orange"
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
                  <q-toggle v-model="model" :val="scope.opt.value" />
                </q-item-section>
              </q-item>
            </template>
          </q-select>

          <q-btn class="btn-filter" @click="opemFilter=!opemFilter" round color="black">
            <q-icon size="1.2em" name="fas fa-filter" />
          </q-btn>
        </div>
      </div>
      <!-- <div class="social-media">
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
      </div> -->
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
        <l-control-zoom position="topleft" style="position: absolute; top: 100px" ></l-control-zoom>
        <l-marker :lat-lng="markerLatLng">
          <l-popup class="align-center" style="max-width: 230px; padding: 0px">
            <div class="column" style="width: 100%">
              <div class="row align-center" style="justify-content: flex-start;">
                <q-avatar class="" size="60px;" style="width: 60px">
                  <img src="../assets/avatar01.jpg">
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
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 15,
      center: [-20.460277, -54.612277],
      markerLatLng: [-20.460277, -54.612277],
      bounds: null,
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      opemFilter: false,
      // selection refece a seleçoes de categorias
      selection: [ 'Instituições', 'Produtores', 'Estabelecimentos', 'Artistas'],
      model: [],
      // obeter opçoes do back para popular o vetor options de categorias
      options: [
        { id: '1', label: 'Instituições', value: '1', color: 'primary' },
        { id: '2', label: 'Produtores', value: '2', color: 'primary' },
        { id: '3', label: 'Estabelecimetos', value: '3', color: 'secondary' },
        { id: '4', label: 'Artistas', value: '4', color: 'secondary' }
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

    // TweenMax.staggerFrom(btn-menu, 2, {
    //       delay: 3.4, opacity: 0, y: 20, ease: Expo.easeInOut
    // }, 0.2);

    // TweenMax.staggerFrom(btn-menu-2, 2, {
    //       delay: 3.6, opacity: 0, y: 20, ease: Expo.easeInOut
    // }, 0.2);

    // TweenMax.staggerFrom(mC3, 2, {
    //       delay: 3.8, opacity: 0, y: 20, ease: Expo.easeInOut
    // }, 0.2);

    // TweenMax.staggerFrom(smIcon1, 2, {
    //       delay: 3.5, opacity: 0, y: 50, ease: Expo.easeInOut
    // }, 0.2);

    // TweenMax.staggerFrom(smIcon2, 2.2, {
    //       delay: 3.7, opacity: 0, y: 50, ease: Expo.easeInOut
    // }, 0.2);

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
  top: 0px !important
  left: 50% !important
  transform: translateX(-50%)
  width: 70%
  height: 5rem
  z-index: 1
  text-align: center

.title h1
  font-family: 'Monoton' !important
  font-size: 2.8rem
  letter-spacing: 4px
  text-transform: uppercase
  color: black

.btn-sobre
  position: absolute
  left: 0px
  bottom: 10px
  z-index: 1
  width: 9rem
  height: 3rem
  border-radius: 0px
  background-color: black
  box-shadow: none

.btn-agenda
  position: absolute
  left: 0px
  bottom: 75px
  z-index: 1
  width: 9rem
  height: 3rem
  border-radius: 0px
  background-color: #fbec5d
  color: black
  box-shadow: none

.btn-login
  position: absolute
  right: 0px
  top: 10px
  z-index: 1
  width: 9rem
  height: 3rem
  border-radius: 0px
  background-color: black
  color: black
  box-shadow: none
  text-align: center

.text-black
  color: black

.text-white
  color: white

.btn-menu-text
  letter-spacing: 6px
  padding: 16px
  text-align: center
  font-family: 'Comic Sans' !important
  font-size: 22px
  

.link-menu
  text-decoration: none !important

.filter
  display: flex
  position: absolute
  bottom: 24px
  right: 24px
  z-index: 1
  //border: 2px solid red

.first-context
  display: flex
  flex-direction: row
  justify-content: flex-end
  align-items: flex start
  //border: 2px solid green

.opmfltr
  margin-right: 50px
  min-width: 250px

.filter-card
  background-color: white
  // z-index: 1
  overflow: hidden
  position: absolute
  bottom: 0px
  right: 50px
  max-height: 50px
  min-width: 350px


.btn-filter
  position: absolute
  bottom: 0px
  right: 0px
  z-index: 1

.social-media
  position: absolute
  top: 30px
  left: 20px
  z-index: 1

.social-media ul li
  list-style: none
  display: block
  color: black
  margin-top: 8px

</style>
