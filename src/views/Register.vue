<template>
    <div class="content">
      <q-btn to="/" style="position: absolute; top: 10px; left: 0px; z-index: 1; width: 9rem; height: 3.5rem; border-radius: 0px;
        background-color: black; box-shadow: none;">
        <div class="row" style="justify-content: center; align-items: center;">
          <q-icon name="keyboard_arrow_left" class="text-white"></q-icon>
          <span style="font-size: 15px; font-weight: 800; color: white">Mapa</span>
        </div> 
      </q-btn>
      <div class="container-center">
        <div class="col-l">
        <span class="ttl">Cadastre-se:</span>
        <div class="context">
          <p class="p">O cadastro permitirá: <br>
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
        <div class="btn row-space-around" style="margin-top: 24px; margin-bottom: 8px">
          <q-btn outline to="/" label="CANCELAR" style="width: 150px">
          </q-btn>
          <q-btn filled  label="FINALIZAR" color="black" text-color="white" style="width: 180px"></q-btn>
        </div>
      </div>
      </div>
    </div>

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

<style lang="scss" scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  width: 100%;
  height: 100vh;
  font-family: 'Poppins';
  background-color: #fbec5d;
}

.container-center {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  // border: 2px solid red;
  width: 100%;
  height: 70%;
}

.col-l {
  position: absolute;
  top: 0px;
  left: 100px;
}

.col-r {
  position: absolute;
  top: 0px;
  right: 10%;
  min-width: 450px;
  border: solid 2px white;
  border-radius: 10px;
  padding: 8px;
}

.ttl {
  position: relative;
  font-size: 50px;
  word-wrap: break-word;
  color: white;
  font-family: 'Monoton';
}

.sbttl {
  font-size: 18px;
  margin: 15px;
}

.sbtll-terms {
  font-size: 16px;
}

.context {
  margin-top: 16px;
  max-width: 600px;
}

.p {
  font-size: 18px;
}

.input {
  margin: 8px;
  font-size: 18px;
}

#link {
  color: black;
  text-decoration: none;
}
</style>
