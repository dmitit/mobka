import ActivistAddForm from "@/entities/activist/ui/ActivistAddForm";
import CoreContainer from "@/shared/ui/CoreContainer";

function PageActivists() {
   return (
      <>
         <CoreContainer>
            <div className="py-4">
               <h1 className="font-medium text-xl my-4">Активисты</h1>
               <ActivistAddForm />
            </div>
            <div></div>
         </CoreContainer>
      </>
   );
}

export default PageActivists;
