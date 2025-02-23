import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Salary } from "../salary.model";
import { TableCell, TableRow } from "@/shared/ui/shadcn/table";
import { Button } from "@/shared/ui/shadcn/button";
import { deleteSalaryAsync } from "../salary.slice";
import { format } from "date-fns";

function SalaryRow({ salary, index }: { salary: Salary; index: number }) {
   const dispatch = useAppDispatch();

   async function handleDeleteSalary() {
      await dispatch(deleteSalaryAsync(salary.id));
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
               className="px-3 py-0.5"
               variant={"destructive"}
            >
               Удалить
            </Button>
         </TableCell>
      </TableRow>
   );
}

export default SalaryRow;
