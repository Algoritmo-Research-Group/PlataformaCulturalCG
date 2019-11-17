<template>
  <q-page padding>
    <div class="column" style="align-content: center;">
      <div class="perfil-field">
        </div>
      </div>
      <div class="row">
        <q-card style="height:400px; width: 400px; background-color: #808080; display: flex; flex-direction: column; align-items: center;
        margin-top: 90px;">
            <!--<q-img
              src="logo.png"
              style="width: 150px; height: 150px; position: relative; top: -40px;">
            </q-img>-->
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
        </q-card>
        <q-card style="width: 400px; background-color: #808080; display: flex; flex-direction: column; align-items: center;
        margin-top: 90px; margin-left: 30px;">
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
      openHiddenPin: false,
    };
  },
};
</script>
<style lang="stylus" scoped>
.row {
  display: flex;
  flex-direction: row;
}
.collumn {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}
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
