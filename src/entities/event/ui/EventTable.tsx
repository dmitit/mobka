import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectEvents } from "../event.selectors";
import { useEffect } from "react";
import { fetchEventsAsync } from "../event.slice";
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/shared/ui/shadcn/table";
import EventRow from "./EventRow";

function EventTable() {
   const dispatch = useAppDispatch();
   const events = useAppSelector(selectEvents);

   useEffect(() => {
      dispatch(fetchEventsAsync());
   }, [dispatch]);

   return (
      <>
         <div>
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead>ID</TableHead>
                     <TableHead className="w-full">Название</TableHead>
                     <TableHead>Период</TableHead>
                     <TableHead>Квота</TableHead>
                     <TableHead></TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {events.map((event, index) => (
                     <EventRow key={event.id} event={event} index={index} />
                  ))}
               </TableBody>
            </Table>
         </div>
      </>
   );
}

export default EventTable;
