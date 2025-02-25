import CoreHeader from "@/shared/ui/CoreHeader";
// import CoreFooter from "@/shared/ui/CoreFooter";
import { Outlet } from "react-router";

function MainLayout() {
   return (
      <>
         <CoreHeader />
         <main>
            <Outlet />
         </main>
         {/* <CoreFooter /> */}
      </>
   );
}

export default MainLayout;
