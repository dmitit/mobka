import { db } from "@/shared/api/db";
import { ActivistInput } from "./activist.types";

export const addActivist = async (activist: ActivistInput): Promise<number> => {
   return await db.activists.add(activist);
};
