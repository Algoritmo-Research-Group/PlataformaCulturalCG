<template>
  <q-page style="width: 100%; height: 100vh;">
    <!-- <q-btn flat to="/" color="white" text-color="white" style="margin-top: 10px; margin-left: 15px; margin-bottom: 20px">
        <q-icon name="keyboard_arrow_left" style=""></q-icon>
        <span>Voltar ao Mapa</span>
    </q-btn> -->
    <div class="content">
      <div class="info">
        <div class="perfil">
          <q-avatar size="110px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="perfil-info">
            <div class="perfil-name">{{userName}}</div>
            <div class="perfil-category">{{userCategory}}</div>
          </div>
          <q-btn class="button-logout">
            <q-icon name="logout" class="text-black" size="30px"></q-icon>
            <q-tooltip content-class="" :content-style="{color: '#FFFFFF'}" anchor="bottom middle" transition-show="scale"
              transition-hide="scale" :offset="[10, 10]">
              <strong>SAIR</strong>
            </q-tooltip>
          </q-btn>
        </div>
        <div class="perfil-data">
          <div class="column">
            <span class="user-email"> {{ userEmail }} </span>
            <span class="user-password" style=""> {{ userPassword }} </span>
          </div>
          <q-btn class="button-edit-perfil-data">
            <q-icon name="keyboard_arrow_right" class="text-white" size="25px"></q-icon>
          </q-btn>
        </div>
      </div>
      <div class="actions">
        <div class="options">
          <q-btn class="buttons-action" flat @click="opemBoxPin=true, opemBoxEvent=false" align="left" size="20px">
            <q-icon left name="person_pin" color="white" style="margin-left: 16px;"/>
            <span style="color: white; margin-left: 16px; font-family: 'Calistoga'">MEU PIN</span>
          </q-btn>
          <q-btn  class="buttons-action" flat @click="opemBoxEvent=true, opemBoxPin=false" align="left" size="20px">
            <q-icon left name="calendar_today" color="white" style="margin-left: 16px;"/>
            <span style="color: white; margin-left: 16px; font-family: 'Calistoga'">EVENTOS</span>
          </q-btn>
        </div>
        <div class="nav row">
          <q-btn outline to="/schedule" color="white" text-color="white" style="width: 60px; min-height: 150px;
           position: absolute; top: 10%; left: 62px; border-radius: 20px; padding: 10px">
            <div class="column space-around" style="height: 100%;">
              <q-icon name="keyboard_arrow_left"></q-icon>
              <span style="writing-mode: vertical-rl; text-orientation: upright; font-size: 18px; font-weight: 800">Mapa</span>
            </div>
          </q-btn>
          <q-btn class="buttons-nav" icon="keyboard_arrow_left"  text-color="white" size="20px"  to="/schedule">
            <span style="color: white">AGENDA</span>
          </q-btn>
          <q-btn class="buttons-nav" icon-right="keyboard_arrow_right" text-color="white" size="20px"  to="/debates">
            <span style="color:white">DEBATES</span>
          </q-btn>
        </div>
      </div>
      <div class="context">
        <q-card class="card">
          <div class="fieldPin" v-if="opemBoxPin" style="max-width: 80%; max-height: 100%;">
            <q-card class="pin-card">
              <q-card-section class="bg-white text-black">
                <div class="text-h6">Faça parte da Cartografia</div>
              </q-card-section>

              <q-card-section class="context" style="height: 100%; width: 100%;">
                <span class="subtitle" style="font-size: 12px; position: relative; top: 10px;"> Este pin te localiza no mapa com os dados inseridos abaixo</span>
                <div class="name-field"  style="display: flex; flex-direction: row; width: 100%; margin-top: 20px;">
                  <div class="collumn" style="width: 200px;">
                    <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Nome do Pin</span>
                    <q-input class="input" v-model="nomePin" label="" color="white"/>
                  </div>
                  <div class="collumn" style="min-width: 250px;">
                    <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Email </span>
                    <q-input class="input" v-model="emailPin" label="" color="white"/>
                  </div>
                  <div class="collumn" style="width: 190px;">
                    <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Telefone </span>
                    <q-input class="input" v-model="telefonePin" color="white"/>
                  </div>
                </div>
                <div class="address-field"  style="display: flex; flex-direction: row; width: 100%; margin-top: 20px;">
                  <div class="column" style="width: 300px">
                    <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Rua </span>
                    <q-input class="input" v-model="ruaPin" label="" color="white"/>
                  </div>
                  <div class="column" style="width: 140px">
                    <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Número </span>
                    <q-input class="input" v-model="numeroRuaPin" label="" color="white"/>
                  </div>
                  <div class="column" style="width: 180px">
                    <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Cep </span>
                    <q-input class="input" v-model="cepPin" label="" color="white"/>
                  </div>
                </div>
                <div class="description-field" style="display: flex; flex-direction: column; width: 100%; margin-top: 20px;">
                  <div class="column" style="">
                    <div class="row">
                      <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Descrição* </span>
                      <span class="input-info text-black" style="font-size: 10px; position: relative; top: 10px;">(descrição da atividade, até 300 caracteres) </span>
                    </div>
                    <q-input outlined type="textarea" class="input" v-model="descricaoPin" color="white" style=" width: 95%;"/>
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
          <div class="fieldEvent" v-if="opemBoxEvent">
            <q-card>
              <q-card-section class="bg-white text-black">
                <div class="text-h6">Crie seu novo evento</div>
              </q-card-section>
              <q-card-section class="body-card">
                <div class="row">
                  <div class="collumn" style="width: 50%;">
                    <span class="input-info text-black" style="font-size: 14px; position: relative; top: 10px;">Nome do Evento</span>
                    <q-input class="input" v-model="nomeEvento" label="" color="white"/>
                  </div>
                  <div class="collumn" style="width: 50%">
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
            <div class="table">
              <q-table
                card-class="bg-white"
                title="Meus Eventos"
                :data="data"
                :columns="columns"
                row-key="name"
                :filter="filter"
                hide-header
                style=""
              >
                <template v-slot:top-right>
                  <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </template>
              </q-table>
            </div>
          </div>
        </q-card>
      </div>
      <!-- <div class="btnEvent">
        <q-btn class="q-px-xl q-py-xs" @click="opemBoxPinEvent=true" color="teal" label="EVENTO" size="20px" style="border-radius: 25px; margin-right: 8px; margin-top: 8px">
        </q-btn>
      </div> -->
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
      userPassword: 'senha legal',
      opemBoxPin: false,
      addPin: false,
      opemBoxEvent: false,
      addEvent: false,
      nomeEvento: '',
      localEvento: '',
      dataEvento: '',
      filter: '',
      columns: [
        {
          name: 'desc',
          required: true,
          label: '',
          align: 'center',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'eventName', align: 'left', label: '', field: 'eventName', sortable: true },
        { name: 'eventDate', label: '', field: 'enventDate', sortable: true }
      ],
      data: [
        {
          name: 'Foto Evento',
          eventName: 'Evento 1',
          eventDate: '12/01/2020'
        },
        {
          name: 'Foto evento 2',
          eventName: 'Evento 2',
          eventDate: '12/01/2020'
        },
        {
          name: 'Foto evento 3',
          eventName: 'Evento 3',
          eventDate: '12/01/2020'
        },
        {
          name: 'Foto evento 4',
          eventName: 'Evento 4',
          eventDate: '12/01/2020'
        },
        {
          name: 'Foto evento 5',
          eventName: 'Evento 5',
          eventDate: '12/01/2020'
        }
      ],
    };
  },
};
</script>
<style lang="scss" scoped>

.content {
  box-sizing: border-box;
  height: 100vh;
  padding: 16px;
  background-image: url("../assets/unsplash01.jpg");
}

// div1 ------- info do usuario -------- div1
.info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  position: absolute;
  top: 100px;
  left: 128px;
}

// Perfil components -------------------
.perfil {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.perfil-info {
  overflow: visible;
  padding: 10px;
  text-align: center;
  height: 100px;
  min-width: 250px;
  // border: 2px solid;
  // border-color: #EDEDED;
  // border-radius: 15px;
}

.perfil-data {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 60px;
  border: 2px solid;
  border-color: #00C7C7;
  border-radius: 20px;
  padding: 16px;
}

.button-edit-perfil-data
{
  height: 100%;
  margin-left: 16px;
  background-color: #00C7C7;
  border-radius: 20px;
  height: 80px;
}

.button-logout {
  background-color: #EDEDED;
  height: 100px;
  margin-left: 16px;
  border-radius: 20px;
}

.perfil-name {
  font-family: 'Calistoga';
  font-size: 25px;
  color: white;
}

.perfil-category {
  font-family: 'Monotom';
  font-weight: normal;
  font-size: 18px;
  color: white;
}

.user-email {
  font-size: 23px;
  font-family: 'Monotom';
  font-weight: bold;
  color: white;
}

.user-password {
  font-size: 17px;
  font-family: 'Monotom';
  font-weight: bold;
  color: white;
}
// div1 ------------------ div1 ---

// div2 -------------------- div2 --
.actions {
  position: absolute;
  bottom: 32px;
  min-height: 400px;
  min-width: 400px;
}

.options {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 16px;
}

.buttons-action {
  min-height: 80px;
  max-width: 250px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  margin-top: 8px;
  margin-left: -16px;
}

.buttons-action:hover {
  width: 100px;
  background-color: #FE7250;
}


.nav {
  position: absolute;
  bottom: 16px;
  margin-left: 16px;
  justify-content: space-around;
}
.buttons-nav {
  align-self: flex-end;
  border-radius: 10px;
  margin-right: 16px;
  background-color: #FE7250;
}
// div 2 -------------------- div2 --

// div3 ------------------- div3 ----
.context {
  position: absolute;
  right: 32px;
  top: 150px
}

.card {
  height: 100%;
  width: 100%;
  background-color: white;
}

.schedule-card {
  // border-radius: 15px;
  max-height: 70%;
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
