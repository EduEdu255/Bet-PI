import {Jogo} from "./Jogo.Interface";
import {User} from "./User.Interface";

export interface Aposta {
    id?: number;
    jogo: Jogo;
    placarCasa?: number;
    placarVisitante?: number;
    resultado?: string;
    venceu: boolean;
    valor: number;
    multiplicador: number;
    pagar: boolean;
    user: User;
}