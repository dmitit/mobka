import { Person } from "./person.model";
import { z } from "zod";

export const personSchema = z.object({
   fullname: z.string().min(5, "Не меньше 5 символов"),
   description: z.string(),
   birth_date: z.coerce
      .date()
      .min(new Date("1900-01-01"), "Дата не может быть раньше 1900 года")
      .max(new Date("2099-12-31"), "Дата не может быть позже 2099 года")
      .optional(),
   phone: z.string(),
   telegram: z.string(),
   socials: z.object({
      vk: z.string(),
      ok: z.string(),
      telegram: z.string(),
      phone: z.string(),
   }),
});

export type PersonInput = z.infer<typeof personSchema>;

export interface PersonTable {
   id: number;
   fullname: string;
   description: string;
   birth_date?: Date;
   phone: string;
   telegram: string;
   socials: {
      vk: string;
      ok: string;
      telegram: string;
      phone: string;
   };
}

export interface PersonSchema {
   data: Person[];
   isLoading: boolean;
}
