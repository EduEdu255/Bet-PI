<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { timeService } from '../../../services/timeService'

const times = ref([]);

onMounted(() => {
    timeService.load().then((result) => {
        console.log(result)
        times.value = result;
    });
    console.log(times.value)
})

</script>

<template>
    <div class="make-bet d-flex flex-column align-items-center gap-3">
        <div class='bg-dark w-100 text-light'>
            <div v-for="time in times" :key="time?.id" class="times">
                <div>
                    <span class="time_name">{{ time.name }}</span>
                </div>
                <div>
                    <img v-bind:src="time.escudo">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.times{
    background-color: white;
    box-shadow: inset;
    width: 50%;
    margin: 10px auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
}
.time_name{
    color: black;
    font-weight: 600;
    font-size: 24px;
}
.times img{
    max-width: 100px;
}
</style>