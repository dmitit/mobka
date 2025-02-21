import { TableCell, TableRow } from "@/shared/ui/shadcn/table";
import { Brigadier } from "../brigadier.model";
import { Button } from "@/shared/ui/shadcn/button";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { deleteBrigadierAsync } from "../brigadier.slice";

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
               className="px-3 py-0.5"
               variant={"destructive"}
            >
               Удалить
            </Button>
         </TableCell>
      </TableRow>
   );
}

export default BrigadierRow;
