import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Event } from "../event.model";
import { TableCell, TableRow } from "@/shared/ui/shadcn/table";
import { Button } from "@/shared/ui/shadcn/button";
import { Trash2 } from "lucide-react";
import { format } from "date-fns";
import { Drawer, DrawerTrigger } from "@/shared/ui/shadcn/drawer";
import { useState } from "react";
import EventCard from "./EventCard";
import { deleteEventAsync } from "../event.slice";
import { toast } from "sonner";

function EventRow({ event, index }: { event: Event; index: number }) {
   const dispatch = useAppDispatch();
   const [open, setOpen] = useState<boolean>(false);

   async function handleDeleteEvent() {
      try {
         await dispatch(deleteEventAsync(event.id));
         toast.success("Мероприятие удалено");
      } catch (error: unknown) {
         if (typeof error === "string") {
            toast.error(error);
         } else {
            toast.error("Произошла неизвестная ошибка");
         }
      }
   }

   const period = `${format(event.start_datetime, "d.L.y")}-${format(event.end_datetime, "d.L.y")}`;

   return (
      <TableRow className="hover:bg-gray-100">
         <TableCell>{index + 1}</TableCell>
         <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
               <TableCell className="underline underline-offset-2 cursor-pointer">
                  {event.title}
               </TableCell>
            </DrawerTrigger>
            <EventCard event={event} />
         </Drawer>
         <TableCell>{period}</TableCell>
         <TableCell>{event.quota}</TableCell>
         <TableCell>
            <Button
               onClick={handleDeleteEvent}
               className="px-2 py-1 h-auto text-xs"
               variant={"destructive"}
            >
               <Trash2 />
            </Button>
         </TableCell>
      </TableRow>
   );
}

export default EventRow;
