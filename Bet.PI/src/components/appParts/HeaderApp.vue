<script setup>
import { ref, onMounted } from 'vue';
import * as app from '@/stores/app-store';
import {headerMenus as headerMenus} from '@/menus';
import router from '@/router';

const menus = ref([]);
const currentUser = (
    {
        role: 'admin'   
    }
)
const user = ref({});

const loadMenus = () => {

    let auxMenus = headerMenus?.filter((menu) => menu?.role?.includes(currentUser?.role));

    menus.value = auxMenus;
}

const logout = () => {
    app.app().set(null);
    router.push('/login');
}

onMounted(() => {
    loadMenus();

    user.value = app.app().get()?.user;
    console.log(user.value, `.....`)
});

</script>

<template>
    <div id="app-header">
        <a href="/" class="header-logo">
            <!-- <img v-if="false" alt="Vue logo" src="@/assets/logo.png"> -->
            <img alt="Vue logo" src="@/assets/logo.svg">
        </a>
        <!-- Header Menus -->
        <div class="header-menus d-flex align-items-center ml-auto  ">
            <ul class="menu d-flex flex-wrap gap-2">
                <template v-if="user?.id">
                    <li v-for="menu in menus" :key="menu?.path" class="menu-item">
                        <RouterLink :to="menu?.path">
                            {{ menu?.name }}
                        </RouterLink>
                    </li>
                </template>
                <li class="ml-auto" v-if="!user?.id">
                    <RouterLink to="/login">
                        Login
                    </RouterLink>
                </li>
            </ul>
        </div>
         <!-- Header User -->
         <div class="header-user" v-if="user?.id">
            <div class="d-flex align-items-center">
                <div class="user-photo">
                    <img src="" />
                </div>
                <span class="user-name">
                    {{ user?.nome }}
                </span>
            </div>
            <!-- Sair -->
            <ul class="menu d-flex flex-wrap gap-2">
                <li class="menu-item">
                    <button @click="logout">
                        Sair
                    </button>
                </li>
            </ul>
         </div>
    </div>
</template>

<style scoped>
#app-header{
    position: sticky;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: var(--bg-template);
    padding: 1rem 1rem;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #015440;
}

.header-logo{
    height: 100%;
}

.header-logo img{
    width: auto;
    max-width: 100%;
    height: 100%;
}

.header-user {
    display: flex;
    flex-direction: row;
    margin: auto 0;
    margin-left: 2.5rem
}

.header-user .user-photo{
    width: 45px;
    height: 45px;
    margin: auto 0 auto 1rem;
    border-radius: 100%;
    background-color: var(--bg-template-ice);
}

.user-name{
    display: inline-block;
    padding: 0.15rem 0.35rem;
}

.menu {
    display:flex;
    align-items:center;
    
    margin-bottom: 0px;
    
}

.menu .menu-item a{
    font-weight: 600;
    background-color: none;
    color:#fafafa;
    box-shadow: none;
    padding: 0.45rem !important;
}

.menu .menu-item a:hover{
    color: #FBE319;
    
    border: 25px;
    
}
</style>