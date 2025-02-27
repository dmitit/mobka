import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Event } from "../event.model";
import { selectEvents } from "../event.selectors";
import { useState } from "react";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/shared/ui/shadcn/popover";
import { Button } from "@/shared/ui/shadcn/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from "@/shared/ui/shadcn/command";
import { cn } from "@/lib/utils";

function EventsCombobox({
   onSelect,
   event,
}: {
   onSelect: (event: Event) => void;
   event: Event | null;
}) {
   const events = useAppSelector(selectEvents);

   const [open, setOpen] = useState<boolean>(false);

   function handleEventSelection(value: string) {
      const selectedId = Number(value);
      const selected = events.find((b) => b.id === selectedId);

      if (!selected) return;

      onSelect(selected);
      setOpen(false);
   }

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild>
            <Button
               variant="outline"
               role="combobox"
               aria-expanded={open}
               className="justify-between"
            >
               <span className="truncate">
                  {event ? event.title : "Выбрать мероприятие"}
               </span>
               <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-52 p-0">
            <Command>
               <CommandInput placeholder="Искать мероприятие..." />
               <CommandList>
                  <CommandEmpty>Мероприятие не найдено</CommandEmpty>
                  <CommandGroup>
                     {events.map((e) => (
                        <CommandItem
                           key={e.id}
                           value={e.id.toString()}
                           keywords={[e.title]}
                           onSelect={handleEventSelection}
                        >
                           <Check
                              className={cn(
                                 "mr-2 h-4 w-4",
                                 event?.id === e.id
                                    ? "opacity-100"
                                    : "opacity-0",
                              )}
                           />
                           {e.title}
                        </CommandItem>
                     ))}
                  </CommandGroup>
               </CommandList>
            </Command>
         </PopoverContent>
      </Popover>
   );
}

export default EventsCombobox;
