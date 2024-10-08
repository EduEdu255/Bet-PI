<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import * as jogosAoVivo from '@/services/jogosAoVivo';

const items = ref([]);

onMounted(() => {
    jogosAoVivo.get().then((response : any) => {
        items.value = response ?? [];
    });
});

</script>

<template>
    <div class="back-aposta d-flex">
        <img src="@/assets/Bola.svg" alt="Bola" class="bola">
        <h3>Partidas Baseadas em resultados</h3>
        
    </div>
        <div class='placar row gap-2  ml-auto mr-auto p-0 rounded'>
        <template v-for='item in items'>
            <div class='item col-12 row d-flex align-items-center w-100 p-5'>
                <!-- Competição -->
                <div class='col-4'>
                    {{ item.title }}
                </div>
                <!-- Placar -->
                <div class='col-4'>
                    {{ item.placar }}
                </div>
                <!-- Apostar -->
                <div class='col-4 d-flex ml-auto'>
                    <RouterLink class='button btn   ml-auto' :to="`/games/${item?.id}/make-bet`">
                        Apostar
                    </RouterLink>
                </div>
            </div>
        </template>
    

    </div>
    
</template>

<style scoped>

.img_bola{
    width: 100px;
    height: 100px;
}

.placar {
    width: 1080px;
    background-color: var(----bg-template);
    border:1px solid #e9ecef;
    margin-bottom: 50px;
    
}

.back-aposta{
    text-align: start;
    background-color:   ;
    height: 100px;
    width: 1080px;
    border-radius: 15px ;
    margin-bottom: -30px;
    align-items: center;
    gap: 25px;
    padding-left: 20px;
    
    
}
.back-aposta h3{
    font-size: 20px;
    font-weight: 600;
}

.placar .item { 
    color: 373737;
    margin: 0 !important;
    width: 100%;
    
    font-weight: 700;
    
}

.placar .title{
    color: white;
}

.placar .item {
    background-color: var(----bg-template);
}

.placar .item{
    background: #373737;

    
}

.button{
    background-color: #FBE219;
    font-weight: 600;
}


</style>