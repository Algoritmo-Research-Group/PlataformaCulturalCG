<template>
  <div class="row" style="width: 100%; height: 100vh; background: linear-gradient(to left, #ba7453, #d1a984);">
    <q-btn outline to="/" color="white" text-color="black" style="width: 35%; margin-top: 10px; margin-left: 15px; margin-bottom: 20px">
      <q-icon name="keyboard_arrow_left" style=""></q-icon>
      <span>Voltar ao Mapa</span>
    </q-btn>
    <div class="q-pa-md" style="width: 100%">
      <q-card class="card" v-model="valid" lazy-validation>
        <q-card-section>
          <q-input outlined v-model="userEmail" :rules="emailRules" label="login"  color="white" style="margin: 10px; width: 90%;"required/>
          <q-input outlined v-model="password" label="senha" :type="isPwd ? 'password' : 'text'" color="white" style="margin: 10px; width: 90%; padding-bottom: 0px;">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                size="20px"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="btn-field column" style="width: 90%; align-content: center;">
            <router-link class="link-recover" to="/Recover">Esqueceu sua conta?</router-link>
            <router-link class="link-recover" to="/Register">Cadastre-se</router-link>
            <q-btn outlined class="btn-logar" :disabled="!valid" @click="submit()" text-color="black"
              style="align-self: center; width: 40%; margin-top: 10px; margin-bottom: 10px;">
              <span style="font-family: 'Calistoga'; font-weight: normal">LOGAR</span>
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
.card
  width: 30%
  height: 40%

.link
  text-decoration: none
  font-family: 'Calistoga'
  font-weight: normal
  font-size: 18px
  color: white

.link-recover
  text-decoration: none
  font-family: 'Calistoga'
  font-weight: normal
  font-size: 14px
  color: black

.link-recover:hover
  color: orange
</style>
