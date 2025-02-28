import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcn/popover";
import { Button } from "./shadcn/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./shadcn/calendar";
import { ru } from "date-fns/locale";

function InputDatePicker({
   date,
   onSelect,
}: {
   date?: Date;
   onSelect: (day?: Date) => void;
}) {
   const [open, setOpen] = useState<boolean>(false);

   function handleDateSelect(date?: Date) {
      onSelect(date);
      if (date) setOpen(false);
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
                  format(date, "dd.MM.yyyy", { locale: ru })
               ) : (
                  <span>Выбрать дату</span>
               )}
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-0" align="start">
            <Calendar
               mode="single"
               selected={date}
               onSelect={handleDateSelect}
            />
         </PopoverContent>
      </Popover>
   );
}

export default InputDatePicker;
