<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { components } from 'aws-amplify-vue'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Monoton|Righteous&display=swap');

.flex {
  display: flex;
}

.column {
  display: flex;
  flex-direction: column;
}
 
.row {
  display: flex;
  flex-direction: row;
}
 
.justify-center {
  display: flex;
  justify-content: center;
}

.align-center {
  display: flex;
  align-items: center;
}

.flex-start {
  justify-content: flex-start;
}

.flex-end {
  justify-content: flex-end;
}

.space-around {
  justify-content: space-around;
}

.row-space-around {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
// position ----------------------------- position
.top-8 {
  top: 8px;
}

.top-32 {
  top: 32px;
}

.top10 {
  position: absolute;
  top: 10%;
}

.top15 {
  position: absolute;
  top: 15%;
}

.top20 {
  position: absolute;
  top: 20%;
}

// margin ------------------------------ margin
.margin-8 {
  margin: 8px;
}

.margin-top8 {
  margin-top: 8px;
}

.margin-top16 {
  margin-top: 16px;
}

.margin-top32 {
  margin-top: 32px;
}

.margin-bottom8 {
  margin-bottom: 8px;
}

.margin-bottom16 {
  margin-bottom: 16px;
}

// padding ----------------------------- padding
.padding-8 {
  padding: 8px;
}

.padding-bottom-8 {
  padding-bottom: 8px;
}

.padding-top-8 {
  padding-top: 8px;
}
 
.padding-left-8{
  padding-left: 8px;
}

.padding-right-8 {
  padding-right: 8px;
}

.padding-16 {
  padding: 16px;
}

.padding-bottom-16 {
  padding-bottom: 16px;
}

.padding-top-16 {
  padding-top: 16px;
}
 
.padding-left-16 {
  padding-left: 16px;
}

.padding-right-16 {
  padding-right: 16px;
}

// styles components

.outline {
  border: 2px solid white;
}

.hover-scale05:hover {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
  background-color: none !important;
}

.hover-scale:hover {
  transform: scale(1.2);
  transition: all 0.3s ease-in-out;
  background-color: none !important;
}

.text-black {
  color: black;
}

.text-white {
  color: white;
}
</style>
