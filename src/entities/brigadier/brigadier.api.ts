import { db } from "@/shared/api/db";
import { BrigadierTable } from "./brigadier.types";

export const getBrigadiers = async (): Promise<BrigadierTable[]> => {
   return db.brigadiers.toArray();
};

export const addBrigadier = async (fullname: string): Promise<number> => {
   return db.brigadiers.add({ fullname });
};

export const removeBrigadierById = async (id: number): Promise<void> => {
   await db.brigadiers.delete(id);
};
