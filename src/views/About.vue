<template>
  <q-page>
    <div class="body">
      <div class="smooth">
        <q-btn class="outline" filled to="/" text-color="white" style="background-color: transparent; width: 60px; min-height: 150px;
         position: absolute; top: 64px; left: 62px; border: 2px solid white; border-radius: 20px; padding: 10px; z-index: 1;">
          <div class="column space-around" style="height: 100%;">
            <q-icon name="keyboard_arrow_left"></q-icon>
            <span style="writing-mode: vertical-rl; text-orientation: upright; font-size: 18px; font-weight: 800">Mapa</span>
          </div>
        </q-btn>
        <div class="header">
          <ul>
            <li><a href="#plt">SOBRE NÓS</a></li>
            <li><a href="#frm">O FÓRUM</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#algo">CONTATO</a></li>
          </ul>
        </div>
        <section id="plt">
          <h2 class="ttlplt">ALGO+RITMO</h2>
          <span class="sttlplt">Grupo de Pesquisa</span>
          <p class="pplt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p class="p2plt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img class="img1plt" src="../assets/group01.jpg" alt="">
          <img class="img2plt" src="../assets/laptable01.jpg" alt="">
        </section>
        <section id="frm">
          <h2 class="ttlfrm">FÓRUM DE CULTURA</h2>
          <span class="sttlfrm">Cultura em Movimento - Campo Grande</span>
          <p class="pfrm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img class="img1" src="../assets/people01.jpg" alt="">
          <img class="img2" src="../assets/people02.jpg" alt="">
        </section>
        <section id="faq" class="justify-center">
          <!-- <h2 class="ttlfq">FAQ</h2> -->
          <div class="top10">
            <q-avatar class="imgfq" size="120px">
              <img src="../assets/avatar01.jpg">
            </q-avatar>
            <h3 class="margin-top16">Como Podemos te Ajudar?</h3>
            <q-input class="margin-top16" rounded outlined v-model="inputFaq" color="white" style="min-width: 550px; font-size: 22px;">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
            <div class="margin-top32" style="max-width: 600px ">
              <q-list bordered class="rounded-borders">
                <q-expansion-item
                  expand-separator
                  icon=""
                  label=""
                  caption=""
                >
                  <template v-slot:header>
                    <q-item-section>
                      <span class="ttl-answer">O que a plataforma propõe?</span>
                    </q-item-section>
                  </template>
                  <q-card>
                    <q-card-section>
                      <p class="p-answer">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </p>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item
                  expand-separator
                  icon=""
                  label=""
                >
                  <template v-slot:header>
                    <q-item-section>
                      <span class="ttl-answer">Pergunta X</span>
                    </q-item-section>
                  </template>
                  <q-card>
                    <q-card-section>
                      <p class="p-answer">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </p>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item
                  expand-separator
                  icon=""
                  label=""
                >
                  <template v-slot:header>
                    <q-item-section>
                      <span class="ttl-answer">Pergunta Y</span>
                    </q-item-section>
                  </template>
                  <q-card>
                    <q-card-section>
                      <p class="p-answer">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </p>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
            </div>
          </div>
        </section>
        <section id="algo" class="justify-center">
          <div class="top10">
            <h2>Contate-nos</h2>
          </div>
        </section>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Pageforum',
  data () {
    return{
      inputFaq: '',
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
  width: 200px
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
  font-weight: 700
  padding: 0.5em 1em
  color: #f4f4f4
  // background-color: #f4f4f4
  // mix-blend-mode: screen
  // border-radius: 0.25em
  pointer-events: none
  user-select: none

.ttlplt, .ttlfrm, .ttlfq, .ttlctt
  position: absolute
  top: 150px
  left: 20%
  padding: 0

.sttlplt, .sttlfrm
  position: absolute
  left: 20%
  top: 210px

.pplt, .pfrm
  position: absolute
  top: 260px
  left: 20%
  max-width: 600px

.p2plt
  position: absolute
  top: 420px
  left: 20%
  max-width: 600px

.ttl-answer
  font-size: 20px

.p-answer
  color: black
  font-size: 18px

.img1, .img1plt
  max-width: 350px
  position: absolute
  top: 25%
  right: 20%

.img2, .img2plt
  max-width: 360px
  position: absolute
  top: 50%
  right: 18%

.imgfq
  position: relative
  left: 50%
  transform: translateX(-50%)


section:nth-child(2)
  background-image: url('../assets/road.jpg')

section:nth-child(3)
  background-image: url('../assets/mountain.jpg')

section:nth-child(4)
  background-image: url('../assets/unsplash01.jpg')

@keyframes new 0%: transform:scaleX(1), 50%: transform:scaleX(.95), 100%: transform:scaleX(1)

</style>
