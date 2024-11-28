<script setup lang='ts'>
import InMoment from '@/components/bets/InMoment.vue';
import promocaoImage from '@/assets/images/imagem_home1.png';
import { RouterLink } from 'vue-router';

</script>

<template >
    <div class="mt-4 hall d-flex flex-column align-items-center gap-3 bg-primary-b">
        <main class="d-flex flex-column flex-md-row p-xxl-5">
            <div class="text-start col-lg-6 col-md-12 mb-4 mb-md-0">
                <h2 class="text-foco">Conheça a Bet.Pi</h2>
                <h2 class="rubik-title display-5 fs-md-1">Saiba mais sobre a melhor Bet do mundo!</h2>

                <RouterLink class="btn button ml-md-auto" :to="`/sobrenos`">
                    Quero saber mais
                </RouterLink>
            </div>  
            <div class="imagem-home d-none col-lg-6 d-lg-flex align-items-center justify-content-center w-50">
                <img class="w-50" :src="promocaoImage" alt="Promoção de Abertura de Conta" />
            </div>
        </main>


        <h1 class="apostas">Apostas Esportivas</h1>

        <InMoment />

        
    </div>
</template>

<style scoped>
body{
    background-color: #282828;
}
.button{
    margin-top: 25px;
    background-color: #FBE319;
    color: black;
    font-weight: 600;
    padding: 10px 30px;
}

.button:hover{
    border: 1px solid white;
}

template{
    background-color: #282828;
}

.text-start {
    padding: 65px;
    padding-right: 150px;
    
}

.imagem-home{
    margin-left: 50px;
}
.imagem-home img{
  max-width: 50%;
}

.apostas{
    font-weight: 600;
}

.rubik-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 50px;
}

.text-foco{
    color: #FBE319;
    font-weight: 600;
}

.criar-conta{
    padding: 10px 30px;
    background-color: #FBE319;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    margin-top: 25px;
}

.main-app{
    background-color: #282828;
}
main{
    background-color: #222222;
    margin-top: -30px;
    margin-bottom: 30px;
}
@media(max-width: 728px){
  .text-start{
    padding: 20px;
  }
  .rubik-title{
    font-size: 2em;
  }
}

</style>

