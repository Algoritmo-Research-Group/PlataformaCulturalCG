<template>
    <div class="body">

      <q-btn to="/" class="btn-back" round size="1.5em" style="position: fixed; top: 32px; left: 32px; z-index: 1; box-shadow: none;">
        <img src="../assets/icons/keyboard_arrow_left_black.png"/>
      </q-btn>

      <div class="row container-center">

        <div class="column col-l">

          <span class="ttl">Que tal participar da cultura de CG?</span>
          <div class="context">
            <p class="p">O cadastro permitirá: <br></p>
            <div class="column">
              <p class="p p-column">
                <strong>Mapa:</strong> Adicionar um pin no mapa (sua localização e as informações que você inserir serão visto por todos). Cada cadastro permitirá que você insira um pin.
                <br>
              </p>
              <p class="p p-column">
                <strong>Agenda:</strong> Inserir na agenda os eventos que você irá participar ou produzir em Campo Grande Além de ser mais um local de divulgação do seu trabalho,
                o visitante ao acessar a plataforma, poderá visualizar os eventos que acontecerão nos próximos dias, reunidos num só lugar.
                <br>
              </p>
              <p class="p p-column">
                <strong>Diálogo:</strong> Propor debates ou participar de um debate que acontece online, proposto pelo Fórum Municipal de Cultura ou pelos participantes,
                entre a produtores artísticos e culturais da cidade.
                <br>
              </p>
            </div>
            <p class="p p-column focus-text">Para o Fórum Municipal de Cultura é muito importante que você, sendo da classe artística, produtor cultural, instituição ou responsável
              por estabelecimento que promove arte e cultura na cidade, participe desta plataforma. A cartografia da cultura é uma maneira de dar voz e visibilidade
              A todos que produzem arte e cultura, sem hierarquias e com transparência.</p>
          </div>
          <q-btn class="btn-form animate-scale05" @click="showNav" color="black">
            <span class="span-btn-form">Quero Participar!</span>
          </q-btn>

        </div>

        <div class="col-r">
          
          <div class="form column" :class="{ 'show' : showSideBar }">

            <q-input outlined class="input" v-model="userName" label="Nome" color="black"/>
            <q-input outlined class="input" v-model="userEmail" label="Email" color="black"/>
            <q-input outlined class="input" v-model="confirmEmail" label="Confirme seu Email" color="black"/>
            <q-input outlined class="input" v-model="userPassword" label="Senha" color="black"
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
            <q-input class="input" outlined v-model="confirmPassword" label="Confirme sua Senha" color="black"
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
              color="black"
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
                color="white"
              />
            </div>

            <div class="row terms">

              <q-toggle v-model="acceptTerms" color="black"/>
              <span class="sbtll-terms">Eu li e concordo com os 
                <br>
                <a id="link" href="#"><strong>Termos de Uso</strong></a>
                e <a id="link" href="#"><strong>Privacidade</strong></a> 
              </span>

            </div>

            <div class="btn-field row">
              <q-btn class="btn-cancel animate-scale05" @click="showNav">
                <span class="span-btn-cancel">Num quero</span>
              </q-btn>
              <q-btn class="btn-finalizar animate-scale1" color="black">
                <span class="span-btn">Vamos Lá</span>
              </q-btn>
            </div>
            <!-- fim de form -->
          </div>

        <!-- fim de col-r -->
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
      showSideBar: false,
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
  methods: {
    showNav() {
      this.showSideBar = !this.showSideBar;
    }
  },
};
</script>

<style lang="scss" scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  width: 100%;
  height: 100vh;
  background-color: #fbec5d;
}

.btn-back:hover::before {
  content: 'Voltar';
  font-family: 'Courier new';
  font-size: 1.2em;
  font-weight: 900;
  letter-spacing: 4px;
  margin-left: 45px;
  color: black;
  box-shadow: none;
}

.container-center {
  position: absolute;
  // border: 2px solid red;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.col-l {
  position: relative;
  left: 10%;
  flex-basis: 80%;
  padding: 32px;
}

.ttl {
  font-size: 40px;
  color: white;
  font-family: 'Monoton';
}

.context {
  margin-top: 16px;
}

.p {
  font-size: 16px;
}

.p-column {
  max-height: 250px;
  margin-top: 16px;
  margin-right: 26px;
}

.focus-text {
  margin-top: 32px;
}

// ---------------------------- form --------------- >>>>>>>>>>>>>>>>>>
.col-r {
  position: relative;
  flex-basis: 20%;
  align-items: center;
  padding: 8px;
}

.form {
  border: solid 2px white;
  padding: 32px;
  height: 100vh;
  width: 0px;
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  overflow: hidden;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 0;
}

.show {
  width: 420px;
  transition: 1.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 1;
  background-color: white;
}

.sbttl, .sbtll-terms, .p {
  font-family:'Courier New', Courier, monospace;
}

.input {
  margin: 8px;
  font-size: 17px;
  font-family: 'Courier New', Courier, monospace;
  max-width: 350px;
}

.terms {
  margin-top: 10px !important;
  margin: 8px;
  width: 380px;
  //border: 1px solid gray;
  border-radius: 5px;
}

.sbtll-terms {
  margin-left: 16px;
  font-size: 16px;
}

#link {
  color: black;
  text-decoration: none;
}

.btn-field {
  position: absolute;
  bottom: 16px;
  max-width: 350px;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

.btn-cancel {
  width: 120px;
  height: 40px;
  box-shadow: none !important;
  border: 2px solid black;
  border-radius: 25px;
  background-color: transparent;
  margin-right: 24px;
}

.animate-scale05:hover {
  transform: scale(1.05);
  transition: all .2s linear;
}

.animate-scale1:hover {
  transform: scale(1.1);
  transition: all .2s linear;
}

.btn-finalizar {
  width: 180px;
  height: 45px;
  border-radius: 30px;
  box-shadow: none;
}

.span-btn {
  color: white;
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  font-weight: 400;
}

.span-btn-cancel {
  color: black;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  font-weight: 700;
  text-transform: lowercase;
}

.btn-form {
  align-self: center;
  margin-top: 40px;
  width: 220px;
  height: 40px;
  border-radius: 30px;
  box-shadow: none;
}

.span-btn-form {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: normal;
  font-family: 'Courier New', Courier, monospace;
}

</style>
