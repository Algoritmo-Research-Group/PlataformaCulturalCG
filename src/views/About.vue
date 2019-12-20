<template>
  <q-page>
    <div class="body">
      <div class="smooth">
        <div class="header">
          <ul>
            <li><a href="#home">SOBRE NÓS</a></li>
            <li><a href="#about">O FÓRUM</a></li>
            <li><a href="#price">price</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </div>
        <section id="home">
          <h2>ALGO+RITMO</h2>
        </section>
        <section id="about">
          <h2>FÓRUM DE CULTURA</h2>
        </section>
        <section id="price">
          <h2>FAQ</h2>
        </section>
        <section id="contact">
          <h2>ALGO AQUI</h2>
        </section>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageAbout',
  data () {
    return{
    }
  },
  methods () {

  }
};
</script>

<style lang="sass">

*, ::before, ::after
  margin: 0
  padding: 0
  box-sizing: border-box

.body
  font-family: 'Poppins !important'
  background: url('../assets/unsplash02.jpg') no-repeat 50% 50%
  background-size: cover
  position: relative
  overflow: hidden
  display: flex
  height: 100vh
  flex-direction: column
  line-height: 1.5
  font-family: 'Roboto Condensed', sans-serif
  font-size: 62.5%
  color: #f4f4f4
  background-color: #1d1e22
  overflow-x: hidden

.title
  position: absolute
  top: 10%
  left: 20%
  font-family: sans-serif
  font-size: 30px
  font-weight: 500
  word-wrap: break-word

.scrolls .center
  font-size: 0.825rem

.smooth
  position: relative
  width: 100%
  height: 100%
  scroll-behavior: smooth
  overflow-y: scroll
  scroll-snap-type: mandatory
  scroll-snap-points-y: repeat(100vh)
  scroll-snap-type: y mandatory

.header
  position: fixed
  top: 50%
  left: 32px
  transform: translateY( -50%)
  z-index: 1
  display: flex
  width: 100%
  min-height: 60px
  font-size: 1rem
  mix-blend-mode: luminosity

.header ul
  margin: 0
  padding: 0
  list-style-type: none
  display: flex
  flex-direction: column
  justify-content: center

.header ul li
  margin: 0 1em
  padding: 1em

.header ul li a
  position: relative
  text-decoration: none
  text-transform: uppercase
  font-weight: 600
  color: #f4f4f4

.header ul li a::after
  position: absolute
  bottom: -3px
  left: 0
  content: ''
  width: 0
  height: 3px
  transition: all 0.2s linear

.header ul li a:hover::after
  width: 100%
  background-color: #f4f4f4

section
  position: relative
  display: flex
  width: 100%
  min-height: 100vh
  flex-flow: column wrap
  align-items: center
  justify-content: center
  font-size: 1rem
  background-color: #f4f4f4
  background-image: url('../assets/unsplash02.jpg')
  background-size: cover
  scroll-snap-align: none

section h2
  text-transform: uppercase
  font-size: 3.25rem
  font-weight: 900
  padding: 0.5em 1em
  color: #1d1e22
  background-color: #f4f4f4
  mix-blend-mode: screen
  border-radius: 0.25em
  pointer-events: none
  user-select: none

section:nth-child(2)
  background-image: url('../assets/road.jpg')

section:nth-child(3)
  background-image: url('../assets/mountain.jpg')

section:nth-child(4)
  background-image: url('../assets/unsplash01.jpg')

.social
  position: fixed
  bottom: 20px
  right: 20px
  background: red
  font-family: verdana
  padding: inherit5px
  border-radius: 5px
  animation: new .5s linear infinite
  margin-top: -50px

.social a
  text-decoration: none
  color: #fff
  font-size: 18px

@keyframes new 0%: transform:scaleX(1), 50%: transform:scaleX(.95), 100%: transform:scaleX(1)

</style>
