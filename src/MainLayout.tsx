import CoreHeader from "./components/main/CoreHeader";
import CoreFooter from "./components/main/CoreFooter";
import { Outlet } from "react-router";

function MainLayout() {
   return (
      <>
         <CoreHeader />
         <main>
            <Outlet />
         </main>
         <CoreFooter />
      </>
   );
}

export default MainLayout;
