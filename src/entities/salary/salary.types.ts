import { Salary } from "./salary.model";

export interface SalaryTable {
   id: number;
   date: string;
   id_brigadier: number;
   amount: number;
}

export type SalaryInput = Omit<SalaryTable, "id">;

export interface SalarySchema {
   data: Salary[];
   isLoading: boolean;
}
