<template>
  <div class="body justify-center align-center">
    <q-btn outline to="/" color="white" text-color="white" style="width: 200px; margin-left: 15px; margin-bottom: 20px; position: absolute; top: 10%; left: 5%;">
      <q-icon name="keyboard_arrow_left" style=""></q-icon>
      <span>Voltar ao Mapa</span>
    </q-btn>
    <div class="context q-pa-md">
      <q-stepper
        class="q-stepper"
        v-model="step"
        vertical
        flat
        animated
        inactive-color
      >
        <q-step class="step1"
          :name="1"
          title="ENCONTRE SUA CONTA"
          icon=""
          :done="step > 1"
          color="grey-10"
        >
          <div class="row" style="align-items: center">
            <q-input outlined v-model="userRecoverEmail" label="e-mail"  color="black" style="margin-top: 10px; margin-bottom: 10px; width: 70%;"/>
            <q-btn outlined color="black" text-color="white" label="Pesquisar" style="width: 130px; height: 30px; margin-left: 16px; "/>
          </div>
          <q-stepper-navigation>
            <q-btn filled @click="step = 2" color="black" label="Continue" style="width: 150px"/>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="CÓDIGO"
          caption=""
          icon=""
          :done="step > 2"
          color="grey-10"
        >
          <div class="column">
            <span class="question">Como você deseja receber o código para redefinir sua senha?</span>
            <q-list class="">
              <q-item tag="label" v-ripple>
                <q-radio v-model="optionRecover" val="option1" color="black" />
                <q-item-section avatar>
                  <q-icon name="mail_outline" color="black"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>
                    <span class="txt-info">Enviar código por <strong>Email</strong></span>
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple>
                <q-radio v-model="optionRecover" val="option2" color="black" />
                <q-item-section avatar>
                  <q-icon name="sms"></q-icon>
                </q-item-section>
                <q-item-section >
                  <q-item-label>
                    <span class="txt-info">Enviar código por <strong>SMS</strong></span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <q-stepper-navigation>
            <q-btn filled @click="step = 3" color="black" label="Continue" style="width: 150px"/>
            <q-btn outline @click="step = 1" color="black" label="Voltar" style="margin-left: 16px; width: 110px"/>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="INSIRA O CÓDIGO"
          icon=""
          :done="step > 3"
          color="grey-10"
        >
          <div class="column">
            <span class="question">Verifique se você recebeu o código de 6 números.</span>
            <div class="row" style="align-items: center">
              <q-input outlined v-model="userRecoverCode" label="insira o código"  color="black" style="margin-top: 10px; width: 280px;"/>
              <q-btn outlined @click="step = 2" color="black" style="width: 130px; height: 30px; margin-left: 16px">
                <span style="font-size: 13px">Reenviar</span>
              </q-btn>
            </div>
          </div>
          <q-stepper-navigation>
            <q-btn filled @click="step = 4" color="black" label="Continue" style="width: 150px"/>
            <q-btn outline @click="step = 2" color="black" label="Voltar" style="margin-left: 16px; width: 110px" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="4"
          title="REDEFINA SUA SENHA"
          icon=""
          color="grey-10"
        >

          <div class="column">
            <q-input outlined v-model="userNewPassword" label="Digite nova senha"  color="black" style="margin: 10px; width: 280px;"/>
            <q-input outlined v-model="userNewPassword" label="confirme sua senha"  color="black" style="margin: 10px; width: 280px;"/>
          </div>
          <q-stepper-navigation>
            <q-btn outlined color="black" label="Finalizar" style="margin-right: 16px; width: 150px"/>
            <!-- finaliza e volta para a landing para logar -->
            <q-btn outline @click="step = 3" color="black" label="Voltar" style="width: 110px"/>
            <!-- colocar algo para identificar o match das senhas -->
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recover',
  data() {
    return {
      step: 1,
      userRecoverEmail: '',
      optionRecover: '',
    };
  },
  methods() {
    //  searchEmail e enviar email par recuperar senha
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

.q-stepper
  min-height: 200px
  width: 650px
  background-color: none

.question
  font-size: 20px
  font-weight: 500
  color: black

.txt-info
  font-size: 20px
  font-weight: 500
  color: black


</style>
