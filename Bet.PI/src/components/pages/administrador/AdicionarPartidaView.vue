<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { timeService } from '../../../services/timeService';
import { partidaService } from '../../../services/partidaService';

const times = ref("");
const timeCasa = ref("");
const timeVisitante = ref("");
const modalidade = ref(1); // Limitei a modalidade por não saber exatamente quais modalidade poderemos usar
const dataHoraJogo = ref(new Date().toISOString()); // data e hora para a criação do jogo

onMounted(() => {
  timeService.load().then((result) => {
    times.value = result.data;
  });
});

const adicionarPartida = async () => {
  const form = {
    time_casa_id: timeCasa.value,
    time_visitante_id: timeVisitante.value,
    data_hora_jogo: dataHoraJogo.value, 
    modalidade_id: modalidade.value,
  };

  const response = await partidaService.create(form);
  if (response?.message === 'inserido') {
    console.log("Partida adicionada com sucesso!", response);
  } else {
    console.error("Erro ao adicionar a partida:", response);
  }
};
</script>

<template>
  <div class="view">
    <section class="section p-5">
      <form @submit.prevent="adicionarPartida" class="form p-4 gap-4 align-item-start bg-secondary-b">
        <div>
          <label for="timeCasa">Time da casa:</label>
          <select id="timeCasa" v-model="timeCasa" class="form-select form-select-lg mb-3" required>
            <option selected disabled value="">Selecione o time da casa</option>
            <option v-for="time in times" :key="time.id" :value="time.id">{{ time.name }}</option>
          </select>
        </div>
        <div>
          <label for="timeVisitante">Time Visitante:</label>
          <select id="timeVisitante" v-model="timeVisitante" class="form-select form-select-lg mb-3" required>
            <option selected disabled value="">Selecione o time visitante</option>
            <option v-for="time in times" :key="time.id" :value="time.id">{{ time.name }}</option>
          </select>
        </div>
        <div>
          <label for="dataHoraJogo">Data e Hora do Jogo:</label>
          <input type="datetime-local" v-model="dataHoraJogo" id="dataHoraJogo" class="form-control mb-3" required />
        </div>
        <div>
          <label for="modalidade">Modalidade:</label>
          <select id="modalidade" v-model="modalidade" class="form-select form-select-lg mb-3" disabled>
            <option :value="1">Modalidade 1</option>
          </select>
        </div>
        <button type="submit" class="btn-primary-b">Adicionar Partida</button>
      </form>
    </section>
  </div>
</template>

<style scoped>

label{
  font-weight: 700;
  font-size: 20px;
}

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
  height: 60%;
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background-color: #333;
  padding: 16px;
}

.section {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .form {
    width: 80%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .form {
    width: 90%;
    height: auto;
    padding: 12px;
  }

  .form-select, 
  .form-control,
  .btn-primary-b {
    font-size: 1rem;
    padding: 8px;
  }

  
}
</style>

