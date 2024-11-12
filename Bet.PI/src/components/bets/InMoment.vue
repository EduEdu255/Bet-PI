<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { partidaService } from '@/services/partidaService';
import { timeService } from '@/services/timeService';

const partidas = ref([]);
const times = ref([]);

onMounted(() => {
    partidaService.loadGames().then((result) => {
        partidas.value = result;
    });

    timeService.load().then((result) => {
        times.value = result;
        console.log(times.value)
    });
});

const getTimeName = (timeId) => {
    const time = times.value.find(t => t.id === timeId);
    return time ? time.name : 'Time não encontrado'; // Retorna 'Time não encontrado' se o time não for encontrado
};

const getEscudo = (timeId) => {
    const time = times.value.find(t => t.id === timeId);
    return time ? time.escudo : '';
};
const getDate = (data) => {
    const date = new Date(data);
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(date).replace(',',' às');
}
</script>

<template>
    <div class="back-aposta d-flex">
        <img src="@/assets/Bola.svg" alt="Bola" class="bola">
        <h3>Próximos Jogos</h3>
    </div>
    
    <div class='placar row gap-2 ml-auto mr-auto p-0 rounded'>
        <template v-for='item in partidas' :key="item.id">
            <div class='item col-12 row d-flex align-items-center w-100 p-5'>
                <!-- Competição -->
                <div class='col-6 times-partida'>
                <img :src="getEscudo(item.time_casa_id)"> {{ getTimeName(item.time_casa_id) }} vs {{ getTimeName(item.time_visitante_id) }} <img :src="getEscudo(item.time_visitante_id)">
                </div>
                <div  class='col-4 times-partida'>
                    {{ getDate(item.data_hora_jogo) }}
                </div>
                <!-- Placar -->
                
                <!-- <div class='col-4 text-white'>
                    {{ item.placar_casa }} - {{ item.placar_visitante }}
                </div> -->  <!--Comentei porque de início não se tem um placar-->
                
                <!-- Apostar -->
                <div class='col-2 d-flex ml-auto'>
                    <RouterLink class='button btn ml-auto' :to="`/games/${item.id}/make-bet`">
                        Apostar
                    </RouterLink>
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
    width: 1080px;
    border: 1px solid #e9ecef;
    margin-bottom: 50px;
}

.times-partida img{
    width: 60px;
}

.back-aposta {
    text-align: start;
    height: 100px;
    width: 1080px;
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
.times-partida{
    color: #fff;
}
.button {
    background-color: #FBE219;
    font-weight: 600;
}

.button:hover {
    border: 1px solid white;
    color: #fff;
}

</style>
