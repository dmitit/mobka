import PersonAddForm from "@/entities/person/ui/PersonAddForm";
import CoreContainer from "@/shared/ui/CoreContainer";

function PagePersons() {
   return (
      <>
         <CoreContainer>
            <div className="py-4">
               <h1 className="font-medium text-xl my-4">Общая база</h1>
               <PersonAddForm />
            </div>
            <div>{/* <ActivistTable /> */}</div>
         </CoreContainer>
      </>
   );
}

export default PagePersons;
