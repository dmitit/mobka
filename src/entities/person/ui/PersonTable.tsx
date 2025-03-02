import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectPersons } from "../person.selectors";
import { DataTable } from "@/shared/ui/shadcn/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Person } from "../person.model";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export default function PersonTable() {
   const persons = useAppSelector(selectPersons);

   const columns: ColumnDef<Person>[] = [
      {
         accessorKey: "fullname",
         accessorFn: (row) => row.fullname || "-",
         header: "ФИО",
      },
      {
         accessorKey: "description",
         accessorFn: (row) => row.description || "-",
         header: "Описание",
      },
      {
         accessorKey: "birth_date",
         header: "Дата рождения",
         cell: ({ row }) => {
            const date = row.original.birth_date;
            return date ? format(date, "dd.MM.yyyy", { locale: ru }) : "-";
         },
      },
      {
         accessorKey: "phone",
         accessorFn: (row) => row.phone || "-",
         header: "Телефон",
      },
      {
         accessorKey: "telegram",
         accessorFn: (row) => row.telegram || "-",
         header: "Telegram",
      },
      {
         accessorKey: "socials.vk",
         accessorFn: (row) => row.socials.vk || "-",
         header: "VK",
      },
      {
         accessorKey: "socials.ok",
         accessorFn: (row) => row.socials.ok || "-",
         header: "OK",
      },
      {
         accessorKey: "socials.telegram",
         accessorFn: (row) => row.socials.telegram || "-",
         header: "TG соц.сеть",
      },
      {
         accessorKey: "socials.phone",
         accessorFn: (row) => row.socials.phone || "-",
         header: "Телефон соц.сеть",
      },
   ];

   return <DataTable columns={columns} data={persons} />;
}
