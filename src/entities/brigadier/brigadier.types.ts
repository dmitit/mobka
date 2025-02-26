import { Brigadier } from "./brigadier.model";

export interface BrigadierTable {
   id: number;
   fullname: string;
}

export type BrigadierInput = Omit<BrigadierTable, "id">;

export interface BrigadierSchema {
   data: Brigadier[];
   isLoading: boolean;
}
