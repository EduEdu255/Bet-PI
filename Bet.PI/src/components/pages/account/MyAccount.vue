<script setup lang="ts">

import { login as accountLogin, me} from '@/services/accountsService';
import { onMounted, ref, watch } from 'vue';

const form = ref({});

onMounted(async () => {
    form.value = await me();
})

const submitForm = async () => {
    alert('submit');
};

</script>

<template>
    <div class="create-account d-flex flex-column align-items-center gap-3">
        <div class="titulo-conta mt-4 p-2">
            <h2>Minha Conta - Editar dados Cadastrais</h2>
        </div>
        <form class="w-100 text-start gap-2 d-flex flex-column p-4">
            <!-- Nome -->
            <div class="form-group ">
                <label>Nome completo</label>
                <input 
                    type="text"
                    :value="form.nome"
                    @change="(e) => form.name = e.target.value"
                    class="form-control"
                    placeholder="Seu nome"
                >
            </div>
            <!-- E-mail -->
            <div class="form-group ">
                <label>Email</label>
                <input 
                    type="email" 
                    :value="form.email"
                    @change="(e) => form.email = e.target.value"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" 
                    placeholder="Seu e-mail de login"
                >
            </div>
            <!-- Data de Nascimento -->
            <div class="form-group ">
                <label>Data de Nascimento</label>
                <input 
                    type="date" 
                    @change="(e) => form.birthday = e.target.value"
                    class="form-control"
                    placeholder="Data de nascimento"
                >
            </div>
            <!-- Senha -->
            <div class="form-group ">
                <label>Senha de Login</label>
                <input 
                    type="text" 
                    @change="(e) => form.password = e.target.value"
                    class="form-control"
                    placeholder="Informe a sua senha"
                >
            </div>
            <!-- Confirmar Senha -->
            <div class="form-group ">
                <label>Confirme a sua senha</label>
                <input 
                    type="text" 
                    @change="(e) => form.password_confirm = e.target.value"
                    class="form-control"
                    placeholder="Informe a sua senha"
                >
            </div>
            <button
                @click="submitForm"
                type="button" 
                class="mt-1 btn "
            >
                Editar Dados
            </button>
        </form>
    </div>
</template>

<style scoped>
.titulo-conta{
    color: #fbe319;
}

.titulo-conta h2{
    font-weight: 700;
}

label{
    color: white;
    font-weight: 600;
}

.create-account {
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
}
button{
    background-color: #fbe319;
    color: black;
    font-weight: 600;
    margin-bottom: 150px;
}
</style>