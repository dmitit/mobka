import CoreContainer from "@/shared/ui/CoreContainer";
import { Button } from "@/shared/ui/button";

function PageMain() {
   return (
      <>
         <div>
            <CoreContainer>
               <Button>increment</Button>
               <h1 className="">main</h1>
            </CoreContainer>
         </div>
      </>
   );
}

export default PageMain;
