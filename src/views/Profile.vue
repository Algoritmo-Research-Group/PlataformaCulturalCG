<template>
  <q-page padding style="width: 100%">
    <div class="column" style="align-content: center;">
      <div class="row">
        <div class="q-pa-md row items-start q-gutter-md wrap" style="width: 100%;">
          <q-card class="perfil-card" style="min-widht: 350px;">
            <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" style="height: 300px;">
              <div class="absolute-bottom" align="center">
                <div class="text-h6">{{userName}}</div>
                <div class="text-subtitle2">{{userCategory}}</div>
              </div>
            </q-img>

            <q-card-actions class="bg-white" vertical align="right">
              <div class="row">
                <span class="user-email" style="margin-top: 15px;"> {{ userEmail }} </span>
                <q-btn flat style="margin-left: 40px; margin-right: 10px; margin-top: 10px; width: 70px;">
                  <q-icon name="edit" size="20px"></q-icon>
                </q-btn>
              </div>
              <div class="row" style="">
                <span class="user-password" style="margin-top: 15px;"> {{ userPassword }} </span>
                <q-btn flat style="margin-left: 40px; margin-top: 10px; margin-right: 10px; width: 70px;">
                  <q-icon name="edit" size="20px"></q-icon>
                </q-btn>
              </div>
            </div>
        </q-card>
        <q-card style="width: 400px; background-color: #808080; display: flex; flex-direction: column; align-items: center;
        margin-top: 90px; margin-left: 30px;">
          <span class="title" style="font-size: 30px; position: relative; top: 10px;">ADICIONAR PIN</span>
          <span class="subtitle" style="font-size: 12px; position: relative; top: 10px;"> Este pin te localiza no mapa com os dados inseridos abaixo</span>
          <div class="hidden-field" style="display: flex; flex-direction: column; width: 80%; margin-top: 20px;">
            <span class="text-info" style="font-size: 12px; position: relative; top: 10px;">Nome do Pin</span>
            <q-input class="input" v-model="text" label="ex: Brava" color="white"/>
            <span class="text-info" style="font-size: 12px; position: relative; top: 10px;">Email </span>
            <q-input class="input" v-model="text" label="ex: fulano@email.com" color="white"/>
            <span class="text-info" style="font-size: 12px; position: relative; top: 10px;">Rua </span>
            <q-input class="input" v-model="text" label="ex: Rua do dinar" color="white"/>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      userName: 'Juliana Trujillo',
      userCategory: 'Cinema e AudioVisual',
      userEmail: 'JulianaTrujillo@email.com',
      userPassword: '**********',
      opemBoxPin: false,
      addPin: false,
      opemEventBox: false,
      addEvent: false
    };
  },
};
</script>
<style lang="sass" scoped>
.row
  display: flex
  flex-direction: row

.collumn
  display: flex
  flex-direction: column
  border-radius: 5px

.nav
  width: 100px
  height: 100%
  background-color: yellow

.text-info
  margin: 5px

.input
  margin: 5px

</style>
