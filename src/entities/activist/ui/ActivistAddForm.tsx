import { Brigadier } from "@/entities/brigadier/brigadier.model";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useState } from "react";
import { ActivistInput } from "../activist.types";
import { Event } from "@/entities/event/event.model";
import { createActivistAsync } from "../activist.slice";
import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/shared/ui/shadcn/drawer";
import { Button } from "@/shared/ui/shadcn/button";
import { Input } from "@/shared/ui/shadcn/input";
import { Label } from "@/shared/ui/shadcn/label";
import { Textarea } from "@/shared/ui/shadcn/textarea";
import BrigadierCombobox from "@/entities/brigadier/ui/BrigadierCombobox";
import EventCombobox from "@/entities/event/ui/EventCombobox";

function ActitivstAddForm() {
   const dispatch = useAppDispatch();

   const [open, setOpen] = useState<boolean>(false);
   const [fullname, setFullname] = useState<string>("");
   const [description, setDescription] = useState<string>("");
   const [payment, setPayment] = useState<string>("");
   const [selectedBrigadier, setSelectedBrigadier] = useState<Brigadier | null>(
      null,
   );
   const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

   async function handleAddActivist() {
      if (!selectedEvent || !selectedBrigadier) return;

      const newActivist: ActivistInput = {
         fullname: fullname,
         description: description,
         payment: Number(payment),
         id_event: selectedEvent.id,
         id_brigadier: selectedBrigadier.id,
      };

      dispatch(createActivistAsync(newActivist));
      setOpen(false);
   }

   return (
      <Drawer open={open} onOpenChange={setOpen}>
         <DrawerTrigger asChild>
            <Button>Добавить</Button>
         </DrawerTrigger>
         <DrawerContent>
            <DrawerHeader>
               <DrawerTitle>Добавить активиста</DrawerTitle>
               <DrawerDescription />
               <div className="grid gap-3">
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="activist-fullname">ФИО*</Label>
                     <Input
                        placeholder="Введите ФИО..."
                        id="activist-fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        type="text"
                     />
                  </div>
                  <div className="grid grid-cols-2 gap-x-5">
                     <BrigadierCombobox
                        brigadier={selectedBrigadier}
                        onSelect={setSelectedBrigadier}
                     />
                     <EventCombobox
                        event={selectedEvent}
                        onSelect={setSelectedEvent}
                     />
                  </div>
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="event-quota">Оплата</Label>
                     <Input
                        placeholder="0"
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)}
                        type="number"
                     />
                  </div>
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="event-description">Описание</Label>
                     <Textarea
                        placeholder="Введите описание..."
                        id="event-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                     />
                  </div>
               </div>
            </DrawerHeader>
            <DrawerFooter>
               <Button onClick={handleAddActivist}>Добавить</Button>
               <DrawerClose asChild>
                  <Button variant="outline">Отмена</Button>
               </DrawerClose>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   );
}

export default ActitivstAddForm;
