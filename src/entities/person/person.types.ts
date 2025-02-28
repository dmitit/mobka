import { Person } from "./person.model";

export interface PersonTable {
   id: number;
   fullname: string;
   description: string;
   birth_date: string;
   phone: string;
   telegram: string;
   socials: Socials;
}

export type PersonInput = Omit<PersonTable, "id">;

export interface PersonSchema {
   data: Person[];
   isLoading: boolean;
}

export interface Socials {
   vk: string;
   ok: string;
   telegram: string;
   phone: string;
}
