<template>
  <q-page padding style="width: 100%; background: linear-gradient(to left, #ba7453, #d1a984);">
    <q-btn flat to="/" color="white" text-color="white" style="margin-top: 10px; margin-left: 15px; margin-bottom: 20px">
        <q-icon name="keyboard_arrow_left" style=""></q-icon>
        <span>Voltar ao Mapa</span>
    </q-btn>
    <q-card class="content">
      <div class="col1_item1">
        <!-- card identificando a cidade -->
      </div>
      <div class="col1_item2">
        <!-- figuras e historia -->
      </div>
      <div class="col2_item1">
        <!-- todo here -->
        <h1>DEBATES</h1>
      </div>
      <div class="col2_item2">
        <!-- todo here -->
      </div>
      <div class="col3_item1">
        <!-- todo here -->
      </div>
      <div class="col3_item2">
        <q-btn flat to="/profile" style="height: 100px; width: 120px; margin: 10px">
          <q-img center class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 100%; border-radius: 15px;">
            <div class="absolute-full text-subtitle2 flex flex-center">
              <span style="font-size: 20px">PERFIL</span>
            </div>
          </q-img>
        </q-btn>
        <q-btn flat to="/schedule" style="height: 100px; width: 120px; margin: 10px">
          <q-img center class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 100%; border-radius: 15px;">
            <div class="absolute-full text-subtitle2 flex flex-center">
              <span style="font-size: 20px">AGENDA</span>
            </div>
          </q-img>
        </q-btn>
      </div>
    </q-card>
  </q-page>
</template>

<script>
  export default {
    name: 'DebatePage',
    data() {
      return{

      }
    },
  }
</script>

<style lang="scss">
.row {
  display: flex;
  flex-direction: row;
  align-content: flex-start;
}

.collumn {
  display: flex;
  flex-direction: column;
}

// content -----------------
// .content {
//   height: 85vh;
//   border-radius: 20px;
//   display: grid;
//   grid-template-columns: 25% 2fr 1fr;
//   grid-template-rows: 50% 30% 1fr;
//   grid-gap: 10px;
// }

.col1_item1 {
  min-width: 400px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

.col1_item2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;
}

.col2_item1 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.col2_item2 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}

.col3_item1 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  padding: 15px;
  position: absolute;
  top: 5%;
  height: 100%;
}

.col3_item2 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>

