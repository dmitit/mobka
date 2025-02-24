import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/shadcn/button";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/shared/ui/shadcn/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/shared/ui/shadcn/calendar";
import { useState } from "react";
import { format } from "date-fns";

function EventAddFormDateTimePicker() {
   const [open, setOpen] = useState<boolean>(false);
   const [date, setDate] = useState<Date | undefined>(new Date());

   function handleDateSelect(date?: Date) {
      setDate(date);
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
               {date ? format(date, "PPP") : <span>Pick a date</span>}
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

export default EventAddFormDateTimePicker;
