import { db } from "@/shared/api/db";
import { Event } from "./event.model";
import { EventInput } from "./event.types";

export const getEvents = async (): Promise<Event[]> => {
   return await db.events.toArray();
};

export const addEvent = async (event: EventInput): Promise<number> => {
   return await db.events.add(event);
};

export const removeEventById = async (id: number): Promise<void> => {
   await db.events.delete(id);
};
