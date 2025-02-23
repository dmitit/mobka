import { BrigadierTable } from "@/entities/brigadier/brigadier.types";
import { Event } from "@/entities/event/types";
import { SalaryTable } from "@/entities/salary/salary.types";
import Dexie, { type EntityTable } from "dexie";

const db = new Dexie("MobkaDB") as Dexie & {
   events: EntityTable<Event, "id">;
   brigadiers: EntityTable<BrigadierTable, "id">;
   salaries: EntityTable<SalaryTable, "id">;
};

db.version(1).stores({
   events: "++id, title, location, quota, start_datetime, end_datetime",
   brigadiers: "++id, fullname",
   salaries: "++id, date, id_brigadier, amount",
});

export { db };
