import { Link } from "react-router";
import CoreContainer from "./CoreContainer";
import { Menu, Settings } from "lucide-react";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/shared/ui/shadcn/sheet";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/shared/ui/shadcn/dialog";
import { useState } from "react";

function CoreHeader() {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   return (
      <header className="bg-black py-[0.4rem] shadow-md">
         <CoreContainer>
            <div className="flex justify-between items-center">
               <Link
                  to={"/"}
                  className="text-white text-[1.4rem] group transition-[color] duration-300 font-medium"
               >
                  мобка
               </Link>
               <div className="flex items-center gap-4">
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                     <SheetTrigger className="text-white cursor-pointer">
                        <Menu size={24} />
                     </SheetTrigger>
                     <SheetContent className="max-w-52 pt-8">
                        <SheetHeader className="space-y-4">
                           <SheetTitle>Меню</SheetTitle>
                           <SheetDescription />
                        </SheetHeader>
                        <nav className="flex flex-col gap-3 mt-4">
                           <Link to="/" onClick={() => setIsOpen(false)}>
                              Главная
                           </Link>
                           <Link
                              to="/brigadiers"
                              onClick={() => setIsOpen(false)}
                           >
                              Бригадиры
                           </Link>
                           <Link to="/events" onClick={() => setIsOpen(false)}>
                              Мероприятия
                           </Link>
                           <Link
                              to="/salaries"
                              onClick={() => setIsOpen(false)}
                           >
                              Зарплаты
                           </Link>
                           <Link
                              to="/activists"
                              onClick={() => setIsOpen(false)}
                           >
                              Активисты
                           </Link>
                        </nav>
                     </SheetContent>
                  </Sheet>
                  <Dialog>
                     <DialogTrigger className="text-white cursor-pointer">
                        <Settings size={22} />
                     </DialogTrigger>
                     <DialogContent>
                        <DialogHeader>
                           <DialogTitle>Are you absolutely sure?</DialogTitle>
                           <DialogDescription>
                              This action cannot be undone. This will
                              permanently delete your account and remove your
                              data from our servers.
                           </DialogDescription>
                        </DialogHeader>
                     </DialogContent>
                  </Dialog>
               </div>
            </div>
         </CoreContainer>
      </header>
   );
}

export default CoreHeader;
