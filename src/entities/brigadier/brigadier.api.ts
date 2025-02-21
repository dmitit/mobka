import { db } from "@/shared/api/db";
import { Brigadier } from "./brigadier.model";

export const getBrigadiers = async (): Promise<Brigadier[]> => {
   return db.brigadiers.toArray();
};

export const addBrigadier = async (fullname: string): Promise<number> => {
   return db.brigadiers.add({ fullname });
};

export const removeBrigadierById = async (id: number): Promise<void> => {
   await db.brigadiers.delete(id);
};
