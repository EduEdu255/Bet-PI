<script setup lang="ts">
import HeaderApp from '@/components/appParts/HeaderApp.vue';
import MainApp from '@/components/appParts/MainApp.vue';
import FooterApp from '@/components/appParts/FooterApp.vue';
import { ref, watch } from "vue";
import * as app from "@/stores/app-store";
// src/main.ts ou App.vue (script setup)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const carregando = ref(false);
const snack = ref(false);
const snackText = ref("");

watch(
  () => app.app().get(),
  (newAppData) => {
    carregando.value = newAppData?.carregando ?? false;
    snack.value = newAppData?.snack ?? false;
    snackText.value = newAppData?.snackText ?? '';
  },
  { deep: true }
);
</script>

<template>
  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <!-- ... -->
  <div id="app" class="dark">
    <HeaderApp v-if="base !== 'login'" />
    <div class="container" v-if="carregando">
      <div class="img">
        <img src="./assets/images/wallet.gif" />
      </div>
    </div>
    <div class="snackbar" v-if="snack">
      <div>{{ snackText }}</div>
    </div>
    <MainApp />
    <FooterApp v-if="base !== 'login'" />
  </div>
</template>

<style scoped>
#app {
  position: relative;
  /* Alterado de absolute para relative */
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
  overflow: hidden;
  /* Adicionado para evitar overflow */
}

#app span,
#app p {
  color: #2c3e50;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  max-width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
}

.container .img img {
  max-width: 300px;
  max-height: 300px;
}

.snackbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #fbe319;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  position: fixed;
  height: 6vh;
  left: 25%;
  top: 90%;
  border-radius: 10px;
}
</style>
