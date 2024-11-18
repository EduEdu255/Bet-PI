<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { partidaService } from '../../../services/partidaService';

interface Partida {
  id: number;
  time_casa: { name: string };
  time_visitante: { name: string };
  data_hora_jogo: string;
}

const partidas = ref<Partida[]>([]);

const fetchJogosFuturos = async () => {
  try {
    const response = await fetch('http://localhost:8001/api/jogos/futuros');
    const data = await response.json();
    partidas.value = data;
  } catch (error) {
    console.error('Erro ao buscar jogos futuros:', error);
  }
};

const finalizarJogo = async (id: number) => {
  try {
    const response = await partidaService.finalizeGame(id);
    if (response?.id) {
      fetchJogosFuturos(); // Atualiza a lista de jogos após finalizar
    } else {
      console.error('Erro ao finalizar o jogo');
    }
  } catch (error) {
    console.error('Erro ao finalizar o jogo:', error);
  }
};

const getDate = (dateTime: string) => {
  const date = new Date(dateTime);
  return date.toLocaleString();
};

onMounted(() => {
  fetchJogosFuturos();
});
</script>

<template>
  <section class="section p-5">
    <h2 class='titulo-partida'>Partidas</h2>
    <div class='placar row gap-2 ml-auto mr-auto p-0 rounded'>
      <template v-for='item in partidas' :key="item.id">
        <div class='item col-12 row d-flex align-items-center w-100 p-5'>
          <!-- Competição -->
          <div class='col-4 times-partida'>
            {{ item.time_casa.name }} vs {{ item.time_visitante.name }}
          </div>
          <div class='col-4 times-partida'>
            {{ getDate(item.data_hora_jogo) }}
          </div>
          <!-- Botão Finalizar -->
          <div class='col-4 d-flex ml-auto'>
            <button class='btn btn-warning' @click="finalizarJogo(item.id)">Finalizar</button>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style>
.times-partida, .titulo-partida {
  color: white;
}
</style>