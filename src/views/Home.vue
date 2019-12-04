<template>
  <div class="body">
    <header>
      <nav>
        <h3 id="title" ref="title"> CARTOGRAFIA  DA CULTURA </h3>
        <div class="row">
          <span class="forum-text" ref="ftext">Fórum de Cultura de Campo Grande</span>
          <span class="subtext" ref="subtext"> CULTURA EM MOVIMENTO</span>
        </div>
      </nav>
    <section>
      <div class="img-box" ref="imgbox">
        <img src="../assets/map.jpg" alt="" style="height: 90%">
        <!-- <map-import></map-import> -->
        <q-list class="list rounded-borders" ref="list">
          <q-expansion-item class="menu" ref="menu" popup style="min-width: 200px;">
            <template v-slot:header>
              <q-item-section class="btn" ref="btn">
                <span class="title-menu">SOBRE</span>
              </q-item-section>
            </template>
            <q-separator />
            <q-card class="card">
              <q-card-section>
                <div class="column">
                  <router-link class="link" to="/About">A PLATAFORMA</router-link>
                  <a class="link" href=""> O FÓRUM </a>
                  <router-link class="link" to="/Terms" style="">NOSSOS TERMOS</router-link>
                  <router-link class="link" to="/Faq">FAQ</router-link>
                  <div class="row">
                    <q-btn flat round type="a" target="_blank" href="https://www.facebook.com/AlgoRitmo.ufms/">
                      <q-icon name="fab fa-facebook-square" style="color: #1e90ff"></q-icon>
                    </q-btn>
                    <q-btn flat round  type="a" target="_blank" href="https://www.instagram.com/algo.ritmo_/">
                      <q-icon name="fab fa-instagram" href="https://www.instagram.com/algo.ritmo_/" style="color: #E1306C"></q-icon>
                    </q-btn>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </section>
    </header>
    <div class="slider" ref="slider"></div>
  </div>
</template>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css?family=Alfa+Slab+One|Bowlby+One+SC|Calistoga|Monoton&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: lightblue;
  z-index: -1;
  background: linear-gradient(to left, #ba7453, #d1a984);
  align-items: center;

}

nav {
  display: grid;
  grid-template-columns: 10% 3fr 1fr 1fr 10%;
  min-height: 15vh;
  color: white;
  align-items: center;
  position: absolute;
  z-index: 3;
  top: 6%;
}

#title {
  font-family: 'Calistoga'; //Monotom, Bowlby One, Calistoga, Pacifico, Alfa Slab One.
  font-weight: normal;
  grid-column: 2/4;
  font-size: 62px;
}

.forum-text {
  font-family: 'Calistoga';
  font-weight: normal;
  font-size: 19px;
  justify-self: center;
}

.subtext {
  font-family: 'Monotom';
  font-weight: normal;
  font-size: 13px;
  justify-self: end;
}

.img-box {
  height: 100%;
  widht: 100%;
}

.img-box img {
  width: 100%;
  height: 70%;
  object-fit: cover;
  position: relative;
}

.img-box::after {
  content: "";
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.1;
}

section {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
}
// css menu -------------------------------
.list {
  list-style: none;
  font-family: 'Monotom';
  font-weight: normal;
  position: absolute;
  top: 60%;
  left: 10%;
  font-size: 50px;
  transform: translate(-20%, -70%);
  color: white;
  z-index: 3;
}

.title-menu
  font-size: 23px
  font-family: 'Calistoga'
  font-weight: normal

.menu
  font-family: 'Fredoka One';
  font-weight: normal;
  min-width: 150px;

.card
  background: none;
  border: none;

.link
  text-decoration: none;
  font-family: 'Calistoga';
  font-weight: normal;
  font-size: 18px;
  color: white;

.link:hover
  color: orange;

</style>

<script>
import gsap from 'gsap/all';
import { TweenMax, TimelineMax, Power2 } from 'gsap/all';
gsap.registerPlugin( TweenMax, TimelineMax, Power2 );

export default {
  name: 'PageHome',
  mounted() {
    const { imgbox, slider, title, ftext, subtext, list } = this.$refs;
    const timeline = new TimelineMax();

    timeline.fromTo(imgbox, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(imgbox, 1.2, { width: "100%"}, { width: "80%", ease: Power2.easeInOut})
    .fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
    .fromTo(title, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(list, 0.5, { opacity: 0, x: 0 }, { opacity: 1, x: 30 }, "-=0.5")
    .fromTo(subtext, 1.1, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1")
    .fromTo(ftext, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1");
  },
  methods() {

  }
};
</script>
