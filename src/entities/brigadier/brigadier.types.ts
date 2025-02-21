import { Brigadier } from "./brigadier.model";

export interface BrigadierTable {
   id: number;
   fullname: string;
}

export interface BrigadierSchema {
   data: Brigadier[];
   isLoading: boolean;
   error: string | null;
}
