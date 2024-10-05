<script setup lang='ts'>
import InMoment from '@/components/bets/InMoment.vue';
import promocaoImage from '@/assets/images/imagem_home1.png';
</script>

<template class="bg-">
    <div class="mt-4 hall d-flex flex-column align-items-center gap-3 bg-primary-b">
        <main class="d-flex p-xxl-5">
            <div class="text-start  w-50"> 
                <h2 class="text-foco">Oferta de Abertura de Conta</h2>
                <h2 class="rubik-title display-5">Você receberá 50% do valor do seu depósito qualificativo em Créditos de Aposta (até R$500)</h2>
                <button>Criar Conta</button>
            </div>
            <div class="w-50 h-50">
                <img :src="promocaoImage" alt="Promoção de Abertura de Conta" />
            </div>
        </main>

        <InMoment />

        <h1>Teste</h1>
    </div>
</template>

<style scoped>
template{
    background-color: #282828;
}

.text-start {
    padding: 65px;
    padding-right: 200px;
    
}

.rubik-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 50px;
}

.text-foco{
    color: #FBE219;
}
</style>

