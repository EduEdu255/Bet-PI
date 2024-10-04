<script setup lang='ts'>
import {onMounted, ref} from 'vue';
import InMoment from '@/components/bets/InMoment.vue';

const winner = ref(false);

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
                <!-- Resultado -->
                <span class="fs-4">
                    Você apostou que o resultado do jogo seria:
                    <span class="fs-5 d-flex mt-1 flex-row gap-2 justify-content-center">
                        <span class="fs-5">
                            Fortaleza : 1
                        </span>
                        <span class="fs-5">
                            Ceará : 2
                        </span>
                    </span>
                </span>
            </div>
        </div>
        <!-- Resultado -->
        <div class="resultado mt-4">
            <!-- Parabens -->
            <h4 v-if="winner">
                Parabéns, você ganhou o super prêmio de
                <span class="parabens">R$ 450,00</span>
            </h4>
            <!-- Consolar -->
            <h4 v-if="!winner">
                Ahhh... Que pena! não foi dessa fez. Fidelize o dobro para dobrar as suas chances na próxima vez.
            </h4>
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

.resultado {
    max-width:650px
}
</style>