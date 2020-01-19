<template>
  <q-page>
    <div class="body">
      <div class="smooth">
        <q-btn to="/" class="btn-menu" round size="2em" style="position: fixed; top: 32px; left: 32px; z-index: 1; box-shadow: none;">
          <q-icon name="keyboard_arrow_left" size="2.5em"></q-icon>
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
          <div class="row content-center">
            <div class="col-l">
              <h2 class="ttlplt">ALGO+RITMO</h2>
              <span class="sttlplt">Grupo de Pesquisa</span>

              <q-scroll-area
                class="text-area"
                :thumb-style="thumbStyle"
                :content-style="contentStyle"
                :content-active-style="contentActiveStyle"
              >
                <p class="pplt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br>
                <p class="pplt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br>
                <p class="pplt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              </q-scroll-area>
            </div>

            <div class="col-r">
              <q-carousel
                class="carousel-plt"
                swipeable
                animated
                v-model="slide"
                :autoplay="autoplay"
                ref="carousel"
                infinite
              >
                <q-carousel-slide :name="1">
                  <img class="img-carousel" src="../assets/statics/avatar01.jpg" alt="">
                </q-carousel-slide>
                <q-carousel-slide :name="2">
                  <img class="img-carousel" src="../assets/statics/bg01.jpg" alt="">
                </q-carousel-slide>
                <q-carousel-slide :name="3">
                  <img class="img-carousel" src="../assets/statics/people01.jpg" alt="">
                </q-carousel-slide>
                <q-carousel-slide :name="4">
                  <img class="img-carousel" src="../assets/statics/group01.jpg" alt="">
                </q-carousel-slide>

                <template v-slot:control>
                  <!-- <q-carousel-control
                    position="top-right"
                    :offset="[18, 18]"
                    class="text-white"
                    style="background: rgba(0, 0, 0, .3); padding: 4px 8px 4px 0; border-radius: 4px"
                  >
                    <q-toggle dense dark color="orange" v-model="autoplay" label="Auto Play" />
                  </q-carousel-control> -->

                  <q-carousel-control
                    position="bottom-right"
                    :offset="[18, 18]"
                    class="q-gutter-xs"
                  >
                    <q-btn
                      push flat round dense text-color="white" icon="keyboard_arrow_left"
                      @click="$refs.carousel.previous()"
                      style="margin-right: 16px"
                    />
                    <q-btn
                      push flat round dense text-color="white" icon="keyboard_arrow_right"
                      @click="$refs.carousel.next()"
                    />
                  </q-carousel-control>
                </template>
              </q-carousel>
            </div>
          </div>
        </section>

        <section id="frm">
          <h2 class="ttlfrm">FÓRUM DE CULTURA</h2>
          <span class="sttlfrm">Cultura em Movimento - Campo Grande</span>
          <p class="pfrm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img class="img1" src="../assets/statics/people01.jpg" alt="">
          <img class="img2" src="../assets/statics/people02.jpg" alt="">
        </section>

        <section id="faq" class="justify-center">
          <!-- <h2 class="ttlfq">FAQ</h2> -->
          <div class="top10">
            <q-avatar class="imgfq" size="120px">
              <img src="../assets/statics/avatar01.jpg">
            </q-avatar>
            <h3 class="margin-top16 ttlfq">Como Podemos te Ajudar?</h3>
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
            <h2 class="ttlctt">Contate-nos</h2>
          </div>
          <div class="row social-media">
              <q-btn flat round type="a" target="_blank" size="1.1em" href="https://www.facebook.com/AlgoRitmo.ufms/">
                <q-icon size="1.3em" name="fab fa-facebook-square" color="white"></q-icon>
              </q-btn>
              <q-btn flat round  type="a" target="_blank" size="1.1em" href="https://www.instagram.com/algo.ritmo_/">
                <q-icon size="1.3em" name="fab fa-instagram" color="white"></q-icon>
              </q-btn>
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
      slide: 1,
      autoplay: true
    }
  },
  methods () {

  },
  computed: {
    contentStyle () {
      return {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: 'white'
      }
    },

    contentActiveStyle () {
      return {
        backgroundColor: '#1d1e22',
        color: 'white'
      }
    },

    thumbStyle () {
      return {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: 'white',
        width: '5px',
        opacity: 0.75
      }
    }
  }
};
</script>

<style lang="scss" scoped>

*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  //background: url('../assets/statics/unsplash02.jpg') no-repeat 50% 50%;
  // background-size: cover;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 100vh;
  flex-direction: column;
  line-height: 1.5;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 62.5%;
  color: #f4f4f4;
  background-color: #1d1e22;
  overflow-x: hidden;
}

.scrolls, .center {
  font-size: 0.825rem;
}

.smooth {
  position: relative;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  overflow-y: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
}

.btn-menu:hover::before {
  content: 'Voltar';
  font-family: 'Courier new';
  font-size: 1.2em;
  font-weight: 900;
  letter-spacing: 4px;
  margin-left: 45px;
  color: white;
  box-shadow: none;
}

.header {
  position: fixed;
  top: 32px;
  right: 32px;
  transform: translateY( -50%);
  z-index: 1;
  // width: 200px;
  min-height: 60px;
  font-size: 1rem;
  mix-blend-mode: luminosity;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
} 

.header ul li {
  margin: 0 1em;
  padding: 1em;
  display: inline-block;
}

.header ul li a {
  position: relative;
  text-decoration: none;
  text-transform: lowercase;
  font-weight: 500;
  font-size: 1.2em;
  font-family: 'Courier New', Courier, monospace;
  color: #f4f4f4;
}

.header ul li a::after {
  position: absolute;
  bottom: -3px;
  left: 0;
  content: '';
  width: 0;
  height: 3px;
  transition: all 0.2s linear;
}

.header ul li a:hover::after {
  width: 100%;
  background-color: #f4f4f4;
}
// fim de header ul



section {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  // background-color: #f4f4f4;
  // background-image: url('../assets/statics/unsplash02.jpg');
  background-size: cover;
  scroll-snap-align: none;
}

.content-center {
  width: 100%;
  height: 90%;
  position: absolute;
  top: 10%;
  //border: 2px solid green;
}

.col-l {
  width: 60%;
  height: 100%;
  // border: 2px solid yellow;
  position: relative;
  padding-left: 64px;

  .ttlplt {
    margin-top: 52px;
    padding: 0;
    font-family: 'Monoton';
    font-weight: normal;
  }

  .sttlplt {
    margin-top: 10px;
    font-family: 'Courier New', Courier, monospace;
  }

  .text-area {
    margin-top: 24px;
    height: 360px;
    width: 95%;
  }
}


.col-r {
  position: relative;
  width: 40%;
  height: 100%;
  // border: 2px solid red;

  .carousel-plt {
    padding: 0px;
    // max-width: 450px;
    height: 380px;
    position: absolute;
    left: 32px;
    top: 50px;
    border: 2px solid white;
    overflow-x: hidden !important;
    transition: .5 cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .img-carousel {
    max-height: 300px;
    max-width: 450px;
    overflow: hidden;
  }
}


section h2 {
  text-transform: uppercase;
  font-size: 3.25rem;
  font-weight: 700;
  padding: 0.5em 1em;
  color: #f4f4f4;
  // background-color: #f4f4f4;
  // mix-blend-mode: screen;
  // border-radius: 0.25em;
  pointer-events: none;
  user-select: none;
}

.ttlfrm {
  position: absolute;
  top: 120px;
  left: 10%;
  padding: 0;
  font-family: 'Monoton';
  font-weight: normal;
}

.ttlfq, .ttlctt {
  position: absolute;
  top: 120px;
  left: 10%;
  padding: 0;
  font-family: 'Courier New', Courier, monospace;
  font-weight: normal;
}

.sttlfrm {
  position: absolute;
  left: 10%;
  top: 180px;
  font-family: 'Courier New', Courier, monospace;
}

// plt -> plataforma, frm -> forum
.pplt, .pfrm {
  font-family: 'Courier New', Courier, monospace;
}

.ttl-answer {
  font-size: 20px;
}

.p-answer {
  color: black;
  font-size: 18px;
}

.img1 {
  max-width: 20rem;
  position: absolute;
  top: 150px;
  right: 6.25rem;
}

.img2 {
  max-width: 20rem;
  position: absolute;
  top: 350px;
  right: 9.375rem;
}

.imgfq {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

section:nth-child(2) {
  background-color: #1d1e22;
  // background-color: url('../assets/statics/road.jpg');
}

section:nth-child(3) {
  background-color: #1d1e22;
  // background-image: url('../assets/statics/mountain.jpg');
}

section:nth-child(4) {
  background-color: #1d1e22;
  // background-image: url('../assets/statics/unsplash01.jpg');
}

@keyframes new {
  0% { transform:scaleX(1) }
  50% { transform:scaleX(.95) }
  100% { transform:scaleX(1) }
}

.social-media {
  position: absolute;
  bottom: 32px;
  right: 32px;
}

</style>
