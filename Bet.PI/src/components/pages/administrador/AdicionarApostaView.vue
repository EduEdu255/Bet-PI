<script setup lang='ts'>
import InMoment from '@/components/bets/InMoment.vue';
import promocaoImage from '@/assets/images/imagem_home1.png';
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="view">
        
        <section class="w-100 h-100 d-flex justify-content-center">
            <div class="w-75 h-75">
                <form action="" method="POST" class="form d-flex flex-column gap-4 p-5">
                    <label for="time_casa" class="titulo-4-white align-self-start">Time da casa</label>
                    <select class="form-select" aria-label="Disabled select example">
                        <option value="1">São Paulo</option>
                        <option value="2">São Paulo</option>
                        <option value="3">São Paulo</option>
                        <option value="4">São Paulo</option>
                        <option value="5">São Paulo</option>
                        <option value="6">São Paulo</option>
                        <option value="7">São Paulo</option>
                        <option value="8">São Paulo</option>
                        <option value="9">São Paulo</option>
                        <option value="10">São Paulo</option>
                    </select>
                    <label for="time_visitante" class="titulo-4-white align-self-start">Time visitante</label>
                    <select class="form-select" aria-label="Disabled select example">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    
                    <input type="date" class="form-select">
                    <button type="submit" class="btn-primary-b">Cadastrar jogo</button>
                </form>
            </div>
        </section>
        

    </div>
</template>

<style scoped>
html, body {
    height: 100%;
    overflow-x: hidden; 
    margin: 0;
    padding: 0;
}

.view {
    width: 100vw;
    background-color: #282828;
    overflow-y: auto; /* Adicione esta linha */
}

.section-container {
    padding: 10px;
}


</style>
