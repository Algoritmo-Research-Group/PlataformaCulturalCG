<template>
  <div class="content">
    <q-btn to="/" style="position: absolute; top: 10px; left: 0px; z-index: 1; width: 9rem; height: 3.5rem; border-radius: 0px;
      background-color: black; box-shadow: none;">
      <div class="row" style="justify-content: center; align-items: center;">
        <q-icon name="keyboard_arrow_left" class="text-white"></q-icon>
        <span style="font-size: 15px; font-weight: 800; color: white">Mapa</span>
      </div> 
    </q-btn>
    <div>

    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'SchedulePage',
    data() {
      return {
        splitterModel: 50,
        date: '2019/02/01',
        events: [ '2019/02/01', '2019/02/05', '2019/02/06' ]

      }
    },
  }
</script>

<style lang="sass">
.content
  height: 100vh
  width: 100%

</style>
