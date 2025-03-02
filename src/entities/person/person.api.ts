import { db } from "@/shared/api/db";
import { PersonInput } from "./person.types";
import { Person } from "./person.model";

export const getPersons = async (): Promise<Person[]> => {
   return await db.persons.toArray();
};

export const addPerson = async (person: PersonInput): Promise<number> => {
   console.log(person);
   return await db.persons.add(person);
};

export const removePersonById = async (id: number): Promise<void> => {
   await db.persons.delete(id);
};
