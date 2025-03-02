import { Button } from "@/shared/ui/shadcn/button";
import { Input } from "@/shared/ui/shadcn/input";
import { Textarea } from "@/shared/ui/shadcn/textarea";
import { PersonInput, personSchema } from "../person.types";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/shared/ui/shadcn/form";
import { DateField } from "@mui/x-date-pickers/DateField";

interface PersonFormProps {
   onSubmit: (values: PersonInput) => void;
   onInvalid: (errors: FieldErrors<PersonInput>) => void;
   initialPerson?: PersonInput;
}

export default function PersonForm({
   onSubmit,
   onInvalid,
   initialPerson,
}: PersonFormProps) {
   const form = useForm<PersonInput>({
      resolver: zodResolver(personSchema),
      defaultValues: initialPerson || {
         fullname: "",
         description: "",
         birth_date: null,
         phone: "",
         telegram: "",
         socials: {
            vk: "",
            ok: "",
            telegram: "",
            phone: "",
         },
      },
   });

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
            <div className="text-left grid gap-2">
               <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>ФИО*</FormLabel>
                        <FormControl>
                           <Input
                              placeholder="Введите ФИО..."
                              type="text"
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <div className="grid grid-cols-2 gap-x-5">
                  <FormField
                     control={form.control}
                     name="phone"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Телефон</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="Введите номер..."
                                 type="text"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="telegram"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Телеграм</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="Введите @username..."
                                 type="text"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>
               <FormField
                  control={form.control}
                  name="birth_date"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Дата рождения</FormLabel>
                        <FormControl>
                           <DateField
                              className=""
                              size="small"
                              format="dd.MM.yyyy"
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Описание</FormLabel>
                        <FormControl>
                           <Textarea
                              placeholder="Введите описание..."
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
            <h4 className="font-medium text-center mt-4">Фейки</h4>
            <div className="text-left grid gap-5">
               <div className="grid gap-2">
                  <FormField
                     control={form.control}
                     name="socials.phone"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Телефон</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="Введите номер..."
                                 type="text"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="socials.telegram"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Телеграм</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="Введите @username..."
                                 type="text"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="socials.vk"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>VK</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="Вставьте ссылку..."
                                 type="text"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="socials.ok"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>OK</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="Вставьте ссылку..."
                                 type="text"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>
               <Button type="submit">Добавить</Button>
            </div>
         </form>
      </Form>
   );
}
