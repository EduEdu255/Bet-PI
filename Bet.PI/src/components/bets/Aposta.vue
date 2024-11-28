<script setup lang="ts">
import type * as Aposta from "@/interfaces/Aposta.Interface";
import {apostaService} from "@/services/apostaService";

defineProps<{
  aposta: Aposta.default,
  admin: boolean
}>()

const getTimeClass = (aposta: Aposta, time: string) => {
  if (!aposta.resultado) {
    return ''
  }
  if (aposta.resultado == 'E') {
    return 'empate'
  }
  if (aposta.resultado == time) {
    return 'escolhido'
  }
  return ''
}
const getResultado = (aposta: Aposta) => {
  const horaJogo = new Date(aposta.jogo.dataHoraJogo);
  //Jogo ainda não aconteceu, aposta não avaliada
  if (horaJogo >= new Date()) {
    return '-'
  }
  if (aposta.venceu) {
    return moeda(aposta.valor * aposta.multiplicador)
  }
  return moeda(0)

}
const pagar = async (aposta: Aposta) => {
  const pagou = await  apostaService.pagarAposta(aposta.id);
  if(pagou.id){
    aposta.paga = true;
  }
}



const moeda = (valor) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
}

const getTipo = (aposta: Aposta): string => {
  if (aposta.resultado) {
    switch (aposta.resultado) {
      case 'E':
        return 'Empate';
      case 'V':
        return `${aposta.jogo.timeVisitante.name} Vence`;
      case 'C':
        return `${aposta.jogo.timeCasa.name} Vence`;
    }
  }
  return `${aposta.jogo.timeCasa.name} ${aposta.placarCasa} x ${aposta.placarVisitante} ${aposta.jogo.timeVisitante.name}`;
}

</script>

<template>
  <div class="card-user">
   <div class="user-name">{{ aposta.user.name }} - {{ aposta.user.email }}</div>

  <div class="card-aposta">
    <div class="jogo">
      <div class="title-jogo">Resultado do jogo</div>
      <div class="times">
        <div>{{ aposta.jogo.timeCasa.name }}</div>
        <div class="escudo">
          <img :src="aposta.jogo.timeCasa.escudo" alt="Escudo time da Casa">
        </div>
        <div class="placar-aposta">{{ aposta.jogo.placarCasa }}</div>
        <div>X</div>
        <div class="placar-aposta">{{ aposta.jogo.placarVisitante }}</div>
        <div class="escudo">
          <img :src="aposta.jogo.timeVisitante.escudo" alt="Escudo time Visitante">
        </div>
        <div :class="getTimeClass(aposta, 'V')">{{ aposta.jogo.timeVisitante.name }}</div>
      </div>
    </div>
    <div class="aposta">
      <div class="title-aposta">Sua aposta foi</div>
      <div class="tipo">{{ getTipo(aposta) }}</div>
      <div class="dados-aposta">
        <div>Você apostou: {{ moeda(aposta.valor) }}</div>
        <div class="valor">Você recebe: {{ getResultado(aposta) }}</div>
      </div>
      <div class="pagamento" v-if="aposta.venceu">{{aposta.paga ? 'Paga' : 'Pendente de Pagamento'}}</div>
      <div v-if="!aposta.paga && aposta.venceu && admin">
        <button class="button btn" @click="pagar(aposta)">Registrar Pagamento</button>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.card-aposta {
  display: flex;
  gap: 20px;
  border-radius: 10px;
  justify-content: space-around;
  background-color: #383434;
  box-shadow: #fae21b 0 1px 2px 0;
  padding: 20px;
  width: 90%;
  margin-bottom: 5px;
  color: white;
}
.card-user{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.user-name{
  font-weight: bold;
  font-size: 1.5em;
}

.tipo {
  font-size: 1.3em;

  font-weight: bold;
}

.title-jogo,
.title-aposta {

  font-size: 1.2em;
  font-weight: bold;
  padding: 5px 10px;
  background-color: #fae21b;
  width: 100%;
  border-radius: 5px;
  color: #0b0a04;
}

.dados-aposta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

}

.button {
  background-color: #FBE219;
  font-weight: 600;
}

.button:hover {
  border: 1px solid white;
  color: #fff;
}

.aposta div {
  width: 100%;
}

.jogo {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.times {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2%;
  margin-top: 25px;
  font-weight: 600;
  overflow: hidden;

}

.aposta {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
}

.valor, .pagamento {
  color: #fae21b;
  font-size: 1.4em;
  font-weight: bold;
}

.escudo {
  min-width: 50px;
  max-width: 100px;
}

.escudo img {
  width: 100%;
}

.placar-aposta {
  font-size: 1.2em;
  background-color: #015440;
  padding: 0 10px;
  border-radius: 5px;
  color: white;
}

@media (max-width:728px) {
  .card-aposta, .times, .dados-aposta{
    flex-direction: column;
  }
  .times{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .jogo, .aposta{
    width: 90%;
    margin: 0 auto
  }
  .escudo img{
    width: 50%
  }
  .aposta{
    flex-direction: column;
  }
}
@media (max-width: 1024px) and (min-width: 728px){
  .card-user{
    font-size: 0.7em;
  }
}
</style>