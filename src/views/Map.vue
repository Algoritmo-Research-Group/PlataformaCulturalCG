<template>
  <q-page padding>
    <q-parallax
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <h1 class="text-white" style="margin-left:">Mapa Cultural</h1>
    </q-parallax>
    <div class="mapa" style="display: flex; flex-direction: center; aling-content: center; margin-top: 30px;">
      <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="10">
        <GmapMarker
          v-for="(item, index) in markers"
          :key="index"
          :position="item.position"
          @click="center = item.position"
        />
      </GmapMap>
    </div>
    <div class="naosei" style="height: 200px; width: 100%;">
      <h1> olha o mapa cara. funciona </h1>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'PageMap',
  data() {
    return {
      center: { lat: -20.4435, lng: -54.647820 },
      mapTypeId: 'terrain',
      markers: [
        { position: { lat: -0.48585, lng: 117.1466 } },
        { position: { lat: -6.9127778, lng: 107.6205556 } },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 550px;
  max-width: 1000px;
  width: 100%;
}
</style>
