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
            return menu.role.some((role) => roles.includes(role));
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
    loadMenus();
});
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary-b">
        <div class="container-fluid">
            <!-- Logo -->
            <a class="navbar-brand" href="/home">
                <img alt="Vue logo" src="@/assets/logo.svg" class="header-logo" />
            </a>

            <!-- Botão de colapso -->
            <button
                class="navbar-toggler border-white bg-warning"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Menu -->
            <div
                class="collapse navbar-collapse"
                id="navbarMenu"
            >
                <!-- Menus -->
                <ul class="navbar-nav flex-column flex-lg-row align-items-start w-100">
                    <template v-if="user?.id">
                        <li
                            v-for="menu in menus"
                            :key="menu?.path"
                            class="nav-item link-menu-tamanho"
                        >
                            <RouterLink :to="menu?.path" class="nav-link">
                                {{ menu?.name }}
                            </RouterLink>
                        </li>
                    </template>
                    <li class="nav-item" v-if="!user?.id">
                        <RouterLink to="/login" class="nav-link login">Login</RouterLink>
                    </li>
                </ul>

                <!-- User Profile -->
                <div
                    v-if="user?.id"
                    class="header-user d-flex flex-column flex-lg-row align-items-start gap-3 ms-auto"
                >
                    <div class="perfil-button d-flex align-items-center">
                        <div class="user-photo">
                            <span>{{ user?.nome.slice(0, 1) }}</span>
                        </div>
                        <span class="user-name text-dark">
                            {{ user?.nome }}
                        </span>
                    </div>
                    <button @click="logout" class="btn btn-danger btn-lg">Sair</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: #015440;
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-logo {
    max-height: 50px;
}

.nav-link {
    color: #fafafa;
    font-weight: 600;
}

.nav-link:hover {
    color: #fbe319;
}

.header-user .user-photo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    margin-right: 0.5rem;
    border-radius: 50%;
    background-color: #f5f5f5;
    font-weight: 600;
    font-size: 1.2rem;
    color: #015440;
}

.user-name {
    color: #fafafa;
    font-weight: 600;
}

.perfil-button {
    background: white;
    padding: 2px 10px;
    border-radius: 10px;
}

.btn-warning {
    background-color: #fbe319;
    color: black;
    font-weight: 600;
}

.btn-warning:hover {
    background-color: #f5d700;
}

.link-menu-tamanho {
    font-size: 1rem;
}

/* Correções para tamanhos pequenos */
@media (max-width: 570px) {
    .header-user {
        flex-direction: column !important;
    }
}
</style>
