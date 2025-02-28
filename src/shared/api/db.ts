// import { ActivistTable } from "@/entities/activist/activist.types";
import { BrigadierTable } from "@/entities/brigadier/brigadier.types";
import { EventTable } from "@/entities/event/event.types";
import { PersonTable } from "@/entities/person/person.types";
import { SalaryTable } from "@/entities/salary/salary.types";
import Dexie, { type EntityTable } from "dexie";

const db = new Dexie("MobkaDB") as Dexie & {
   events: EntityTable<EventTable, "id">;
   brigadiers: EntityTable<BrigadierTable, "id">;
   salaries: EntityTable<SalaryTable, "id">;
   persons: EntityTable<PersonTable, "id">;
   // activists: EntityTable<ActivistTable, "id">;
};

db.version(1).stores({
   events:
      "++id, title, description, location, quota, start_datetime, end_datetime",
   brigadiers: "++id, fullname",
   salaries: "++id, date, id_brigadier, amount",
   persons: "++id, fullname, description, birth_date, phone, telegram, socials",
   // quota: "++id, id_person, id_brigadier, id_event, payment",
});

export { db };
