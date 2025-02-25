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
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { createBrigadierAsync, fetchBrigadiersAsync } from "../brigadier.slice";

function BrigadierAddDrawer() {
   const [open, setOpen] = useState<boolean>(false);
   const [fullname, setFullname] = useState<string>("");
   const dispatch = useAppDispatch();

   async function handleAddBrigadier() {
      dispatch(createBrigadierAsync({ fullname }));
      setFullname("");
      setOpen(false);
      dispatch(fetchBrigadiersAsync());
   }

   return (
      <Drawer open={open} onOpenChange={setOpen}>
         <DrawerTrigger asChild>
            <Button>Добавить</Button>
         </DrawerTrigger>
         <DrawerContent>
            <DrawerHeader>
               <DrawerTitle>Добавить координатора</DrawerTitle>
               <DrawerDescription />
               <Input
                  className="mt-2"
                  placeholder="ФИО"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
               />
            </DrawerHeader>
            <DrawerFooter>
               <Button onClick={handleAddBrigadier}>Добавить</Button>
               <DrawerClose asChild>
                  <Button variant="outline">Отмена</Button>
               </DrawerClose>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   );
}

export default BrigadierAddDrawer;
