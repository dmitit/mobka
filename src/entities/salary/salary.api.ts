import { db } from "@/shared/api/db";
import { Salary } from "./salary.model";
import { SalaryInput, SalaryTable } from "./salary.types";
import { Brigadier } from "../brigadier/brigadier.model";
import { getBrigadiers } from "../brigadier/brigadier.api";

export const getSalaries = async (): Promise<Salary[]> => {
   const salaries: SalaryTable[] = await db.salaries.toArray();
   const brigadiers: Brigadier[] = await getBrigadiers();

   const brigadierMap = new Map(brigadiers.map((b) => [b.id, b]));

   return salaries.map((salary) => ({
      ...salary,
      brigadier: brigadierMap.get(salary.id_brigadier) || null,
   }));
};

export const addSalary = async (salary: SalaryInput): Promise<number> => {
   return await db.salaries.add(salary);
};

export const removeSalaryById = async (id: number): Promise<void> => {
   await db.salaries.delete(id);
};
