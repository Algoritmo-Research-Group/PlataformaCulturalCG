<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-black text-white shadow-2 rounded-borders"style="height: 0px;">
      <q-toolbar>
        <!-- <q-btn flat label="Homepage" to="/" exact/>
        <q-space /> -->
        <!-- <q-tabs v-model="tab" stretch>
          <q-route-tab name="tab1" label="Sobre" to="/about" exact />
          <q-route-tab name="tab3" label="Profile" to="/profile" exact/>
          <q-route-tab name="tab2" label="AdmPage" to="/adm" exact/>
          <q-route-tab name="tab4" label="Cadastro" to="/register" exact/>
          <q-route-tab name="tab5" label="RecuperarSenha" to="/recover" exact/>
          <q-route-tab name="tab6" label="SignIn" to="/signIn" exact />
        </q-tabs> -->
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',

  data() {
    return {
      tab: '',
    };
  },
};
</script>
