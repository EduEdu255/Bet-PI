<script setup lang='ts'>
import InMoment from '@/components/bets/InMoment.vue';
import { apostaService} from '@/services/apostaService';
import * as app from "@/stores/app-store";

import promocaoImage from '@/assets/images/imagem_home1.png';
import { RouterLink } from 'vue-router';

import {onMounted, ref} from "vue";
import Aposta from "@/components/bets/Aposta.vue";
import router from "@/router";

const apostas = ref([])
let user = {}

onMounted(() => {
  apostaService.minhas().then((result) =>{
    apostas.value = result.map((aposta)=> apostaService.mapAposta(aposta));
  })
  const retorno = app.app().get().user;
  user = retorno;
})

const logout = () => {
  app.app().set(null);
  router.push("/login");
};

</script>

<template >
    <div class="mt-4 hall d-flex flex-column align-items-center gap-3 bg-primary-b">
        <main class="d-flex p-xxl-5 area-perfil">
            <div class="area-img-perfil bg-secondary-b">
                <div class="img-container">
                    <img src="../../../assets/images/imagem-perfil.png" alt="">
                </div>
            </div>
            <div class="area-dados-pessoais bg-standard-b d-flex flex-column justify-content-center align-items-center gap-2 p-5">
                <div class="dados">
                    <p>Nome: <span>{{user.nome}}</span></p>
                </div>
                <div class="dados">
                    <p>Email: <span>{{user.email}}</span></p>

                </div>
<!--                <div class="dados">-->
<!--                    <p>CPF: <span>123.456.789.12</span></p>-->
<!--                </div>-->

                <button class="btn-tertiary-b" @click="logout">Sair da conta</button>
            </div>
        </main>

        <h1 class="apostas">Histórico de Apostas</h1>
     <Aposta v-for="aposta in apostas"
             :key="aposta.id"
             :aposta="aposta"
             :admin="user.roles.includes('role_admin')"
     />

        
    </div>
</template>

<style scoped>
.main-app{
    background-color: #282828;
}
.button{
    margin-top: 25px;
    background-color: #FBE319;
    color: black;
    font-weight: 600;
    padding: 10px 30px;
}
/*Richard: Centralizar button sair da conta*/
.btn-tertiary-b {
  display: block;
  margin: 0 auto;
}/*Richard*/

template{
    background-color: #282828;
}

.area-perfil{
    width: 80%;
    height: 525px;
    border-radius: 15px;
}

.area-img-perfil{
    width: 30%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px 0 0 15px;

}

.img-container{
    width: 90%;     
    height: 90%;  
    overflow: hidden; 
    position: relative;
    border-radius: 50%;
}

.img-container img{
    width: 100%;           
    height: 100%;          
    object-fit: cover;     
    object-position: center; 
}


.area-dados-pessoais{
    width: 70%;
    height: 100%;
    border-radius: 0 15px 15px 0;

}

.dados{
    font-size: 1.4em;
    color: #015440;
    font-weight: 600;
}

.dados p span{
    font-size: 0.8em;
    color: #000;
    
}

.text-start {
    padding: 65px;
    padding-right: 150px;
    
}

.imagem-home{
    margin-left: 50px;
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
</style>

