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

function BrigadierTable() {
   const dispatch = useAppDispatch();
   const { data } = useAppSelector((state) => state.brigadiers);
   console.log("rerender");

   useEffect(() => {
      dispatch(fetchBrigadiersAsync());
      console.log("dispatch");
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
                  {data.map((brigadier, index) => (
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
