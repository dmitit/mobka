import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectActivists } from "../quota.selectors";
import { useEffect } from "react";
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/shared/ui/shadcn/table";

function ActivistTable() {
   const activists = useAppSelector(selectActivists);

   return (
      <>
         <div>
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead>ID</TableHead>
                     <TableHead>Fullname</TableHead>
                     <TableHead>Amount Events</TableHead>
                     <TableHead>Event</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {activists.map((activist, index) => (
                     <div>{activist.fullname}</div>
                  ))}
               </TableBody>
            </Table>
         </div>
      </>
   );
}

export default ActivistTable;
