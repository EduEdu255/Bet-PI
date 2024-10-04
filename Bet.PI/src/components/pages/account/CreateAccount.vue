<script setup lang="ts">

import { ref } from 'vue';
const form = ref({});

const submitForm = async () => {
    alert('submit');
};

</script>

<template>
    <div class="create-account d-flex flex-column align-items-center gap-3">
        <div class="mt-4 p-2">
            <h2>Cadastre sua conta gratuitamente e ganhe R$ 300,00 de bônus.</h2>
        </div>
        <form class="w-100 text-start gap-2 d-flex flex-column p-4">
            <!-- Nome -->
            <div class="form-group ">
                <label>Nome completo</label>
                <input 
                    type="text" 
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
            <!-- Obs -->
            <div class="mt-1 p-4">
                <small>
                    Ao cadastrar você confirma os termos da plataforma e que o bônus
                    será distribuído (possivelmente) apenas para o primeiro usuário que criar a conta em nossa plataforma.
                </small>
            </div>
            <button
                @click="submitForm"
                type="button" 
                class="mt-1 btn btn-primary"
            >
                Cadastrar Conta
            </button>
        </form>
    </div>
</template>

<style scoped>
.create-account {
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
}
</style>