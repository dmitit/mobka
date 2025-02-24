import { TableCell, TableRow } from "@/shared/ui/shadcn/table";
import { Brigadier } from "../brigadier.model";
import { Button } from "@/shared/ui/shadcn/button";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { deleteBrigadierAsync } from "../brigadier.slice";
import { Trash2 } from "lucide-react";

function BrigadierRow({
   brigadier,
   index,
}: {
   brigadier: Brigadier;
   index: number;
}) {
   const dispatch = useAppDispatch();

   async function handleDeleteBrigadier() {
      await dispatch(deleteBrigadierAsync(brigadier.id));
   }

   return (
      <TableRow className="hover:bg-gray-100">
         <TableCell>{index + 1}</TableCell>
         <TableCell className="break-all">{brigadier.fullname}</TableCell>
         <TableCell>
            <Button
               onClick={handleDeleteBrigadier}
               className="px-2 py-1 h-auto text-xs"
               variant={"destructive"}
            >
               <Trash2 />
            </Button>
         </TableCell>
      </TableRow>
   );
}

export default BrigadierRow;
