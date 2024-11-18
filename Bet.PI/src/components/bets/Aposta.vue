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
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
}

const getTipo = (aposta: Aposta): string => {
  if (aposta.resultado) {
    switch (aposta.resultado) {
      case 'E':
        return 'Empate';
      case 'V':
        return 'Time Visitante Vence';
      case 'C':
        return 'Time da Casa Vence';
    }
  }
  return `Placar Exato: ${aposta.jogo.timeCasa.name} ${aposta.placarCasa} x ${aposta.placarVisitante} ${aposta.jogo.timeVisitante.name}`;
}

</script>

<template>
  <div class="card-aposta">
    <div class="jogo">
      <div class="title-jogo">Jogo apostado</div>
      <div class="times">
        <div>{{ aposta.jogo.timeCasa.name }}</div>
        <div class="escudo">
          <img :src="aposta.jogo.timeCasa.escudo" alt="Escudo time da Casa">
        </div>
        <div class="placar">{{ aposta.jogo.placarCasa }}</div>
        <div>X</div>
        <div class="placar">{{ aposta.jogo.placarVisitante }}</div>
        <div class="escudo">
          <img :src="aposta.jogo.timeVisitante.escudo" alt="Escudo time Visitante">
        </div>
        <div :class="getTimeClass(aposta, 'V')">{{ aposta.jogo.timeVisitante.name }}</div>
      </div>
    </div>
    <div class="aposta">
      <div class="title-aposta">Dados da Aposta</div>
      <div class="tipo">{{ getTipo(aposta) }}</div>
      <div class="dados">
        <div>Valor Apostado: {{ moeda(aposta.valor) }}</div>
        <div class="valor">Prêmio: {{ getResultado(aposta) }}</div>
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
  width: 60%;
  margin-bottom: 5px;
  color: white;
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

.dados {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

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
  gap: 20px;
  margin-top: 25px;
  font-weight: 600;

}

.aposta {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
}

.valor {
  color: #fae21b;
  font-size: 1.4em;
  font-weight: bold;
}

.escudo {
  width: 50px;
}

.escudo img {
  width: 100%;
}

.placar {
  font-size: 1.2em;
  background-color: #015440;
  padding: 0 10px;
  border-radius: 5px;
  color: white;
}
</style>