import { Brigadier } from "../brigadier/brigadier.model";

export interface Salary {
   id: number;
   date: string;
   brigadier: Brigadier | null;
   amount: number;
}
