<template> 
  <div class="body">
    <header>
    <nav>
      <h3 id="title"> CARTOGRAFIA </h3>
      <span class="subtext"> CULTURA EM MOVIMENTO</span>
    </nav>
    <section>
      <div class="img-box" ref="imgbox">
        <img src="../assets/map.jpg" alt="">
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
  grid-template-columns: 10% 1fr 1fr 10%;
  min-height: 10vh;
  color: white;
  align-items: center;
}

#title {
  font-family: 'Pacifico';
  font-weight: bold;
  grid-column: 2/3;
  font-size: 32px;
}

subtext {
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
  height: 80vh;
  justify-content: center;
  align-items: center;
} 

</style>

<script>
import gsap from 'gsap/all';
import { TweenMax, TimelineMax, Power2 } from 'gsap/all';
gsap.registerPlugin( TweenMax, TimelineMax, Power2 );

export default {
  name: 'PageHome',
  mounted() { 
    const { imgbox, slider } = this.$refs;
    const timeline = new TimelineMax(); 
    
    timeline.fromTo(imgbox, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(imgbox, 1.2, { width: "100%"}, { width: "80%", ease: Power2.easeInOut})
    .fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2"); 
  }  
};
</script>