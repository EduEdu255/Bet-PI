import { api } from "@/api.ts";

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
};
