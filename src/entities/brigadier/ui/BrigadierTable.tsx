import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/shared/ui/shadcn/table";
import BrigadierRow from "./BrigadierRow";
import { useEffect } from "react";
import { fetchBrigadiersAsync } from "../brigadier.slice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectBrigadiers } from "../brigadier.selectors";

function BrigadierTable() {
   const dispatch = useAppDispatch();
   const brigadiers = useAppSelector(selectBrigadiers);

   useEffect(() => {
      dispatch(fetchBrigadiersAsync());
   }, [dispatch]);

   return (
      <>
         <div>
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead>ID</TableHead>
                     <TableHead className="w-full">ФИО</TableHead>
                     <TableHead>Действия</TableHead>
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
