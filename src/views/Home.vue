<template> 
  <div class="body">
    <header>
    <nav>
      <h3 id="title" ref="title"> CARTOGRAFIA  DA CULTURA </h3>
      <span class="subtext" ref="subtext"> CULTURA EM MOVIMENTO</span>
    </nav>
    <section>
      <div class="img-box" ref="imgbox">
        <img src="../assets/map.jpg" alt="">
        <!-- <map-import></map-import> -->
        <h1 class="headline">menu here</h1>
      </div>
    </section>  
  </header>
  <div class="slider" ref="slider"></div>
  </div>
</template>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
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
  grid-template-columns: 10% 2fr 1fr 10%;
  min-height: 15vh;
  color: white;
  align-items: center;
  position: absolute;
  z-index: 3;
  top: 10%;
}

#title {
  font-family: 'Pacifico';
  font-weight: bold;
  grid-column: 2/3;
  font-size: 52px;
}

.subtext {
  font-family: 'Pacifico';
  font-weight: normal;
  font-size: 19px;
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

.headline {
  font-family: 'Pacifico';
  font-weight: normal;
  position: absolute;
  top: 60%;
  left: 10%;
  font-size: 80px;
  transform: translate(-20%, -70%);
  color: white;
  z-index: 3;
}

section {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
} 

</style>

<script>
import gsap from 'gsap/all';
import { TweenMax, TimelineMax, Power2 } from 'gsap/all';
gsap.registerPlugin( TweenMax, TimelineMax, Power2 );

export default {
  name: 'PageHome',
  mounted() { 
    const { imgbox, slider, title, subtext } = this.$refs;
    const timeline = new TimelineMax(); 
    
    timeline.fromTo(imgbox, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(imgbox, 1.2, { width: "100%"}, { width: "80%", ease: Power2.easeInOut})
    .fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
    .fromTo(title, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(subtext, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1"); 
  }  
};
</script>