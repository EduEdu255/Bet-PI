import { api } from "@/api.ts";
import {Jogo} from "../Interfaces/Jogo.Interface";
import {timeService} from "./timeService";
import {modalidadeService} from "./modalidadeService";

const prefix = "jogos";

export const partidaService = {
  load: async () => {
    return await api.get(prefix);
  },
  create: async (form) => {
    return await api.post(`${prefix}/inserir`, form);
  },
  update: async (id, form) => {
    return await api.put(`${prefix}/editar/${id}`, form);
  },
  remove: async (id) => {
    return await api.delete(`${prefix}/deletar/${id}`);
  },
  loadPastGames: async () => {
    return await api.get(`${prefix}/passados`);
  },
  finalizeGame: async (id) => {
    return await api.put(`${prefix}/finalizar/${id}`);
  },

  getGame: async (id) => {
    return await api.get(`${prefix}/${id}`);
  },

  loadGames: async () => {
    return await api.get(`${prefix}/futuros`);
  },
  mapPartida: (result):Jogo => {
    return {
      id: result.id,
      timeCasa: timeService.mapTime(result.time_casa),
      timeVisitante: timeService.mapTime(result.time_visitante),
      modalidade: {id: result.time_casa.modalidades.id, name: result.time_casa.modalidades.name},
      placarCasa: result.placar_casa,
      placarVisitante: result.placar_visitante,
      dataHoraJogo: new Date(result.data_hora_jogo)
    }
  }
};
