<template id="">
  <q-page padding style="width: 100%; background: linear-gradient(to left, #ba7453, #d1a984);">
    <div class="column" style="align-content: center;">
      <div class="q-pa-md row items-start q-gutter-md no-wrap" style="width: 100%;">
        <q-card class="perfil-card" style="width: 200px;">
          <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" style="height: 70px; width: 70px">
          </q-img>
          <span style="font-size: 20px;">{{adm}}</span>
          <q-card-actions class="bg-white" vertical align="right">
            <q-btn flat  >Sair</q-btn>
          </q-card-actions>
        </q-card>
        <q-card class="pin-card" style="min-width: 25%;">
          <q-card-section class="bg-yellow text-black">
            <div class="text-h6">Requisições Recentes</div>
            <div class="text-subtitle2"></div>
          </q-card-section>

          <q-card-section class="context" style="height: 270px; width: 100%;">
            <span class="subtitle" style="font-size: 12px; position: relative; top: 10px;"> //todo here</span>


          </q-card-section>

          <q-separator />
          <q-card-actions align="right" style="background: white">
            <q-btn flat >Ver Todas Requisições</q-btn>
          </q-card-actions>
        </q-card>
        <q-card class="schedule-card" style="min-width: 30%">
          <q-card-section class="bg-green text-black">
            <div class="text-h6">Debates Recentes</div>
            <div class="text-subtitle2"></div>
          </q-card-section>

          <q-card-section class=""  style="height: 270px; width: 100%;">
            <span class="subtitle" style="font-size: 12px; position: relative; top: 10px;"> </span>
          </q-card-section>

          <q-separator />
          <q-card-actions align="right" style="background: white">
            <q-btn flat >Ver Debates</q-btn>
            <q-btn flat></q-btn>
          </q-card-actions>
        </q-card>


      </div>
    </div>
  </q-page>
</template>   
              
<script>
export default {
  name: 'Profile',
  data() {
    return {
      adm: 'Administrador',
      userCategory: '',
      userEmail: 'JulianaTrujillo@email.com',
      userPassword: '**********',
      opemBoxPin: false,
      addPin: false,
      openEventBox: false
    };
  },
};
</script>
<style lang="scss" scoped>

.nav {
  width: 100px;
  height: 100%;
  background-color: yellow;
} 

.text-info {
  margin: 5px;
}

.input {
  margin: 5px;
}
</style>
