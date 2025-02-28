import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
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
import { Label } from "@/shared/ui/shadcn/label";
import { Textarea } from "@/shared/ui/shadcn/textarea";
import { useState } from "react";
import { PersonInput } from "../person.types";
import { createPersonAsync } from "../person.slice";
import InputDatePicker from "@/shared/ui/InputDatePicker";

function PersonAddForm() {
   const dispatch = useAppDispatch();

   const [open, setOpen] = useState<boolean>(false);
   const [fullname, setFullname] = useState<string>("");
   const [description, setDescription] = useState<string>("");
   const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
   const [phone, setPhone] = useState<string>("");
   const [telegram, setTelegram] = useState<string>("");
   const [fakeOk, setFakeOk] = useState<string>("");
   const [fakePhone, setFakePhone] = useState<string>("");
   const [fakeTelegram, setFakeTelegram] = useState<string>("");
   const [fakeVk, setFakeVk] = useState<string>("");

   function handleAddPerson() {
      if (!fullname) return;

      const newPerson: PersonInput = {
         fullname: fullname,
         description: description,
         birth_date: birthDate ? birthDate.toISOString() : null,
         phone: phone,
         telegram: telegram,
         socials: {
            ok: fakeOk,
            vk: fakeVk,
            phone: fakePhone,
            telegram: fakeTelegram,
         },
      };

      dispatch(createPersonAsync(newPerson));
      setOpen(false);
   }

   return (
      <Drawer open={open} onOpenChange={setOpen}>
         <DrawerTrigger asChild>
            <Button>Добавить</Button>
         </DrawerTrigger>
         <DrawerContent>
            <DrawerHeader>
               <DrawerTitle>Пополнить базу</DrawerTitle>
               <DrawerDescription />
               <div className="grid gap-3 py-3">
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="person-fullname">ФИО*</Label>
                     <Input
                        placeholder="Введите ФИО..."
                        id="person-fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        type="text"
                     />
                  </div>
                  <div className="grid grid-cols-2 gap-x-5">
                     <div className="text-start grid w-full gap-1.5">
                        <Label htmlFor="person-phone">Телефон</Label>
                        <Input
                           placeholder="Введите номер..."
                           id="person-phone"
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                           type="text"
                        />
                     </div>
                     <div className="text-start grid w-full gap-1.5">
                        <div className="text-start grid w-full gap-1.5">
                           <Label htmlFor="person-telegram">Телеграм</Label>
                           <Input
                              placeholder="Введите @username..."
                              id="person-telegram"
                              value={telegram}
                              onChange={(e) => setTelegram(e.target.value)}
                              type="text"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="person-birth-date">Дата рождения</Label>
                     <InputDatePicker
                        date={birthDate}
                        onSelect={setBirthDate}
                     />
                  </div>
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="person-description">Описание</Label>
                     <Textarea
                        placeholder="Введите описание..."
                        id="person-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                     />
                  </div>
               </div>
               <h4 className="font-medium">Соц. сети</h4>
               <div className="grid gap-3 py-3">
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="person-fake-phone">Телефон</Label>
                     <Input
                        placeholder="Введите номер..."
                        id="person-fake-phone"
                        value={fakePhone}
                        onChange={(e) => setFakePhone(e.target.value)}
                        type="text"
                     />
                  </div>
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="person-fake-ok">OK</Label>
                     <Input
                        placeholder="Вставьте ссылку..."
                        id="person-fake-ok"
                        value={fakeOk}
                        onChange={(e) => setFakeOk(e.target.value)}
                        type="text"
                     />
                  </div>
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="person-fake-vk">VK</Label>
                     <Input
                        placeholder="Вставьте ссылку..."
                        id="person-fake-vk"
                        value={fakeVk}
                        onChange={(e) => setFakeVk(e.target.value)}
                        type="text"
                     />
                  </div>
                  <div className="text-start grid w-full gap-1.5">
                     <Label htmlFor="person-fake-telegram">Telegram</Label>
                     <Input
                        placeholder="Введите @username..."
                        id="person-fake-telegram"
                        value={fakeTelegram}
                        onChange={(e) => setFakeTelegram(e.target.value)}
                        type="text"
                     />
                  </div>
               </div>
            </DrawerHeader>
            <DrawerFooter>
               <Button onClick={handleAddPerson}>Добавить</Button>
               <DrawerClose asChild>
                  <Button variant="outline">Отмена</Button>
               </DrawerClose>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   );
}

export default PersonAddForm;
