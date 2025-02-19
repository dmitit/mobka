import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import { Outlet } from "react-router";

function MainLayout() {
   return (
      <>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   );
}

export default MainLayout;
