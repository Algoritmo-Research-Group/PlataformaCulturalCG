<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-black text-white shadow-2 rounded-borders">
      <q-toolbar>
        <q-btn flat label="Homepage" to="/" exact/>
        <q-space />

        <q-toolbar-title style="margin-left: 100px;">
          Algo+Ritmo
        </q-toolbar-title>
        <q-tabs v-model="tab" shrink stretch>
          <q-route-tab name="tab1" label="Sobre" to="/about" exact />
          <q-route-tab name="tab3" label="Contatos" to="/contacts" exact/>
          <q-route-tab name="tab2" label="História" to="/history" exact/>
        </q-tabs>
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
