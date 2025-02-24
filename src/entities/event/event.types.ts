import { Event } from "./event.model";

export interface EventTable {
   id: number;
   title: string;
   description: string | null;
   location: string;
   quota: number;
   start_datetime: string;
   end_datetime: string;
}

export type EventInput = Omit<EventTable, "id">;

export interface EventSchema {
   data: Event[];
   isLoading: boolean;
   error: string | null;
}
