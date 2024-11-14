<script setup lang="ts">
import type * as Aposta from "@/interfaces/Aposta.Interface";

defineProps<{
  aposta: Aposta.default
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

const moeda = (valor) => {
  return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor)
}

const getTipo = (aposta: Aposta):string => {
  if(aposta.resultado){
    switch (aposta.resultado){
      case 'E':
        return 'Empate'
        break;
      case 'V':
        return 'Time Visitante Vence'
        break;
      case 'C':
        return 'Time da Casa Vence'
        break;
    }
  }
  return 'Placar Exato';
}

</script>

<template>
  <div class="card-aposta">
    <div class="tipo">{{getTipo(aposta)}}</div>
    <div class="dados cabecalho">
      <div>Aposta</div>
      <div>Valor Apostado</div>
      <div>Retorno</div>
    </div>
    <div class="dados">
      <div class="times">
        <div :class="getTimeClass(aposta,'C')">{{ aposta.jogo.timeCasa.name }}</div>
        <div class="escudo">
          <img :src="aposta.jogo.timeCasa.escudo">
        </div>
        <div class="placar">{{ aposta.placarCasa }}</div>
        <div>X</div>
        <div class="placar">{{ aposta.placarVisitante }}</div>
        <div class="escudo">
          <img :src="aposta.jogo.timeVisitante.escudo">
        </div>
        <div :class="getTimeClass(aposta,'V')">{{ aposta.jogo.timeVisitante.name }}</div>
      </div>
      <div>
        {{ moeda(aposta.valor) }}
      </div>
      <div class="valor">{{ getResultado(aposta) }}</div>
    </div>
  </div>
</template>

<style scoped>
.card-aposta {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: #ffffff 0px 1px 5px 0px;
  padding: 20px;
  width: 60%;
  margin-bottom: 5px;
}
.tipo{
  font-size: 1.3em;
  color: black;
  font-weight: bold;
}
.dados{
  display: grid;
  justify-content: space-around;
  align-items: center;
  grid-template-columns: 4fr 1fr 1fr;
  gap: 20px;
  color: black
}
.cabecalho{
  background-color: #eeeeee;
  border-radius: 4px;
  color: #333333;
  font-weight: bold;
}

.times {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  color: black;
}

.valor {
  color: #015440;
  font-size: 1.4em;
  font-weight: bold;
}

.escudo {
  max-width: 50px;
}

.escudo img {
  width: 100%;
}

.escolhido, .empate {
  font-size: 1.1em;
  font-weight: bold;
  background-color: #015440;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;

}

.placar {
  font-size: 1.2em;
  background-color: #015440;
  padding: 0px 10px;
  border-radius: 5px;
  color: white;
}

.resultado-aposta {
  color: black
}
</style>