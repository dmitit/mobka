import BrigadierAddDrawer from "@/entities/brigadier/ui/BrigadierAddDrawer";
import BrigadierTable from "@/entities/brigadier/ui/BrigadierTable";
import CoreContainer from "@/shared/ui/CoreContainer";

function PageBrigadiers() {
   return (
      <>
         <CoreContainer>
            <div className="py-4">
               <h1 className="font-medium text-xl my-4">Бригадиры</h1>
               <BrigadierAddDrawer />
            </div>
            <div>
               <BrigadierTable />
            </div>
         </CoreContainer>
      </>
   );
}

export default PageBrigadiers;
