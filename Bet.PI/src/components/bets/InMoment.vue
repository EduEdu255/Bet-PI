<script setup lang='ts'>
import {onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import {partidaService} from '@/services/partidaService';
import {timeService} from '@/services/timeService';
import * as app from "@/stores/app-store";
import Toast, {useToast} from "vue-toastification";
import "vue-toastification/dist/index.css";

const partidas = ref([]);
const times = ref([]);
const user = ref(undefined);
const toast = useToast();
const router = useRouter();

onMounted(() => {
  user.value = app.app().get().user
  partidaService.loadGames().then((result) => {
    partidas.value = result.map((partida) => {
      return partidaService.mapPartida(partida);
    });
  });

  // timeService.load().then((result) => {
  //     times.value = result.map((time) => timeService.mapTime(time));
  // });
});

const podeApostar = (): boolean => {
  if (user.value === undefined) {
    return false;
  }
  if (!user.value.roles.includes('role_admin')) {
    return true;
  }
  return false;
}

const handleApostarClick = (itemId) => {
  router.push(`/games/${itemId}/make-bet`).then(() => {});
}

// const getTimeName = (timeId) => {
//     const time = times.value.find(t => t.id === timeId);
//     return time ? time.name : 'Time não encontrado'; // Retorna 'Time não encontrado' se o time não for encontrado
// };
//
// const getEscudo = (timeId) => {
//     const time = times.value.find(t => t.id === timeId);
//     return time ? time.escudo : '';
// };
const getDate = (data) => {
  const date = new Date(data);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date).replace(',', ' às');
}
</script>

<template>
  <div class="back-aposta d-flex">
    <img src="@/assets/Bola.svg" alt="Bola" class="bola">
    <h3>Próximos Jogos</h3>
  </div>

  <div class='placar row gap-2 ml-auto mr-auto p-0 rounded'>
    <template v-for='item in partidas' :key="item.id">
      <div class='item col-12 row d-flex align-items-center justify-content-between w-100 p-5'>
        <!-- Competição -->
        <div class='col-6 times-partida'>
          {{ item.timeCasa.name }} <img :src="item.timeCasa.escudo"> X <img :src="item.timeVisitante.escudo">
          {{ item.timeVisitante.name }}
        </div> 
        <div class='col-4 times-partida'>
          {{ getDate(item.dataHoraJogo) }}
        </div>

        <!-- Apostar -->
        <div class='col-2 d-flex' v-if="podeApostar()">
          <button class='button btn' @click="handleApostarClick(item.id)">
            Apostar
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.img_bola {
  width: 100px;
  height: 100px;
}

.placar {
  max-width: 1080px;
  border: 1px solid #e9ecef;
  margin-bottom: 50px;
}

.times-partida img {
  width: 50px;
}

.back-aposta {
  text-align: start;
  height: 100px;
  max-width: 1080px;
  border-radius: 15px;
  margin-bottom: -30px;
  align-items: center;
  gap: 25px;
  padding-left: 20px;
}

.back-aposta h3 {
  font-size: 20px;
  font-weight: 600;
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

.button {
  background-color: #FBE219;
  font-weight: 600;
}

.button:hover {
  border: 1px solid white;
  color: #fff;
}
@media (max-width:728px) {
  .placar .item{
    flex-direction: column;
    gap: 10px;
  }
  .times-partida{
    width: 100%;
    justify-content: center;
  }
  .item div.col-2{
    width: 33%;

  }
}

</style>