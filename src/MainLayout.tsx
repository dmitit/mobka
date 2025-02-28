import CoreHeader from "@/shared/ui/CoreHeader";
import { useEffect, useState } from "react";
import CoreFooter from "@/shared/ui/CoreFooter";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import { useAppDispatch } from "./shared/hooks/useAppDispatch";
import { fetchSalariesAsync } from "./entities/salary/salary.slice";
import { fetchBrigadiersAsync } from "./entities/brigadier/brigadier.slice";
import { fetchEventsAsync } from "./entities/event/event.slice";
import { LoaderCircle } from "lucide-react";
// import { fetchActivistsAsync } from "./entities/activist/activist.slice";

function MainLayout() {
   const dispatch = useAppDispatch();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const loadData = async () => {
         try {
            await dispatch(fetchSalariesAsync()).unwrap();
            await dispatch(fetchBrigadiersAsync()).unwrap();
            await dispatch(fetchEventsAsync()).unwrap();
            // await dispatch(fetchActivistsAsync()).unwrap();
         } finally {
            setLoading(false);
         }
      };

      loadData();
   }, [dispatch]);

   if (loading) {
      return (
         <div className="flex min-h-screen items-center justify-center">
            <LoaderCircle className="h-12 w-12 animate-spin text-gray-500" />
         </div>
      );
   }

   return (
      <>
         <CoreHeader />
         <main>
            <Outlet />
         </main>
         <Toaster />
         <CoreFooter />
      </>
   );
}

export default MainLayout;
