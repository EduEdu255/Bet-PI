<script setup lang="ts">
import HeaderApp from '@/components/appParts/HeaderApp.vue';
import MainApp from '@/components/appParts/MainApp.vue';
import FooterApp from '@/components/appParts/FooterApp.vue';

</script>

<template>
  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <!-- ... -->
    <div id="app" class="dark">
      <HeaderApp v-if="base !== 'login'"/>
      <MainApp />
      <FooterApp v-if="base !== 'login'"/>
    </div>
</template>

<style scoped>
#app {
  position: relative; /* Alterado de absolute para relative */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Adicionado para evitar overflow */
}

#app span,
#app p {
  color: #2c3e50;
}

</style>
