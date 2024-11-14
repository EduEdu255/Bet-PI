import {Jogo} from "./Jogo.Interface";

export interface Aposta {
    id?: number;
    jogo: Jogo;
    placarCasa?: number;
    placarVisitante?: number;
    resultado?: string;
    venceu: boolean;
    valor: number;
    multiplicador: number;
}