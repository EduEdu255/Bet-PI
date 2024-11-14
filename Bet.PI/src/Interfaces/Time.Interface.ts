import {Modalidade} from "./Modalidade.Interface";

export interface Time {
    id?: number;
    name?: string;
    modalidade: Modalidade;
    escudo: string;
}