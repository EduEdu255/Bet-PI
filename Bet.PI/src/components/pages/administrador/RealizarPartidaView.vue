<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';
import { partidaService } from '../../../services/partidaService';

interface Partida {
  id: number;
  time_casa: { name: string; escudo: string };
  time_visitante: { name: string; escudo: string };
  data_hora_jogo: string;
}

const toast = useToast();
const partidas = ref<Partida[]>([]);

const fetchJogosFuturos = async () => {
  try {
    const response = await fetch('http://localhost:8001/api/jogos/futuros');
    const data = await response.json();
    partidas.value = data;
  } catch (error) {
    console.error('Erro ao buscar jogos futuros:', error);
    toast.error('Erro ao buscar jogos futuros');
  }
};

const finalizarJogo = async (id: number) => {
  try {
    const response = await partidaService.finalizeGame(id);
    if (response?.id) {
      fetchJogosFuturos(); // Atualiza a lista de jogos após finalizar
      toast.success('Jogo finalizado com sucesso');
    } else {
      console.error('Erro ao finalizar o jogo');
      toast.error('Erro ao finalizar o jogo');
    }
  } catch (error) {
    console.error('Erro ao finalizar o jogo:', error);
    toast.error('Erro ao finalizar o jogo');
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
    <div class='placar row gap-2 align-items-center ml-auto mr-auto p-0 rounded'>
      <template v-for='item in partidas' :key="item.id">
        <div class='item col-12 row d-flex justify-content-center w-100 gap-2 px-5 py-3'>
          <!-- Competição -->
          <div class='col-4 times-partida'>
            {{ item.time_casa.name }} <img :src="item.time_casa.escudo"> vs <img :src="item.time_visitante.escudo"> {{ item.time_visitante.name }}
          </div>
          <div class='col-4 times-partida'>
            {{ getDate(item.data_hora_jogo) }}
          </div>
          <!-- Botão Finalizar -->
          <div class='col-1'>
            <button class='btn btn-warning' @click="finalizarJogo(item.id)">Finalizar</button>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style>

.placar {
  width: 100%;
  border: 1px solid #e9ecef;
  margin-bottom: 50px;
}

.times-partida, .titulo-partida {
  color: white;
}
.times-partida img {
  width: 50px;
}

.placar .item {
  color: #373737;
  margin: 0 !important;
  width: 100%;
  font-weight: 700;
  background: #373737;
}

.times-partida {
  color: #fff;
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>