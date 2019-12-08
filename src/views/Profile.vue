<template>
  <q-page padding style="width: 100%; background: #FFBE86">
    <!-- <q-btn flat to="/" color="white" text-color="white" style="margin-top: 10px; margin-left: 15px; margin-bottom: 20px">
        <q-icon name="keyboard_arrow_left" style=""></q-icon>
        <span>Voltar ao Mapa</span>
    </q-btn> -->
    <q-card class="content">
      <div class="col1_item1">
        <q-card class="perfil-card" style="height: 35%; margin-bottom: 20px">
          <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 100%">
            <q-avatar size="100px" class="absolute-top bg-transparent" style="position: absolute; top: 8%; left: 30%;">
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <div class="absolute-bottom bg-transparent" style="margin-top: 20px">
              <div class="column" align="center" style="margin-top: 20px; margin-right: 30px;">
                <div class="perfil-name">{{userName}}</div>
                <div class="perfil-category">{{userCategory}}</div>
              </div>
            </div>
          </q-img>
        </q-card>
        <div class="row" style="height: 10%; justify-content: center; align-items: center; margin-bottom: 20px">
          <div class="perfil-data">
            <span class="user-email"> {{ userEmail }} </span>
            <span class="user-password" style=""> {{ userPassword }} </span>
          </div>
          <q-btn style="height: 100%; margin-left: 10px; background-color: #7DC9E7; border-radius: 10px;">
            <q-icon name="keyboard_arrow_right" class="text-white" size="20px"></q-icon>
          </q-btn>
        </div>
        <div class="column" style="height: 15%; widht: 100%; justify-content: center; align-items: center">
        </div>
      </div>
      <div class="col1_item2">
        <!-- figuras e historia -->
      </div>
      <div class="col2_item1">
        <!-- <q-card class="pin-card" v-if="" style="max-width: 50%; height: 30%; margin-left: 25px;">
          <q-card-section class="bg-yellow text-black">
            <div class="text-h6">Adicionar Pin</div>
            <div class="text-subtitle2">Faça parte da Cartografia</div>
          </q-card-section>

          <q-card-section class="context" style="height: 100%; width: 100%;">
            <span class="subtitle" style="font-size: 12px; position: relative; top: 10px;"> Este pin te localiza no mapa com os dados inseridos abaixo</span>
            <div class="name-field"  style="display: flex; flex-direction: row; width: 100%; margin-top: 20px;">
              <div class="collumn" style="width: 200px;">
                <span class="input-info text-black" style="font-size: 12px; position: relative; top: 10px;">Nome do Pin</span>
                <q-input class="input" v-model="nomePin" label="" color="white"/>
              </div>
              <div class="collumn" style="width: 300px;">
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
        </q-card> -->
      </div>
      <div class="col2_item2">
        <!-- todo here -->
      </div>
      <div class="col3_item1">
        <q-btn flat to="/schedule" style="height: 70%; width: 120px; margin-right: 8px; margin-top: 8px">
          <q-img center class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 100%; border-radius: 15px;">
            <div class="absolute-full text-subtitle2 flex flex-center">
              <span style="font-size: 20px">AGENDA</span>
            </div>
          </q-img>
        </q-btn>
        <q-btn flat to="/debates" style="height: 70%; width: 120px; margin-left: 8px; margin-top: 8px">
          <q-img center class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 100%; border-radius: 15px;">
            <div class="absolute-full text-subtitle2 flex flex-center">
              <span style="font-size: 20px">DEBATES</span>
            </div>
          </q-img>
        </q-btn>
      </div>
      <div class="col3_item2">
        <q-table
          grid
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
      <div class="col3_item3">
        <q-expansion-item
          header-class="bg-primary text-white"
          class="shadow-1 overflow-hidden"
          style="border-radius: 30px"
          expand-separator
          icon="add"
          label="Adicionar"
        >
          <q-card>
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
      </q-expansion-item>
      </div>
      </div>
    </q-card>
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
<style lang="sass" scoped>
.row
  display: flex
  flex-direction: row
  align-content: flex-start

.collumn
  display: flex
  flex-direction: column

// content -----------------
.content
  height: 90vh
  border-radius: 20px
  display: grid
  grid-template-columns: 25% auto 45%
  grid-template-rows: 10% 45% auto
  grid-gap: 10px
  background-color: #F4F3EB

.col1_item1
  min-width: 400px
  grid-column-start: 1
  grid-column-end: 2
  grid-row-start: 1
  grid-row-end: 3

.col1_item2
  grid-column-start: 1
  grid-column-end: 2
  grid-row-start: 3
  grid-row-end: 5

.col2_item1
  grid-column-start: 2
  grid-column-end: 3
  grid-row-start: 1
  grid-row-end: 2

.col2_item2
  grid-column-start: 2
  grid-column-end: 3
  grid-row-start: 3
  grid-row-end: 4

.col3_item1
  grid-column-start: 3
  grid-column-end: 4
  grid-row-start: 1
  grid-row-end: 2
  padding: 0px
  position: absolute
  right: 16px

.col3_item2
  grid-column-start: 3
  grid-column-end: 4
  grid-row-start: 2
  grid-row-end: 3
  display: flex
  justify-content: flex-start
  position: absolute
  top: 10px
  left: 8px

.col3_item3
  grid-column-start: 3
  grid-column-end: 4
  grid-row-start: 3
  grid-row-end: 4
  position: absolute
  top: -30px
  right: 16px

// Perfil components -------------------
.perfil-card
  display: flex
  flex-direction: column
  justify-content: space-around
  border-radius: 15px
  padding: 35px
  height: 60%
  min-width: 350px
  max-height: 450px

.perfil-name
  font-family: 'Calistoga'
  font-size: 25px

.perfil-category
  font-family: 'Monotom'
  font-weight: normal
  font-size: 18px

.perfil-data
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center
  width: 80%
  height: 100%
  background-color: white

.user-email
  font-size: 23px
  font-family: 'Monotom'
  font-weight: bold
  color: black

.user-password
  font-size: 17px
  font-family: 'Monotom'
  font-weight: bold
  color: black

// column2 components ------------------------
.schedule-card
  border-radius: 15px
  max-height: 70%

// texts input and into input -------------
.input-info
  margin: 5px
  font-size: 15px
  font-weight: bold

.input
  margin: 5px
  margin-top: -10px
  font-size: 15px

</style>
