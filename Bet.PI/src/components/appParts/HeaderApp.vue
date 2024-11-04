<script setup>
import { ref, onMounted, watch } from "vue";
import * as app from "@/stores/app-store";
import { headerMenus as headerMenus } from "@/menus";
import router from "@/router";

const menus = ref([]);
const user = ref(undefined);

const loadMenus = () => {
    const roles = user.value?.roles;
    if (roles) {
        const filtered = headerMenus?.filter((menu) => {
            for (let i = 0; i < menu.role.length; i++) {
                const role = menu.role[i]
                if (roles.includes(role)) {
                    return true;
                }
            }
        });
        menus.value = filtered;
    } else {
        menus.value = [];
    }
};

const logout = () => {
    app.app().set(null);
    router.push("/login");
};

watch(
    () => app.app().get(),
    (newAppData) => {
        user.value = newAppData?.user;
        loadMenus();
    },
    { deep: true }
);

onMounted(() => {
    user.value = app.app().get()?.user;
    console.log(user.value, `.....`);
    loadMenus();
    console.log("Carreguei header");
});
</script>

<template>
    <div id="app-header">
        <a href="/home" class="header-logo">
            <!-- <img v-if="false" alt="Vue logo" src="@/assets/logo.png"> -->
            <img alt="Vue logo" src="@/assets/logo.svg" />
        </a>
        <!-- Header Menus -->
        <div class="header-menus d-flex align-items-center ml-auto">
            <ul class="menu d-flex flex-wrap gap-2">
                <template v-if="user?.id">
                    <li v-for="menu in menus" :key="menu?.path" class="menu-item">
                        <RouterLink :to="menu?.path">
                            {{ menu?.name }}
                        </RouterLink>
                    </li>
                </template>
                <li class="ml-auto" v-if="!user?.id">
                    <RouterLink to="/login" class="login"> Login </RouterLink>
                </li>
            </ul>
        </div>
         <!-- Header User -->
         <div class="header-user" v-if="user?.id">
            <div class="perfil-button d-flex align-items-center">
                <div class="user-photo">
                    <span>{{ user?.nome.slice(0,1) }}</span>
                </div>
                <span class="user-name">
                    {{ user?.nome }}
                </span>
            </div>
            <!-- Sair -->
            <ul class="menu d-flex flex-wrap gap-2">
                <li class="menu-item">
                    <button @click="logout" class="button btn ml-auto">Sair</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.perfil-button{
    background: white;
    padding: 2px 10px;
    border-radius: 10px;
}
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

.header-logo {
    height: 100%;
}

.header-logo img {
    width: auto;
    max-width: 100%;
    height: 100%;
}

.header-user {
    display: flex;
    flex-direction: row;
    margin: auto 0;
    margin-left: 2.5rem;
}

.header-user .user-photo {
    display:flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    margin: auto 0 auto 1rem;
    border-radius: 100%;
    background-color: var(--bg-template-ice);
    font-weight: 600;
    font-size: 1.5em;
    color:#015440;
}

.user-name {
    display: inline-block;
    padding: 0.15rem 0.35rem;
    color: #015440;
    font-weight: 600;
}

.menu {
    display: flex;
    align-items: center;

    margin-bottom: 0px;
}

.menu .menu-item a {
    font-weight: 600;
    background-color: none;
    color: #fafafa;
    box-shadow: none;
    padding: 0.45rem !important;
}

.menu .menu-item a:hover {
    color: #fbe319;

    border: 25px;
}

.menu-item button {
    background-color: #FBE319;
    color: black;
    font-weight: 600;
    padding: 10px 30px;
}

.login {
    background-color: #fbe319;
    padding: 10px 20px;
    border-radius: 5px;
    color: black;
    font-weight: 600;
}

.login:hover {
    border: 1px solid white;
    color: #fafafa;
    background: none;
}
</style>
