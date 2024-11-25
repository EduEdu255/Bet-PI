<script setup lang='ts'>
import {onMounted, ref} from 'vue';
import InMoment from '@/components/bets/InMoment.vue';
import { partidaService } from '@/services/partidaService';
import { timeService } from '@/services/timeService';
import { apostaService } from '@/services/apostaService';
import { useRouter } from 'vue-router';
import * as app from '@/stores/app-store';

const gameMode = ref(1);
const premio = ref(0);
const multiplicador = ref(5);
const casa = ref("");
const visitante = ref("");

const byPlaca1 = ref(0);
const byPlaca2 = ref(0);
const byWinner = ref(0);
const valorApostado = ref(0);

const partida = ref();
const times = ref([]);

onMounted(async () => {

    let betId = useRouter().currentRoute?.value?.params?.id;

    partidaService.getGame(betId).then((id) => {
        partida.value = id [0] ?? undefined;
        casa.value = partida.value.time_casa.name
        visitante.value = partida.value.time_visitante.name
        });
});

const fazAposta = async () => {
    let aposta = {
      valor: valorApostado.value,
      jogo_id: partida.value.id
    }
  if(byWinner.value){
    aposta['resultado'] = byWinner.value;
  }
  else{
    aposta['placar_casa'] = byPlaca1.value;
    aposta['placar_visitante']=byPlaca2.value;
  }

  const result = await apostaService.create(aposta);
  if(result.id){
      app.app().openSnackBar('Aposta bem sucedida.');
    } else{
      app.app().openSnackBar('Aposta mal sucedida. ' + (result.message ?? ''));
  }
}

const select = (ev : any) => {
    gameMode.value = ev.target.value;

    if (gameMode.value == 1) {
        multiplicador.value = 5;
    }

    if (gameMode.value == 2) {
        multiplicador.value = 1.5;
    }
}

const winnerSelect = (ev : any) => {
    byWinner.value = ev.target.value;
}

const valorAposta = (valor) => {
    valorApostado.value = valor;
    premio.value = valor * multiplicador.value;
}
</script>

<template v-for='item in partidas' :key="item.id">
    <div class="make-bet d-flex flex-column align-items-center gap-3">
        <div class='make-aposta w-100 text-light'>
            <div class='make-bet-header'>
                <h4 class='p-2'>
                    Realizar Aposta
                </h4>
            </div>

            <!-- Game Status -->
            <div class='d-flex p-2 gap-3 justify-content-center'>
                    <!-- Jogo -->
                    <div class='game p-0 text-primary'>
                        <span class='fs-6'>
                            Jogo: {{casa}} X {{visitante}}
                        </span>
                    </div>
                    <!-- Premiação -->
                    <div class='game p-0 text-success'>
                        <span class='fs-6'>
                            Multiplicador: {{ multiplicador }}x
                        </span>
                    </div>
                    <!-- Premiação -->
                    <div class='game p-0 text-warning'>
                        <span class='fs-6'>
                            Possível Prêmio: R$ {{ premio }}
                        </span>
                    </div>
            </div>
        </div>

       <!-- Form -->
       <div class='game-bet  p-4 mt-5'>
            <h6>
                Qual é a sua aposta?
            </h6>
            <!-- Modo do jogo -->
            <div class='w-100'>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Apostar por</label>
                    </div>
                    <select @change='select'class="custom-select" id="inputGroupSelect01">
                        <option value="1">Por Placar</option>
                        <option value="2">Por Resultado</option>
                    </select>
                </div>
            </div>

            <!-- Modo de Jogo -->
            <div class='game-mode'>
                <!-- Por placar -->
                <template v-if="gameMode == 1">
                    <div class="input-group game-mode mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">{{casa}}</span>
                        </div>
                        <input @input="(e) => form[''] = e.target.value" type="number" min="0" max="5" @change="(e) => byPlaca1 = e.target.value" name="placar-1" class="form-control">
                    </div>
                    <div class="input-group game-mode mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">{{visitante}}</span>
                        </div>
                        <input type="number" @change="(e) => byPlaca2 = e.target.value" min="0" max="5" name="placar-2" class="form-control">
                    </div>
                </template>
                <!-- Por vencedor -->
                <template v-if="gameMode == 2">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Vencedor</label>
                        </div>
                        <select @change='winnerSelect'class="custom-select" id="inputGroupSelect01">
                            <option value="C">{{casa}}</option>
                            <option value="V">{{ visitante }}</option>
                            <option value="E">Empate</option>
                        </select>
                    </div>
                </template>
            </div>

            <!-- Finalizar Aposta -->
            <div class='end-bet mt-4 rounded mb-4'>
                <label class="bet-value">Valor da Aposta</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="text" @change="(e) => valorAposta(e.target.value)" class="form-control" aria-label="Amount (to the nearest dollar)">
                    <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>
            </div>

            <button @click="fazAposta" type="button" class='btn btn-primary'>
                Finalizar Aposta
            </button>
       </div>
    </div>
</template>

<style scoped>

.input-group-append .input-group-text{
    border-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.btn{
    background-color: #fbe319;
    color: black;
    font-weight: 600;
    border: none
}

.btn:hover{
    background-color: #373737;
    color: white;
    border: 1px solid white;
}

.bet-value{
    color:white;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 10px;
}

.form-control{
    background: #282828;
    color: white;
}
.form-control:focus{
    background: #282828;
    color: white;
    border-color: #fbe319;
    box-shadow: 0 0 5px #fbe319;
    
}

.custom-select{
    background-color:#282828;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    color: white;
    border: 1px solid white;
    border-color: white;    
}

.input-group-text{
    background-color: #222222;
    color: white;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

h4 {
    font-weight: 700;
}
.game-bet {
    width: 100%;
    max-width: 550px;
    border-radius: 25px;
    margin-bottom: 85px;
    background-color: #373737;
}

h6{
    color:white;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 40px;
}

.game-bet select {
    width:220px !important;
}

.game-mode {
    max-width:350px
}

.make-aposta{
    background-color:#222222;

}
</style>
