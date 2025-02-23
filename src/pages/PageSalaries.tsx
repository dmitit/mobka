import SalaryAddForm from "@/entities/salary/ui/SalaryAddForm";
import SalaryTable from "@/entities/salary/ui/SalaryTable";
import CoreContainer from "@/shared/ui/CoreContainer";

function PageSalaries() {
   return (
      <>
         <CoreContainer>
            <div className="py-4">
               <h1 className="font-medium text-xl my-4">Зарплаты</h1>
               <SalaryAddForm />
            </div>
            <div>
               <SalaryTable />
            </div>
         </CoreContainer>
      </>
   );
}

export default PageSalaries;
