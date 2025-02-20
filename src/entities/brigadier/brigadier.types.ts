import { Brigadier } from "./brigadier.model";

export interface BrigadierSchema {
   data: Brigadier[];
   isLoading: boolean;
   error?: string;
}
