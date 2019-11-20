<template>
  <q-page padding>
    <div class="collumn" style="align-content: center">
        <div class="">
          <span class="title" style="margin-bottom: 20px;">Cadastro</span>
          <span class="subtitle">
            O cadastro permitirá:
            MAPA_Adicionar um pin no mapa (sua localização e as informações que você inserir serão visto por todos).
            Para o Fórum Municipal de Cultura é muito importante que você, sendo da classe artística, produtor cultural, instituição ou responsável
            por estabelecimento que promove arte e cultura na cidade, participe desta plataforma. A cartografia da cultura é uma maneira de dar voz e visibilidade
            A todos que produzem arte e cultura, sem hierarquias e com transparência. Cada cadastro permitirá que você insira um pin.
            AGENDA_Inserir na agenda os eventos que você irá participar ou produzir em Campo Grande Além de ser mais um local de divulgação do seu trabalho,
            o visitante ao acessar a plataforma, poderá visualizar os eventos que acontecerão nos próximos dias, reunidos num só lugar.
            DIÁLOGO_Propor debates ou participar de um debate que acontece online, proposto pelo Fórum Municipal de Cultura ou pelos participantes,
            entre a produtores artísticos e culturais da cidade.
          </span>
        </div>
        <div class="row" style="widht: 70%; margin-top: 50px;">
          <div class="collumn" style="width: 300px;">
            <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Nome*</span>
            <q-input class="input" v-model="userName" label="" color="white"/>
          </div>
          <div class="collumn" style="width: 300px; margin-left: 20px;">
            <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Email* </span>
            <q-input class="input" v-model="userEmail" label="" color="white"/>
          </div>
          <div class="collumn" style="width: 300px; margin-left: 20px;">
            <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Confirme seu email </span>
            <q-input class="input" v-model="confirmEmail" label="" color="white"/>
          </div>
        </div>
        <div class="row user-data">
          <div class="collumn" style="width: 300px; margin-left: 0px;">
            <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Senha* </span>
            <q-input v-model="password" :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon
                  size="20px"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <div class="collumn" style="width: 300px; margin-left: 20px;">
            <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Confirme sua senha </span>
            <q-input v-model="confirmPassword" :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon
                  size="20px"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
        </div>
        <div class="column user-Category" style="margin-top: 50px">
          <span class="title">Identificação ou Área de Atuação</span>
          <span>(A categoria escolhida irá aparecer no seu pin no mapa)</span>
          <div class="q-pa-md">
            <q-option-group
              :options="primaryOptions"
              label="Notifications"
              type="radio"
              v-model="userCategory"
            />
            <q-option-group
              v-if="userCategory==='atuacao'"
              :options="secondaryOptions"
              label="Notifications"
              type="radio"
              v-model="secondaryUserCategory"
              style="margin-left: 50px;"
            />
          </div>
        </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageAbout',
  data () {
    return{
      userName: '',
      userEmail: '',
      userPassword: '',
      isPwd: true,
      userCategory: null,
      secondaryUserCategory: null,
      primaryOptions: [
        { label: 'Produtor Cultural', value: 'produtor', color: 'yellow' },
        { label: 'Responsável por Estabelecimento', value: 'estabelecimento', color: 'green' },
        { label: 'instituição', value: 'instituicao', color: 'red' },
        { label: 'Atuação', value: 'atuacao', color: 'orange' }
      ],
      secondaryOptions: [
        { label: 'Dança, Teatro e Circo', value: 'dtc', color: 'yellow' },
        { label: 'Escultura', value: 'escultura', color: 'green' },
        { label: 'Arte Urbana', value: 'arteUrbana', color: 'red' },
        { label: 'Arte Digital', value: 'arteDigital', color: 'orange' }
      ]
    }
  },
  methods () {

  }
};
</script>

<style lang="sass" scoped>
.column
  display: flex
  flex-direction: column

.row
  display: flex
  flex-direction: row

.p
  font-size: 20px

.title
  font-family: sans-serif
  font-size: 30px
  font-weight: 500
  word-wrap: break-word

.subtitle
  font-size: 18px

</style>
