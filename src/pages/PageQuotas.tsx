// import ActivistAddForm from "@/entities/activist/ui/ActivistAddForm";
// import ActivistTable from "@/entities/activist/ui/ActivistTable";
import CoreContainer from "@/shared/ui/CoreContainer";

function PageActivists() {
   return (
      <>
         <CoreContainer>
            <div className="py-4">
               <h1 className="font-medium text-xl my-4">Квоты</h1>
               {/* <ActivistAddForm /> */}
            </div>
            <div>{/* <ActivistTable /> */}</div>
         </CoreContainer>
      </>
   );
}

export default PageActivists;
