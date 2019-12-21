<template>
  <div class="body justify-center align-center">
    <q-btn outline to="/" color="white" text-color="white" style="width: 200px; margin-left: 15px;
      margin-bottom: 20px; position: absolute; top: 10%; left: 5%;">
      <q-icon name="keyboard_arrow_left" style=""></q-icon>
      <span>Voltar ao Mapa</span>
    </q-btn>
    <div class="q-pa-md">
      <q-card class="card" v-model="valid" lazy-validation>
        <q-card-section>
          <h2 class="ttl">Seja Bem Vindo!</h2>
          <q-input outlined v-model="userEmail" :rules="emailRules" label="login"  color="black" required
            style="font-size: 18px"/>
          <q-input outlined v-model="password" label="senha" :type="isPwd ? 'password' : 'text'" color="black" style="font-size: 18px">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                size="20px"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="btn-field column">
            <router-link class="link" to="/Recover">Esqueceu sua conta?</router-link>
            <router-link class="link" to="/Register">Cadastre-se</router-link>
            <q-btn filled color="black" :disabled="!valid" @click="submit()" text-color="white"
              style="align-self: center; width: 150px; height: 50px; margin-top: 16px;">
              <span style="font-family: 'Calistoga'; font-weight: 400">LOGAR</span>
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpPage',
  data() {
    return {
      valid: false,
      userEmail: '',
      password: '',
      passwordVisible: false,
    }
  },
  computed: {
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
    submit() {
      if (this.$refs.form.validate()) {
        console.log(`SIGN UP username: ${this.username}, password: ${this.password}, email: ${this.username}`);
      }
    },
  },
};
</script>

<style lang="sass">

*
  margin: 0
  padding: 0
  box-sizing: border-box

.body
  width: 100%
  height: 100vh
  font-family: 'Poppins !important'

.card
  width: 500px
  padding: 16px

.ttl
  font-size: 55px
  color: black
  text-align: center
  margin-bottom: 32px

.btn-field
  margin: 16px

.link
  text-decoration: none
  font-family: 'Calistoga'
  font-weight: normal
  font-size: 18px
  color: black

.link:hover
  color: grey

</style>
