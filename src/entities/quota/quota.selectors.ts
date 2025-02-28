import { RootState } from "@/app/store";

export const selectActivists = (state: RootState) => state.activists.data;

export const selectActivistById = (state: RootState, id: number) =>
   state.activists.data.find((a) => a.id === id) || null;
