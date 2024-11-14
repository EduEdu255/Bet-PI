import {Time} from "./Time.Interface";
import {Modalidade} from "./Modalidade.Interface";

export interface Jogo{
    id?: number;
    timeCasa: Time;
    timeVisitante: Time;
    modalidade: Modalidade;
    placarCasa?: number;
    placarVisitante?: number;
    dataHoraJogo: Date;
}