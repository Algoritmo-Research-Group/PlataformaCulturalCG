<template>
  <div class="content">
    <q-btn class="outline pulse" filled to="/" text-color="white" style="background-color: transparent; width: 60px; min-height: 150px;
     position: absolute; top: 64px; left: 62px; border: 2px solid white; border-radius: 20px; padding: 10px; z-index: 1;">
      <div class="column space-around" style="height: 100%;">
        <q-icon name="keyboard_arrow_left"></q-icon>
        <span style="writing-mode: vertical-rl; text-orientation: upright; font-size: 18px; font-weight: 800">Mapa</span>
      </div>
    </q-btn>
    <div class="column col-l">
      <div class="info">
        <div class="perfil">
          <div class="perfil-info">
            <q-avatar size="110px">
              <img src="../assets/avatar01.jpg">
            </q-avatar>
            <div class="perfil-name">{{userName}}</div>
            <div class="perfil-category">{{userCategory}}</div>
            <q-btn class="button-edit-perfil-data">
              <span style="color: black">editar email ou senha</span>
              <!-- <q-icon name="keyboard_arrow_right" class="text-black" size="25px"></q-icon> -->
            </q-btn>
          </div>
          <div class="perfil-edit">
            <div class="perfil-data">
              <span class="user-email"> {{ userEmail }} </span>
              <span class="user-password" style=""> {{ userPassword }} </span>
            </div>
          </div>
        </div>
        <button class="pulse">
          <q-icon name="logout" size="30px" style="color: #ef6eae"></q-icon>
          <!-- <q-tooltip content-class="" :content-style="{color: '#FFFFFF'}" anchor="bottom middle" transition-show="scale"
            transition-hide="scale" :offset="[10, 10]">
            <strong>SAIR</strong>
          </q-tooltip> -->
        </button>
      </div>
      <div class="nav row">
        <q-btn class="buttons-nav pulse" icon="keyboard_arrow_left"  text-color="white" size="20px"  to="/schedule">
          <span style="color: white">AGENDA</span>
        </q-btn>
        <q-btn class="buttons-nav pulse" icon-right="keyboard_arrow_right" text-color="white" size="20px"  to="/debates">
          <span style="color:white">DEBATES</span>
        </q-btn>
      </div>
    </div>
    <div class="column col-r">
      <div class="actions">
        <div class="options">
          <q-btn-toggle
            v-model="toggleState"
            class="buttons-action"
            no-caps
            round
            spread
            unelevated
            toggle-color=""
            color="none"
            text-color="white"
            size="18px"
            :options="[
              {label: 'Meu Pin', value: 'one'},
              {label: 'Meus Eventos', value: 'two'}
            ]"
          />
          <!-- <q-btn ref="btn1" class="buttons-action" :class="[isActive? 'bgon' : 'bgoff']" flat @click="toggleState=!toggleState, isActive=!isActive" align="left" size="15px">
            <q-icon left name="person_pin" color="white" style="margin-left: 8px;"/>
            <span style="color: white; margin-left: 16px; font-family: 'Calistoga'">MEU PIN</span>
          </q-btn>
          <q-btn  class="buttons-action" flat @click="opemBoxEvent=true, opemBoxPin=false" align="left" size="15px">
            <q-icon left name="calendar_today" color="white" style="margin-left: 8px;"/>
            <span style="color: white; margin-left: 16px; font-family: 'Calistoga'">EVENTOS</span>
          </q-btn> -->
        </div>
      </div>
      <div class="context">
        <div class="fieldPin" v-if="toggleState==='one'">
          <q-card class="pin-card">
            <q-card-section class="bg-white text-black">
              <div class="text-h6">Faça parte da Cartografia</div>
            </q-card-section>

            <q-card-section class="">
              <span class="subtitle" style="font-size: 12px;"> Este pin te localiza no mapa com os dados inseridos abaixo</span>
              <div class="name-field"  style="display: flex; flex-direction: row; width: 100%; margin-top: 8px;">
                <div class="collumn" style="width: 200px;">
                  <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Nome do Pin</span>
                  <q-input class="input" v-model="myPinName" label="" color="white"/>
                </div>
                <div class="collumn" style="min-width: 250px;">
                  <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Email </span>
                  <q-input class="input" v-model="myPinEmail" label="" color="white"/>
                </div>
                <div class="collumn" style="width: 190px;">
                  <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Telefone </span>
                  <q-input class="input" v-model="myPinPhone" color="white"/>
                </div>
              </div>
              <div class="address-field"  style="display: flex; flex-direction: row; width: 100%; margin-top: 8px;">
                <div class="column" style="width: 300px">
                  <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Rua </span>
                  <q-input class="input" v-model="myPinStreet" label="" color="white"/>
                </div>
                <div class="column" style="width: 140px">
                  <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Número </span>
                  <q-input class="input" v-model="myPinStreetNumber" label="" color="white"/>
                </div>
                <div class="column" style="width: 180px">
                  <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Cep </span>
                  <q-input class="input" v-model="myPinCep" label="" color="white"/>
                </div>
              </div>
              <div class="description-field" style="display: flex; flex-direction: column; width: 100%; margin-top: 8px;">
                <div class="column" style="">
                  <div class="row">
                    <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Descrição* </span>
                    <span class="input-info text-black" style="font-size: 10px; position: relative; top: 10px;">(descrição da atividade, até 300 caracteres) </span>
                  </div>
                  <q-input outlined type="textarea" class="input" v-model="myPinDescription" color="white" style=" width: 95%;"/>
                </div>
                <div class="row">
                  <div class="column" style="width: 80%">
                    <div class="column link-pagina">
                      <div class="row">
                        <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Página </span>
                        <span class="input-info text-black" style="font-size: 10px; position: relative; top: 10px;">(opcional) </span>
                      </div>
                      <q-input class="input" v-model="linkPagina" color="white" style=" width: 60%;"/>
                    </div>
                    <div class="column link-insta" style="">
                      <div class="row">
                        <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Instagram </span>
                        <span class="input-info text-black" style="font-size: 10px; position: relative; top: 10px;">(opcional) </span>
                      </div>
                      <q-input class="input" v-model="linkInstagram" color="white" style=" width: 60%;"/>
                    </div>
                    <div class="column link-facebook" style="">
                      <div class="row">
                        <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Facebook </span>
                        <span class="input-info text-black" style="font-size: 10px; position: relative; top: 10px;">(opcional) </span>
                      </div>
                      <q-input class="input" v-model="linkFacebook" color="white" style=" width: 60%;"/>
                    </div>
                  </div>
                  <div class="q-pa-md q-gutter-sm">

                  </div>
                </div>
              </div>
            </q-card-section>

            <q-separator style="margin-top: 50px;"/>
            <q-card-actions  class="absolute-bottom" align="right" style="background: white; margin: 10px">
              <q-btn flat @click="opemBoxPin=true" v-if="opemBoxPin===false">Criar Pin</q-btn>
              <q-btn filled color="black" v-if="opemBoxPin" >Finalizar</q-btn>
              <q-btn flat v-if="opemBoxPin" @click="opemBoxPin=false">Cancelar</q-btn>
            </q-card-actions>
          </q-card>
        </div>
        <div class="fieldEvent" v-if="toggleState==='two'">
          <q-card>
            <q-card-section class="bg-white text-black">
              <div class="text-h6">Crie seu novo evento</div>
            </q-card-section>
            <q-card-section class="body-card">
              <div class="row">
                <div class="collumn">
                  <span class="input-info text-black" style="font-size: 14px; position: relative; top: 10px;">Nome do Evento</span>
                  <q-input class="input" v-model="nomeEvento" label="" color="white"/>
                </div>
                <div class="collumn">
                  <span class="input-info text-black" style="font-size: 14px; position: relative; top: 10px;">Local do Evento</span>
                  <q-input class="input" v-model="localEvento" label="" color="white"/>
                </div>
              </div>
              <div class="row">
                <div class="collumn">
                  <span class="input-info text-black" style="font-size: 14px; position: relative; top: 10px;">Data</span>
                  <q-input class="input" v-model="dataEvento" label="" color="white"/>
                </div>
                <div class="collumn" style="width: 150px;">
                  <span class="input-info text-black" style="font-size: 14px; position: relative; top: 10px;">Horário</span>
                  <q-input class="input" v-model="localEvento" label="" color="white"/>
                </div>
              </div>
              <div class="row">
                <div class="collumn">
                  <span class="input-info text-black" style="font-size: 14px; position: relative; top: 10px;">Link do Evento</span>
                  <q-input class="input" v-model="localEvento" label="" color="white"/>
                </div>
                <div class="collumn">
                  <span class="input-info text-black" style="font-size: 14px; position: relative; top: 10px;">Valor Entrada</span>
                  <q-input class="input" v-model="dataEvento" label="" color="white"/>
                </div>
              </div>
            </q-card-section>

            <q-separator />
            <q-card-actions align="right" style="background: white; ">
              <q-btn filled color="black" v-if="">Adicionar Evento</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      userName: 'Juliana Trujillo',
      userCategory: 'Cinema e AudioVisual',
      userEmail: 'JulianaTrujillo@email.com',
      userPassword: 'senha legal',
      toggleState: 'one',
      opemBoxPin: false,
      addPin: false,
      opemBoxEvent: false,
      addEvent: false,
      nomeEvento: '',
      localEvento: '',
      dataEvento: '',
      filter: '',
      myPinName: '',
      myPinEmail: '',
      myPinPhone: '',
      myPinStreet: '',
      myPinStreetNumber: '',
      myPinCep: '',
      myPinDescription: '',
      linkFacebook: '',
      linkInstagram: '',
      linkPagina: '',
    };
  },
  methods: {
    changeColor() {
      if(this.className = 'is-blue'){
          this.className = 'is-red';
      }
      else
        this.className = 'is-blue';
    }
  }
};
</script>
<style lang="scss" scoped>

.content {
  height: 100vh;
  border-radius: 0px;
  //background-image: url("../assets/unsplash01.jpg");
  background-color: black;
  display: flex;
  flex-direction: row;
}

.col-l {
  // border: 2px solid green;
  // min-width: 400px;
  flex-basis: 30%;
  position: relative;
  padding: 32px;
}

.col-r {
  // border: 2px solid yellow;
  // min-width: 800px;
  flex-basis: 70%;
  padding: 32px;
}

// col-l ------- info do usuario -------- col-l
.info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 60px;
  left: 128px;
  // border: 2px solid pink;
}

// Perfil components -------------------
.perfil {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 300px;
  min-height: 250px;
}

.perfil-info {
  padding: 16px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  // border-top-right-radius: 0px;
  width: 250px;
  z-index: 1;
  // border: 1px solid red;
}

.perfil-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 2px solid white;
  border-radius: 5px;
  margin-top: 24px;
  background-color: white;
  width: 250px;
  height: 80px;
}

.button-edit-perfil-data
{
  height: 25px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  border-color: white;
  margin-top: 32px;
}

$colors: (
  pulse: #ef6eae,
);

@each $button, $color in $colors {
  .#{$button} {
    --color: #{$color};
    --hover: #{adjust-hue($color, 45deg)};
  }
}

button {
  // background-color: #EDEDED;
  height: 80px;
  width: 60px;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  z-index: 0;
  margin-left: 0px;
  background: none;
  border: 2px solid white;
  font: inherit;
  line-height: 1;
  margin-left: -30px;
  margin-top: 32px;
}

.pulse:hover,
.pulse:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 2em rgba(#fff,0);
  cursor: pointer;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--hover); }
}

// .button-logout:hover {
//   transform: scale(1.03);
//   transition: all 0.3s ease-in-out;
//
// }

.perfil-name {
  font-family: 'Calistoga';
  font-size: 25px;
  color: black;
}

.perfil-category {
  font-family: 'Monotom';
  font-weight: normal;
  font-size: 18px;
  color: black;
}

.user-email {
  text-align: center;
  font-size: 18px;
  //font-family: 'Monotom';
  font-weight: bold;
  color: black;
}

.user-password {
  text-align: center;
  font-size: 16px;
  // font-family: 'Monotom';
  font-weight: bold;
  color: black;
}

.nav {
  position: absolute;
  bottom: 32px;
  left: 128px;
  justify-content: space-around;
}

.buttons-nav {
  align-self: flex-end;
  margin-right: 16px;
  border-radius: 10px;
}

.buttons-nav:hover {
  background-color: black;
}
// end col-l ------------------ end col-l ---


// col-r ------------------- col-r ----
.context {
  position: absolute;
  top: 150px;
  max-height: 600px;
  max-width: 60%;
  border: 2px solid white;
  border-radius: 5px;
  overflow: hidden;
}

.actions {
  position: absolute;
  top: 60px;
}

.options {
  min-height: 70px;
  min-width: 400px;
  // border: 2px solid purple;
}

.buttons-action {
  height: 60px;
  width: 350px;
  border: 2px solid white;
  border-radius: 10px;
  background-color: none;
}

.buttons-action:hover {
  transform: scale(1.02);
  transition: all .2s ease-in-out;
}

.fieldPin {
}

.pin-card {
  width: 100%;
}

// texts input and into input -------------
.input-info {
  margin: 5px;
  font-size: 15px;
  font-weight: bold;
}
.input {
  margin: 5px;
  margin-top: -10px;
  font-size: 15px;
}
</style>
