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
import { Calendar, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

function EventCard({ event }: { event: Event }) {
   return (
      <DrawerContent className="p-6 space-y-4">
         <DrawerHeader className="space-y-2">
            <DrawerTitle className="text-xl font-semibold">
               {event.title}
            </DrawerTitle>
            {event.description && (
               <DrawerDescription>{event.description}</DrawerDescription>
            )}
         </DrawerHeader>

         <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
               <Calendar className="w-5 h-5" />
               <span>
                  {format(event.start_datetime, "d MMMM yyyy", { locale: ru })}—{" "}
                  {format(event.end_datetime, "d MMMM yyyy", { locale: ru })}
               </span>
            </div>

            <div className="flex items-center gap-2">
               <MapPin className="w-5 h-5" />
               <span className="font-medium">{event.location}</span>
            </div>

            <div className="flex items-center gap-2">
               <Users className="w-5 h-5" />
               <span>
                  Макс. участников: <strong>{event.quota}</strong>
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
