import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Salary } from "../salary.model";
import { TableCell, TableRow } from "@/shared/ui/shadcn/table";
import { Button } from "@/shared/ui/shadcn/button";
import { deleteSalaryAsync } from "../salary.slice";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

function SalaryRow({ salary, index }: { salary: Salary; index: number }) {
   const dispatch = useAppDispatch();

   async function handleDeleteSalary() {
      try {
         await dispatch(deleteSalaryAsync(salary.id));
         toast.success("Зарплата удалена");
      } catch (error: unknown) {
         if (typeof error === "string") {
            toast.error(error);
         } else {
            toast.error("Произошла неизвестная ошибка");
         }
      }
   }

   return (
      <TableRow className="hover:bg-gray-100">
         <TableCell>{index + 1}</TableCell>
         <TableCell className="w-auto">
            {format(salary.date, "d.L.y")}
         </TableCell>
         <TableCell>{salary.brigadier?.fullname}</TableCell>
         <TableCell>{salary.amount}</TableCell>
         <TableCell>
            <Button
               onClick={handleDeleteSalary}
               className="px-2 py-1 h-auto text-xs"
               variant={"destructive"}
            >
               <Trash2 />
            </Button>
         </TableCell>
      </TableRow>
   );
}

export default SalaryRow;
