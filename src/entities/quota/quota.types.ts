import { Activist } from "./quota.model";

export interface ActivistTable {
   id: number;
   fullname: string;
   description: string;
   payment: number;
   id_brigadier: number;
   id_event: number;
}

export type ActivistInput = Omit<ActivistTable, "id">;

export interface ActivistSchema {
   data: Activist[];
   isLoading: boolean;
}
