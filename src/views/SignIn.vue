<template>
  <div class="content">
    <q-btn to="/" style="position: absolute; top: 10px; left: 0px; z-index: 1; width: 9rem; height: 3.5rem; border-radius: 0px;
      background-color: #fbec5d; box-shadow: none;">
      <div class="row" style="justify-content: center; align-items: center;">
        <q-icon name="keyboard_arrow_left" class="text-black"></q-icon>
        <span style="font-size: 15px; font-weight: 800; color: black">Mapa</span>
      </div> 
    </q-btn>
    <div class="container-center">
      <div class="card">
        <div class="column">
          <h2 class="ttl">Seja Bem Vindo!</h2>
          <q-input outlined v-model="userEmail" :rules="emailRules" label="login"  color="black" required
            style="font-size: 18px"/>
          <q-input outlined v-model="userPassword" label="senha" :type="isPwd ? 'password' : 'text'" hint="Mínimo de 8 caracteres" color="black" style="font-size: 18px">
            <template v-slot:append>
              <q-icon
                :name=" isPwd ? 'visibility_off' : 'visibility'"
                size="20px"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="btn-field column">
            <router-link class="link" to="/Recover">Esqueceu sua conta?</router-link>
            <router-link class="link" to="/Register">Cadastre-se</router-link>
            <q-btn color="black" @click="signIn()" text-color="white"
              style="align-self: center; width: 150px; height: 50px; margin-top: 16px; border-radius: 0px">
              <span style="font-family: 'Calistoga'; font-weight: 400">LOGAR</span>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify';
import { AmplifyEventBus } from 'aws-amplify-vue';

export default {
  name: 'SignInPage',
  data() {
    return {
      valid: false,
      userEmail: '',
      userPassword: '',
      isPwd: false,
      passwordVisible: false,
    }
  },
  created() {
    this.findUser();

    AmplifyEventBus.$on('authState', info =>  {
      if(info === "signedIn") {
        this.findUser();
      } else {
        this.$store.state.signedIn = false;
        this.$store.state.user = null;
      }
    })
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    },
    emailRules() {
      return [
        v => !!v || 'E-mail é requerido',
        v => /.+@.+/.test(v) || 'E-mail deve ser válido'
      ]
    },
    passwordRules() {
      return {
        required: value => !!value || 'Requerido.',
        min: v => v.length >= 8 || 'Mínimo 8 characters',
        emailMatch: () => ('O email ou senha estão incorretos'),
      }
    }
  },
  methods: {
      async findUser() {
        try {
          const user = await Auth.currentAuthenticatedUser();
          this.$store.state.signedIn = true;
          this.$store.state.user = user;
          console.log(user);
        } catch(err) {
          this.$store.state.signedIn = false;
          this.$store.state.user = null;
        }
      },
      signIn() {
        Auth.signIn(this.userEmail, this.userPassword)
          .then(user => {
            this.$store.state.signedIn = !!user;
            this.$store.state.user = user;
          })
          .catch(err => console.log(err));
          console.log('error no login')
      },
      signOut() {
        Auth.signOut()
        .then(data =>{
          this.$store.state.signedIn = !!data;
        })
        . catch(err => console.log(err));
      }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  width: 100%;
  height: 100vh !important;
  border-radius: 0px !important;
  font-family: 'Poppins !important';
  // background-image: url(../assets/bg01.jpg);
  background-size: cover;
}

.container-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  width: 500px;
  padding: 16px;
  background-color: white;
}

.ttl {
  font-size: 55px;
  color: black;
  text-align: center;
  margin-bottom: 32px;
  font-family: 'Monoton';
  letter-spacing: 2px;
}

.btn-field {
  margin: 16px;
  margin-left: 8px;
}

.link {
  text-decoration: none;
  font-family: 'Calistoga';
  font-weight: normal;
  font-size: 18px;
  color: black;
}

.link:hover {
  color: grey;
}
</style>
