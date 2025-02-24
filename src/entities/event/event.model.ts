export interface Event {
   id: number;
   title: string;
   description: string | null;
   location: string;
   quota: number;
   start_datetime: string;
   end_datetime: string;
}
