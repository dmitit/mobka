import { Button } from "@/shared/ui/shadcn/button";
import {
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
} from "@/shared/ui/shadcn/drawer";
import { Event } from "../event.model";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { calculateDuration } from "@/lib/dates";

function EventCard({ event }: { event: Event }) {
   const startDate = new Date(event.start_datetime);
   const endDate = new Date(event.end_datetime);

   return (
      <DrawerContent className="p-6 space-y-4">
         <DrawerHeader className="space-y-2">
            <DrawerTitle className="text-xl font-semibold">
               {event.title}
            </DrawerTitle>
            <DrawerDescription>{event.description}</DrawerDescription>
         </DrawerHeader>

         <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
               <Calendar className="w-5 h-5" />
               <div className="flex flex-col">
                  <span>
                     <strong className="font-medium">Начало: </strong>
                     {format(startDate, "d MMMM yyyy, HH:mm", {
                        locale: ru,
                     })}
                  </span>
                  <span>
                     <strong className="font-medium">Окончание: </strong>
                     {format(endDate, "d MMMM yyyy, HH:mm", { locale: ru })}
                  </span>
               </div>
            </div>

            <div className="flex items-center gap-2">
               <MapPin className="w-5 h-5" />
               <span>
                  <strong className="font-medium">Место: </strong>
                  {event.location}
               </span>
            </div>

            <div className="flex items-center gap-2">
               <Clock className="w-5 h-5" />
               <span>
                  <strong className="font-medium">Продолжительность: </strong>
                  {calculateDuration(event.start_datetime, event.end_datetime)}
               </span>
            </div>

            <div className="flex items-center gap-2">
               <Users className="w-5 h-5" />
               <span>
                  <strong className="font-medium">Квота: </strong>
                  {event.quota}
               </span>
            </div>
         </div>

         <DrawerFooter className="mt-4">
            <DrawerClose asChild>
               <Button variant="outline" className="w-full">
                  Закрыть
               </Button>
            </DrawerClose>
         </DrawerFooter>
      </DrawerContent>
   );
}

export default EventCard;
