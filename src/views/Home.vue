<template>
  <div class="home">
    <div class="background"></div>
    <div class="content">
      <h1>Segunda Prova de Frameworks</h1>
      <p>Este site foi criado usando Pinia, Axios, Vue Router e Vuetify.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ('@/assets/brasao.png');
  opacity: 0.5;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgb(74, 24, 167);
}
</style>