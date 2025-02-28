import { db } from "@/shared/api/db";
import { ActivistInput, ActivistTable } from "./quota.types";
import { Activist } from "./quota.model";
import { getEvents } from "../event/event.api";
import { Brigadier } from "../brigadier/brigadier.model";
import { getBrigadiers } from "../brigadier/brigadier.api";
import { Event } from "../event/event.model";

export const getActivists = async (): Promise<Activist[]> => {
   const activists: ActivistTable[] = await db.activists.toArray();
   const events: Event[] = await getEvents();
   const brigadiers: Brigadier[] = await getBrigadiers();

   const eventsMap = new Map(events.map((e) => [e.id, e]));
   const brigadiersMap = new Map(brigadiers.map((b) => [b.id, b]));

   return activists.map((activist) => ({
      ...activist,
      brigadier: brigadiersMap.get(activist.id_brigadier) || null,
      event: eventsMap.get(activist.id_event) || null,
   }));
};

export const addActivist = async (activist: ActivistInput): Promise<number> => {
   return await db.activists.add(activist);
};

export const removeActivistById = async (id: number): Promise<void> => {
   await db.activists.delete(id);
};
