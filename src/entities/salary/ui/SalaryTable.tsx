import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectSalaries } from "../salary.selectors";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchSalariesAsync } from "../salary.slice";
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/shared/ui/shadcn/table";
import SalaryRow from "./SalaryRow";

function SalaryTable() {
   const dispatch = useAppDispatch();
   const salaries = useAppSelector(selectSalaries);

   useEffect(() => {
      dispatch(fetchSalariesAsync());
   }, [dispatch]);

   return (
      <>
         <div>
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead>ID</TableHead>
                     <TableHead>Дата</TableHead>
                     <TableHead>Координатор</TableHead>
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
