import { Socials } from "./person.types";

export interface Person {
   id: number;
   fullname: string;
   description: string | null;
   birth_date: string | null;
   phone: string | null;
   telegram: string | null;
   socials: Socials;
}
