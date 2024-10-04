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
    <div class='placar row gap-2 ml-auto mr-auto p-0 rounded'>
        <template v-for='item in items'>
            <div class='item col-12 row d-flex align-items-center w-100'>
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
                    <RouterLink class='btn btn-primary p-1 ml-auto' :to="`/games/${item?.id}/make-bet`">
                        Apostar
                    </RouterLink>
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped>
.placar {
    max-width: 450px;
    background-color: var(----bg-template);
    border:1px solid #e9ecef;
}

.placar .item {
    color: #495057;
    margin: 0 !important;
}

.placar .item {
    background-color: var(----bg-template);
}

.placar .item:nth-child(2n + 1) {
    background: #f8f9fa;
}
</style>