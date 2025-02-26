import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/shared/ui/shadcn/table";
import BrigadierRow from "./BrigadierRow";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectBrigadiers } from "../brigadier.selectors";

function BrigadierTable() {
   const brigadiers = useAppSelector(selectBrigadiers);

   return (
      <>
         <div>
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead>ID</TableHead>
                     <TableHead className="w-full">ФИО</TableHead>
                     <TableHead></TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {brigadiers.map((brigadier, index) => (
                     <BrigadierRow
                        key={brigadier.id}
                        brigadier={brigadier}
                        index={index}
                     />
                  ))}
               </TableBody>
            </Table>
         </div>
      </>
   );
}

export default BrigadierTable;
