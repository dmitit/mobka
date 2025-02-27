import { Brigadier } from "@/entities/brigadier/brigadier.model";
import { selectBrigadiers } from "@/entities/brigadier/brigadier.selectors";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Button } from "@/shared/ui/shadcn/button";
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from "@/shared/ui/shadcn/command";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/shared/ui/shadcn/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

function BrigadiersCombobox({
   onSelect,
   brigadier,
}: {
   onSelect: (brigadier: Brigadier) => void;
   brigadier: Brigadier | null;
}) {
   const brigadiers = useAppSelector(selectBrigadiers);

   const [open, setOpen] = useState<boolean>(false);

   function handleBrigadierSelection(value: string) {
      const selectedId = Number(value);
      const selected = brigadiers.find((b) => b.id === selectedId);

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
                  {brigadier ? brigadier.fullname : "Выбрать бригадира"}
               </span>
               <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-52 p-0">
            <Command>
               <CommandInput placeholder="Искать бригадира..." />
               <CommandList>
                  <CommandEmpty>Бригадир не найден</CommandEmpty>
                  <CommandGroup>
                     {brigadiers.map((b) => (
                        <CommandItem
                           key={b.id}
                           value={b.id.toString()}
                           keywords={[b.fullname]}
                           onSelect={handleBrigadierSelection}
                        >
                           <Check
                              className={cn(
                                 "mr-2 h-4 w-4",
                                 brigadier?.id === b.id
                                    ? "opacity-100"
                                    : "opacity-0",
                              )}
                           />
                           {b.fullname}
                        </CommandItem>
                     ))}
                  </CommandGroup>
               </CommandList>
            </Command>
         </PopoverContent>
      </Popover>
   );
}

export default BrigadiersCombobox;
