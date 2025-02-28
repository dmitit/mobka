import { RootState } from "@/app/store";

export const selectPersons = (state: RootState) => state.persons.data;

export const selectPersonById = (state: RootState, id: number) =>
   state.persons.data.find((p) => p.id === id) || null;
