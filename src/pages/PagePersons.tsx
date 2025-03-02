import PersonAddDrawer from "@/entities/person/ui/PersonAddDrawer";
import PersonTable from "@/entities/person/ui/PersonTable";
import CoreContainer from "@/shared/ui/CoreContainer";

function PagePersons() {
   return (
      <>
         <CoreContainer>
            <div className="py-4">
               <h1 className="font-medium text-xl my-4">Общая база</h1>
               <PersonAddDrawer />
            </div>
            <div>
               <PersonTable />
            </div>
         </CoreContainer>
      </>
   );
}

export default PagePersons;
