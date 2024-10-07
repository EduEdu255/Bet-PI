<script setup>

</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div class='main-app p-0'>
        <router-view></router-view>
    </div>
</template>

<style scoped>
#main-app{
    padding: 1rem 1rem;
    background-color: var(--bg-template);
    flex-grow: 1;
}

.main-app {
    min-height: 100%;
    overflow: auto;
    background-color: #282828;
}
</style>