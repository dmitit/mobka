import { Link } from "react-router";
import CoreContainer from "./CoreContainer";

function CoreHeader() {
   return (
      <header className="bg-black py-[1rem]">
         <CoreContainer>
            <div className="max-w-[1600px] mx-auto">
               <Link
                  to={"/"}
                  className="text-white text-[3rem] group transition-[color] duration-300 font-medium"
               >
                  мобка
               </Link>
            </div>
         </CoreContainer>
      </header>
   );
}

export default CoreHeader;
