import { RootState } from "@/app/store";

export const selectEvents = (state: RootState) => state.events.data;

export const selectEventById = (state: RootState, id: number) =>
   state.events.data.find((e) => e.id === id) || null;
