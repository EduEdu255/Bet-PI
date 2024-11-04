<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { timeService } from '../../../services/timeService'


const times = ref([]);

onMounted(() => {
    timeService.load().then((result) => {
        console.log(result)
        times.value = result.data;
    });
    console.log(times.value)
})
</script>

<template>
  <div class="view">
    <section class="section p-4">
      <form action="" class="form p-4 gap-4 align-item-start bg-secondary-b">
        <div>
          <label for="timeCasa" class="">Time da casa:</label>
          <select id="timeCasa" class="form-select form-select-lg mb-3" aria-label="Seleção de Time da Casa">
            <option selected disabled>Selecione o time da casa</option>
            <option v-for="time in times" :key="time?.id" :value="time.id">{{ time.name }}</option>
          </select>
        </div>
        <div>
          <label for="timeVisitante" class="">Time Visitante:</label>
          <select id="timeVisitante" class="form-select form-select-lg mb-3" aria-label="Seleção de Time Visitante">
            <option selected disabled>Selecione o time visitante</option>
            <option v-for="time in times" :key="time.id" :value="time.id">{{ time.name }}</option>
          </select>
        </div>
        <button type="submit" class="btn-primary-b">Adicionar Aposta</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
.view {
  width: 100vw;
  background-color: #282828;
  overflow-y: auto;
}
.form {
  height: 70vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
}
.section {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
