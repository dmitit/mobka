import { db } from "@/shared/api/db";
import { Brigadier } from "./brigadier.model";
import { BrigadierInput } from "./brigadier.types";

export const getBrigadiers = async (): Promise<Brigadier[]> => {
   return await db.brigadiers.toArray();
};

export const addBrigadier = async (
   brigadier: BrigadierInput,
): Promise<number> => {
   return await db.brigadiers.add(brigadier);
};

export const removeBrigadierById = async (id: number): Promise<void> => {
   await db.brigadiers.delete(id);
};
