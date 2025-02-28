import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcn/popover";
import { Button } from "./shadcn/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./shadcn/calendar";
import { Input } from "./shadcn/input";
import { ru } from "date-fns/locale";

function InputDatetimePicker({
   date,
   onSelect,
}: {
   date?: Date;
   onSelect: (day?: Date) => void;
}) {
   const [open, setOpen] = useState<boolean>(false);

   function handleDateSelect(date?: Date) {
      onSelect(date);
   }

   function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (!date) return;
      const datetime = e.target.value;

      const [hours, minutes] = datetime.split(":").map(Number);
      const newDate = new Date(date);
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      onSelect(newDate);
   }

   function handleSubmit() {
      if (!date) return;

      setOpen(false);
   }

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild>
            <Button
               variant={"outline"}
               className={cn(
                  "justify-start text-left font-normal",
                  !date && "text-muted-foreground",
               )}
            >
               <CalendarIcon />
               {date ? (
                  format(date, "dd.MM.yyyy HH:mm")
               ) : (
                  <span>Pick a date</span>
               )}
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-0" align="start">
            <div className="flex flex-col gap-2 p-3">
               <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
               />
               <div className="flex items-center gap-2">
                  <Input
                     type="time"
                     value={date ? format(date, "HH:mm", { locale: ru }) : ""}
                     onChange={handleTimeChange}
                     disabled={!date}
                  />
               </div>
               <Button onClick={handleSubmit}>Применить</Button>
            </div>
         </PopoverContent>
      </Popover>
   );
}

export default InputDatetimePicker;
