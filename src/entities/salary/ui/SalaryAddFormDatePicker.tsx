import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/shadcn/button";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/shared/ui/shadcn/popover";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/shared/ui/shadcn/calendar";

function SalaryAddFormDatePicker({
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

// function SalaryAddFormDatePicker({
//    onSelect,
// }: {
//    onSelect: (day: Date) => void;
// }) {
//    const [date, setDate] = useState<Date>();
//    console.log(date)
//    const [open, setOpen] = useState<boolean>(false);

//    function handleSelectDate(day: Date | undefined) {
//       console.log(day);
//       if (!day) return;
//       setDate(day);
//       onSelect(day);
//       setOpen(false);
//    }

//    return (
//       <Popover open={open} onOpenChange={setOpen} modal={true}>
//          <PopoverTrigger asChild>
//             <Button
//                variant={"outline"}
//                className={cn(
//                   "justify-start text-left font-normal",
//                   !date && "text-muted-foreground",
//                )}
//             >
//                <CalendarIcon />
//                {date ? format(date, "PPP") : <span>Pick a date</span>}
//             </Button>
//          </PopoverTrigger>
//          <PopoverContent className="w-auto p-0" align="start">
//             <Calendar
//                mode="single"
//                selected={date}
//                onSelect={setDate}
//                initialFocus
//             />
//          </PopoverContent>
//       </Popover>
//    );
// }

export default SalaryAddFormDatePicker;
