<template>
  <div class="content justify-center align-center">
    <card-logo title="this.title" subtitle="alo"></card-logo>
  </div>
</template>

<script>
export default {
  name: 'Recover',
  data() {
    return {
      title: 'alo cara',
      subtitle: 'eae man',
    };
  },
  methods() {
    //  searchEmail e enviar email par recuperar senha
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
  //background-image: url(../assets/statics/yellow01.jpg);
}

.q-stepper {
  min-height: 200px;
  width: 650px;
  background-color: none;
}

.question {
  font-size: 20px;
  font-weight: 500;
  color: black;
}

.txt-info {
  font-size: 20px;
  font-weight: 500;
  color: black;
}
</style>
