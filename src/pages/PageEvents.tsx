import EventAddForm from "@/entities/event/ui/EventAddForm";
import EventTable from "@/entities/event/ui/EventTable";
import CoreContainer from "@/shared/ui/CoreContainer";

function PageEvents() {
   return (
      <>
         <CoreContainer>
            <div className="py-4">
               <h1 className="font-medium text-xl my-4">Мероприятия</h1>
               <EventAddForm />
            </div>
            <div>
               <EventTable />
            </div>
         </CoreContainer>
      </>
   );
}

export default PageEvents;
