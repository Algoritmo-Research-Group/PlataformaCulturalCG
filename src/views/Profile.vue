<template>
  <q-page padding>
    <div class="column" style="align-content: center;">
      <div class="perfil-field">
        </div>
      </div>
      <div class="row">
        <div class="q-pa-md row items-start q-gutter-md no-wrap" style="width: 100%;">
          <q-card class="perfil-card" style="width: 380px;">
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
            </q-card-actions>
          </q-card>
          <q-card class="pin-card" style="min-width: 25%">
            <q-card-section class="bg-yellow text-black">
              <div class="text-h6">Adicionar Pin</div>
              <div class="text-subtitle2">Faça parte da Cartografia</div>
            </q-card-section>

            <q-card-section class="" v-if="opemBoxPin" style="height: 270px; width: 100%;">
              <span class="subtitle" style="font-size: 12px; position: relative; top: 10px;"> Este pin te localiza no mapa com os dados inseridos abaixo</span>
              <div class="info-field" v-if="" style="display: flex; flex-direction: row; width: 100%; margin-top: 20px;">
                <div class="collumn" style="width: 200px;">
                  <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Nome do Pin</span>
                  <q-input class="input" v-model="text" label="ex: Brava" color="white"/>
                </div>
                <div class="collumn" style="width: 300px; margin-left: 20px;">
                  <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Email </span>
                  <q-input class="input" v-model="text" label="ex: fulano@email.com" color="white"/>
                </div>
              </div>
              <div class="info-field" v-if="" style="display: flex; flex-direction: row; width: 100%; margin-top: 20px;">
                <div class="column" style="width: 250px">
                  <span class="text-info" style="font-size: 12px; position: relative; top: 10px;">Rua </span>
                  <q-input class="input" v-model="text" label="ex: Rua do dinar" color="white"/>
                </div>
              </div>
            </q-card-section>

            <q-separator />
            <q-card-actions align="right" style="background: #ff9969">
              <q-btn flat @click="opemBoxPin=true" v-if="opemBoxPin===false">Criar Pin</q-btn>
              <q-btn flat v-if="opemBoxPin" @click="">Finalizar</q-btn>
              <q-btn flat v-if="opemBoxPin" @click="opemBoxPin=false">Cancelar</q-btn>
            </q-card-actions>
          </q-card>

        </div>

        <!--<q-card style="height:400px; width: 400px; background-color: #808080; display: flex; flex-direction: column; align-items: center;
        margin-top: 90px; margin-left: 30px;">
            <q-img
              src="logo.png"
              style="width: 150px; height: 150px; position: relative; top: -40px;">
            </q-img>
            <div class="" style="width: 150px; height: 150px; position: relative; top: -40px; background: yellow;">

            </div>
            <span class="user-name" style="font-size: 30px; position: relative; top:-30px;"> {{ userName }}</span>
            <span class="user-category" style=" font-size: 20px; position: relative; top:-25px;"> {{ userCategory }}</span>
            <div class="" style="display: flex; flex-direction: row; justify-content: space-between">
              <div class="column">
                <span class="user-email"> {{ userEmail }} </span>
                <span class="user-password" style="margin-top: 10px;"> {{ userPassword }} </span>
              </div>
              <div class="column" style="">
                <q-btn outline style="margin-left: 20px;">
                  <q-icon name="edit" size="20px"></q-icon>
                </q-btn>
                <q-btn outline style="margin-left: 20px; margin-top: 10px;">
                  <q-icon name="edit" size="20px"></q-icon>
                </q-btn>
              </div>
            </div>
        </q-card>-->
        <!--<q-card style="width: 400px; background-color: #808080; display: flex; flex-direction: column; align-items: center;
        margin-top: 0px; margin-left: 30px;">
          <span class="title" style="font-size: 30px; position: relative; top: 10px;">ADICIONAR PIN</span>
          <span class="subtitle" style="font-size: 12px; position: relative; top: 10px;"> Este pin te localiza no mapa com os dados inseridos abaixo</span>
          <div class="hidden-field" v-if="" style="display: flex; flex-direction: column; width: 80%; margin-top: 20px;">
            <span class="text-info" style="font-size: 12px; position: relative; top: 10px;">Nome do Pin</span>
            <q-input class="input" v-model="text" label="ex: Brava" color="white"/>
            <span class="text-info" style="font-size: 12px; position: relative; top: 10px;">Email </span>
            <q-input class="input" v-model="text" label="ex: fulano@email.com" color="white"/>
            <span class="text-info" style="font-size: 12px; position: relative; top: 10px;">Rua </span>
            <q-input class="input" v-model="text" label="ex: Rua do dinar" color="white"/>
          </div>
        </q-card>-->
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
      addPin: false
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
