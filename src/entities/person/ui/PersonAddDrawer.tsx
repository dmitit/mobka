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
import PersonForm from "./PersonForm";
import { PersonInput, personSchema } from "../person.types";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { createPersonAsync } from "../person.slice";
import { FieldErrors } from "react-hook-form";

export default function PersonAddDrawer() {
   const dispatch = useAppDispatch();

   const [open, setOpen] = useState<boolean>(false);

   function handlePersonSubmit(values: PersonInput) {
      try {
         const person = personSchema.parse(values);
         dispatch(createPersonAsync(person));
         setOpen(false);
      } catch (error) {
         console.error("Failed to add person:", error);
      }
   }

   function handleInvalidSubmit(errors: FieldErrors<PersonInput>) {
      console.log("Form errors:", errors);
   }

   return (
      <Drawer open={open} onOpenChange={setOpen}>
         <DrawerTrigger asChild>
            <Button>Добавить</Button>
         </DrawerTrigger>
         <DrawerContent>
            <DrawerHeader className="pb-2">
               <DrawerTitle>Пополнить базу</DrawerTitle>
               <DrawerDescription />
            </DrawerHeader>
            <div className="px-4">
               <PersonForm
                  onSubmit={handlePersonSubmit}
                  onInvalid={handleInvalidSubmit}
               />
            </div>
            <DrawerFooter className="pt-2">
               <DrawerClose asChild>
                  <Button variant="outline">Отмена</Button>
               </DrawerClose>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   );
}
