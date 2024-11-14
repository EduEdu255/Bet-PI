import { api } from "@/api.ts";
import Aposta from "../components/bets/Aposta.vue";
import {partidaService} from "./partidaService";

const prefix = "apostas";

export const apostaService = {
    load: async () => {
        return await api.get(prefix);
    },
    minhas: async () => {
        return await api.get(`${prefix}/minhas`)
    },
    create: async (form) => {
        return await api.post(prefix, form);
    },
    update: async (id, form) => {
        return await api.put(`${prefix}/${id}`, form);
    },
    remove: async (id) => {
        return await api.delete(`${prefix}/${id}`);
    },
    mapAposta: (result):Aposta => {
        return {
            id: result.id,
            valor: parseFloat(result.valor),
            jogo: partidaService.mapPartida(result.jogo),
            resultado: result.resultado,
            venceu: result.venceu ?? false,
            placarCasa: result.placar_casa,
            placarVisitante: result.placar_visitante,
            multiplicador: result.multiplicador,
        }
    }
};
