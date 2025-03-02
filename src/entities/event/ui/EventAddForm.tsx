import { Button } from "@/shared/ui/shadcn/button";
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
import { useState } from "react";
import { EventInput } from "../event.types";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { createEventAsync } from "../event.slice";
import { Input } from "@/shared/ui/shadcn/input";
import { Label } from "@/shared/ui/shadcn/label";
import { Textarea } from "@/shared/ui/shadcn/textarea";

function EventAddForm() {
   const dispatch = useAppDispatch();

   const [open, setOpen] = useState<boolean>(false);
   const [title, setTitle] = useState<string>("");
   const [location, setLocation] = useState<string>("");
   const [quota, setQuota] = useState<string>("");
   const [description, setDescription] = useState<string>("");
   const [startDatetime, setStartDatetime] = useState<Date | undefined>(
      new Date(),
   );
   const [endDatetime, setEndDatetime] = useState<Date | undefined>(new Date());

   function handleAddEvent() {
      if (!title || !location || !quota || !startDatetime || !endDatetime)
         return;

      const newEvent: EventInput = {
         title: title,
         description: description,
         location: location,
         quota: Number(quota),
         start_datetime: startDatetime.toISOString(),
         end_datetime: endDatetime.toISOString(),
      };

      dispatch(createEventAsync(newEvent));
      setOpen(false);
   }

   return (
      <Drawer open={open} onOpenChange={setOpen}>
         <DrawerTrigger asChild>
            <Button>Добавить</Button>
         </DrawerTrigger>
         <DrawerContent>
            <DrawerHeader>
               <DrawerTitle>Добавить мероприятие</DrawerTitle>
               <DrawerDescription />
               <div className="grid gap-3">
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="event-title">Заголовок*</Label>
                     <Input
                        placeholder="Введите заголовок..."
                        id="event-title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                     />
                  </div>
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="event-location">Локация*</Label>
                     <Input
                        placeholder="Введите место проведения..."
                        id="event-location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        type="text"
                     />
                  </div>

                  <div className="grid grid-cols-2 gap-x-5">
                     {/* <div className="text-start grid w-full gap-1.5">
                        <Label htmlFor="event-quota">Время начала*</Label>
                        <InputDatetimePicker
                           date={startDatetime}
                           onSelect={setStartDatetime}
                        />
                     </div>
                     <div className="text-start grid w-full gap-1.5">
                        <Label htmlFor="event-quota">Время окончания*</Label>
                        <InputDatetimePicker
                           date={endDatetime}
                           onSelect={setEndDatetime}
                        />
                     </div> */}
                  </div>
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="event-quota">Квота*</Label>
                     <Input
                        placeholder="Квота"
                        value={quota}
                        onChange={(e) => setQuota(e.target.value)}
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
               <Button onClick={handleAddEvent}>Добавить</Button>
               <DrawerClose asChild>
                  <Button variant="outline">Отмена</Button>
               </DrawerClose>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   );
}

export default EventAddForm;
