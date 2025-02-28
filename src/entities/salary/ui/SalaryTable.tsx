import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectSalaries } from "../salary.selectors";
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/shared/ui/shadcn/table";
import SalaryRow from "./SalaryRow";

function SalaryTable() {
   const salaries = useAppSelector(selectSalaries);
   console.log(salaries);

   return (
      <>
         <div>
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead>ID</TableHead>
                     <TableHead>Дата</TableHead>
                     <TableHead>Бригадир</TableHead>
                     <TableHead>Сумма</TableHead>
                     <TableHead></TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {salaries.map((salary, index) => (
                     <SalaryRow key={salary.id} salary={salary} index={index} />
                  ))}
               </TableBody>
            </Table>
         </div>
      </>
   );
}

export default SalaryTable;
