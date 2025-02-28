import { Brigadier } from "../brigadier/brigadier.model";
import { Event } from "../event/event.model";

export interface Activist {
   id: number;
   fullname: string;
   description: string;
   payment: number;
   brigadier: Brigadier | null;
   event: Event | null;
}
