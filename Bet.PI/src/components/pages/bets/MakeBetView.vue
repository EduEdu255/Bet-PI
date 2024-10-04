<script setup lang='ts'>
import {onMounted, ref} from 'vue';
import InMoment from '@/components/bets/InMoment.vue';

const gameMode = ref(1);
const premio = ref(0);
const multiplicador = ref(0);

const byPlaca1 = ref(0);
const byPlaca2 = ref(0);
const byWinner = ref(0);
const valorApostado = ref(0);

const select = (ev : any) => {
    gameMode.value = ev.target.value;

    if (gameMode.value == 1) {
        multiplicador.value = 250;
    }

    if (gameMode.value == 2) {
        multiplicador.value = 5;
    }

    if (gameMode.value == 3) {
        multiplicador.value = 15;
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

<template>
    <div class="make-bet d-flex flex-column align-items-center gap-3">
        <div class='bg-dark w-100 text-light'>
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
                            Jogo: Fortaleza X Ceará
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
       <div class='game-bet bg-light p-4 mt-5'>
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
                        <option value="2">Por um vencedor</option>
                        <option value="3">Por empate</option>
                    </select>
                </div>
            </div>

            <!-- Modo de Jogo -->
            <div class='game-mode'>
                <!-- Por placar -->
                <template v-if="gameMode == 1">
                    <div class="input-group game-mode mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Fortaleza</span>
                        </div>
                        <input type="text" @change="(e) => byPlaca1 = e.target.value" name="placar-1" class="form-control">
                    </div>
                    <div class="input-group game-mode mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Ceará</span>
                        </div>
                        <input type="text" @change="(e) => byPlaca2 = e.target.value" name="placar-2" class="form-control">
                    </div>
                </template>
                <!-- Por vencedor -->
                <template v-if="gameMode == 2">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Vencedor</label>
                        </div>
                        <select @change='winnerSelect'class="custom-select" id="inputGroupSelect01">
                            <option value="1">Fortaleza</option>
                            <option value="2">Ceará</option>
                        </select>
                    </div>
                </template>
            </div>

            <!-- Finalizar Aposta -->
            <div class='end-bet mt-4 rounded mb-4'>
                <label>Valor da Aposta</label>
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

            <button type="button" class='btn btn-primary'>
                Fidelizar Aposta
            </button>
       </div>
    </div>
</template>

<style scoped>
.game-bet {
    width: 100%;
    max-width: 550px;
}

.game-bet select {
    width:220px !important;
}

.game-mode {
    max-width:350px
}
</style>