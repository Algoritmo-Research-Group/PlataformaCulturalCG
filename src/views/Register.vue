<template>
  <q-page>
    <div class="body">
      <q-btn outline to="/" color="white" text-color="white" style="width: 200px; margin-left: 15px;
        margin-bottom: 20px; position: absolute; top: 5%; left: 5%;">
        <q-icon name="keyboard_arrow_left" style=""></q-icon>
        <span>Voltar ao Mapa</span>
      </q-btn>
      <div class="col-l">
        <span class="ttl">Cadastre-se:</span>
        <div class="context">
          <p class="p">O cadastro permitirá: </br>
            <strong>Mapa:</strong> Adicionar um pin no mapa (sua localização e as informações que você inserir serão visto por todos). Cada cadastro permitirá que você insira um pin.
            <br>
            <strong>Agenda:</strong> Inserir na agenda os eventos que você irá participar ou produzir em Campo Grande Além de ser mais um local de divulgação do seu trabalho,
            o visitante ao acessar a plataforma, poderá visualizar os eventos que acontecerão nos próximos dias, reunidos num só lugar.
            <br>
            <strong>Diálogo:</strong> Propor debates ou participar de um debate que acontece online, proposto pelo Fórum Municipal de Cultura ou pelos participantes,
            entre a produtores artísticos e culturais da cidade.
            <br>
            Para o Fórum Municipal de Cultura é muito importante que você, sendo da classe artística, produtor cultural, instituição ou responsável
            por estabelecimento que promove arte e cultura na cidade, participe desta plataforma. A cartografia da cultura é uma maneira de dar voz e visibilidade
            A todos que produzem arte e cultura, sem hierarquias e com transparência.
          </p>
        </div>
      </div>
      <div class="col-r">
        <q-input outlined class="input" v-model="userName" label="Nome" color="white"/>
        <q-input outlined class="input" v-model="userEmail" label="Email" color="white"/>
        <q-input outlined class="input" v-model="confirmEmail" label="Confirme seu Email" color="white"/>
        <q-input outlined class="input" v-model="userPassword" label="Senha" color="white"
          :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              size="20px"
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-input class="input" outlined v-model="confirmPassword" label="Confirme sua Senha" color="white"
          :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              size="20px"
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <!-- <span class="sbttl">Identificação ou Área de Atuação</span> -->
        <q-select
          class="input"
          label="Categoria ou Área de Atuação"
          outlined
          transition-show="scale"
          transition-hide="scale"
          v-model="userCategory"
          :options="primaryOptions"
          style="width: 350px"
          color="white"
        />
        <div class="" v-if="userCategory==='atuacao'">
          <q-select
            class="input"
            label="Que Artista você é?"
            outlined
            transition-show="scale"
            transition-hide="scale"
            v-model="secondaryUserCategory"
            :options="secondaryOptions"
            style="width: 350px"
            color="white"
          />
        </div>
        <q-item
          tag="label"
          style="margin-top: 15px"
        >
          <q-item-section avatar>
            <q-toggle
              v-model="acceptTerms"
              color="green"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              <span class="sbtll-terms">Eu li e concordo com os <a id="link" href="#">Termos de Uso</a> e <a id="link" href="#">Privacidade</a> </span>
            </q-item-label>
          </q-item-section>
        </q-item>
        <div class="btn row-space-around" style="margin-top: 32px">
          <q-btn outline to="/" label="CANCELAR" style="width: 150px">
          </q-btn>
          <q-btn filled  label="FINALIZAR" color="black" text-color="white" style="width: 180px"></q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'pageRegister',
  data () {
    return {
      userName: '',
      userEmail: '',
      confirmEmail: '',
      userPassword: '',
      confirmPassword: '',
      isPwd: true,
      userCategory: '',
      secondaryUserCategory: '',
      acceptTerms: false,
      primaryOptions: [
        { label: 'Produtor Cultural', value: 'produtor', color: 'yellow' },
        { label: 'Responsável por Estabelecimento', value: 'estabelecimento', color: 'green' },
        { label: 'instituição', value: 'instituicao', color: 'red' },
        { label: 'Atuação', value: 'atuacao', color: 'orange' },
      ],
      secondaryOptions: [
        { label: 'Dança, Teatro e Circo', value: 'dtc', color: 'yellow' },
        { label: 'Escultura', value: 'escultura', color: 'green' },
        { label: 'Arte Urbana', value: 'arteUrbana', color: 'red' },
        { label: 'Arte Digital', value: 'arteDigital', color: 'orange' },
      ],
    };
  },
  methods () {

  },
};
</script>

<style lang="sass" scoped>

*
  margin: 0
  padding: 0
  box-sizing: border-box

.body
  width: 100%
  height: 100vh
  font-family: 'Poppins !important'
  background-image: url('../assets/unsplash02.jpg')

.col-l
  position: absolute
  top: 10%
  left: 10%

.col-r
  position: absolute
  top: 15%
  right: 10%
  min-width: 500px
  border: solid 2px white
  border-radius: 10px
  padding: 16px

.ttl
  position: relative
  height: 100px
  width: 400px
  font-size: 50px
  font-weight: 900
  word-wrap: break-word
  color: white

.sbttl
  font-size: 18px
  margin: 15px

.sbtll-terms
  font-size: 16px

.context
  margin-top: 32px
  max-width: 700px

.p
  font-size: 20px

.input
  margin: 15px
  font-size: 18px

#link
  color: black
  text-decoration: none

</style>
