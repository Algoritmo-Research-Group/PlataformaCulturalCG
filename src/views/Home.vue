<template>
  <div class="body">
    <div class="overlay" ref="overlay">
      <h1 class="presentation" ref="presentation">CULTURA</h1>
    </div>
    <div class="wrapper">
      <div class="title">
        <h1 ref="title">cartografia da cultura</h1>
      </div>
      <div class="menu">
        <ul>
          <li ref="mC1">
            <router-link class="link" ref="menu" to="/about" exact>
              <span class="menu-text">SOBRE</span>
            </router-link>
          </li>
          <li ref="mC2">
            <router-link class="link" ref="menu" to="/schedule" exact>
              <span class="menu-text">AGENDA</span>
            </router-link>
          </li>
          <li ref="mC3">
            <router-link class="link" ref="menu" to="/signIn" exact>
              <span class="menu-text">LOGIN</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="map-container">
        <map-import class="map" ref="map">
        </map-import>
      </div>
      <div class="social-media">
        <ul>
          <li ref="smIcon1">
            <q-btn flat round type="a" target="_blank" href="https://www.facebook.com/AlgoRitmo.ufms/">
              <q-icon name="fab fa-facebook-square"></q-icon>
            </q-btn>
          </li>
          <li ref="smIcon2">
            <q-btn flat round  type="a" target="_blank" href="https://www.instagram.com/algo.ritmo_/">
              <q-icon name="fab fa-instagram" href="https://www.instagram.com/algo.ritmo_/"></q-icon>
            </q-btn>
          </li>
        </ul>
      </div>
    </div>
    <div class="slider" ref="slider"></div>
  </div>
</template>

<script>
import gsap from 'gsap/all';
import { TweenMax, Expo } from 'gsap/all';
gsap.registerPlugin( TweenMax, Expo );

export default {
  name: 'PageHome',
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
  methods() {

  }
};
</script>

<style lang="sass">

*
  margin: 0
  padding: 0
  box-sizing: border-box

.body
  width: 100%
  height: 100%
  font-family: 'Poppins !important'

.overlay
    z-index: 1
    position: absolute
    width: 100%
    height: 100vh
    background: #fff
    top: 0%

.overlay h1
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    font-size: 25px
    font-weight: bolder
    letter-spacing: 14px
    color: black

.wrapper
  background: url('../assets/unsplash02.jpg') no-repeat 50% 50%
  background-size: cover
  height: 100vh

.map-container
  position: absolute
  top: 55%
  left: 50%
  transform: translate(-50%, -50%)
  height: 600px
  width: 1200px
  overflow: hidden

.title
  position: absolute
  top: 20px
  left: 50% !important
  transform: translateX(-50%)

.title h1
  font-family: 'Poppins !important'
  font-weight: bold
  font-size: 45px
  letter-spacing: 8px
  color: white
  text-transform: uppercase

.menu
  position: absolute
  top: 50%
  left: 30px
  z-index: 1
  transform: translateY(-50%)
  font-size: 22px
  font-weight: bold

.menu ul li
  list-style: none
  color: #fff
  padding-top: 20px
  letter-spacing: 8px

.social-media
      position: absolute
      right: 100px
      bottom: 3%

.social-media ul li
      list-style: none
      display: inline-block
      color: #fff
      padding-top: 20px


</style>
