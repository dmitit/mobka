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
import { Input } from "@/shared/ui/shadcn/input";
import { useState } from "react";
import BrigadiersCombobox from "../../brigadier/ui/BrigadierCombobox";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { createSalaryAsync } from "../salary.slice";
import { SalaryInput } from "../salary.types";
import { Brigadier } from "@/entities/brigadier/brigadier.model";

function SalaryAddForm() {
   const [open, setOpen] = useState<boolean>(false);
   const [amount, setAmount] = useState<string>("");
   const [selectedBrigadier, setSelectedBrigadier] = useState<Brigadier | null>(
      null,
   );
   const [selectedDate, setSelectedDate] = useState<Date>();
   const dispatch = useAppDispatch();

   async function handleAddSalary() {
      if (!selectedDate || !selectedBrigadier) return;

      const newSalary: SalaryInput = {
         date: selectedDate.toISOString(),
         id_brigadier: selectedBrigadier.id,
         amount: Number(amount),
      };

      dispatch(createSalaryAsync(newSalary));
      setOpen(false);
   }

   return (
      <Drawer open={open} onOpenChange={setOpen}>
         <DrawerTrigger asChild>
            <Button>Добавить</Button>
         </DrawerTrigger>
         <DrawerContent>
            <DrawerHeader>
               <DrawerTitle>Добавить зарплату</DrawerTitle>
               <DrawerDescription />
               <div className="grid grid-cols-2 gap-x-5">
                  <BrigadiersCombobox
                     brigadier={selectedBrigadier}
                     onSelect={setSelectedBrigadier}
                  />
                  {/* <InputDatePicker
                     date={selectedDate}
                     onSelect={setSelectedDate}
                  /> */}
               </div>
               <Input
                  className="mt-2"
                  placeholder="Сумма"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
               />
            </DrawerHeader>
            <DrawerFooter>
               <Button onClick={handleAddSalary}>Добавить</Button>
               <DrawerClose asChild>
                  <Button variant="outline">Отмена</Button>
               </DrawerClose>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   );
}

export default SalaryAddForm;
