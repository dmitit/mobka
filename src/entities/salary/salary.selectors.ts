import { RootState } from "@/app/store";

export const selectSalaries = (state: RootState) => state.salaries.data;

export const selectSalaryById = (state: RootState, id: number) =>
   state.brigadiers.data.find((b) => b.id === id) || null;

export const selectSalariesByBrigadierId = (state: RootState, id: number) =>
   state.salaries.data.filter((s) => s.brigadier?.id === id);
