import { Brigadier } from "@/entities/brigadier/brigadier.model";
import { Event } from "@/entities/event/types";
import Dexie, { type EntityTable } from "dexie";

const db = new Dexie("MobkaDB") as Dexie & {
   events: EntityTable<Event, "id">;
   brigadiers: EntityTable<Brigadier, "id">;
};

db.version(1).stores({
   events: "++id, title, location, quota, start_datetime, end_datetime",
   brigadiers: "++id, fullname",
});

export { db };
