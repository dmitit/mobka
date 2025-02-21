import { RootState } from "@/app/store";

export const selectBrigadiers = (state: RootState) => state.brigadiers.data;

export const selectBrigadierById = (state: RootState, id: number) =>
   state.brigadiers.data.find((b) => b.id === id) || null;
