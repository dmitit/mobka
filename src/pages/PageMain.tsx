import { increment } from "@/app/store/counterSlice";
import CoreContainer from "@/shared/ui/CoreContainer";
import { Button } from "@/shared/ui/button";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React from "react";

const CountDisplay = React.memo(() => {
   const count = useAppSelector((state) => state.counter.value);
   return <span>{count}</span>;
});

function PageMain() {
   const dispatch = useAppDispatch();

   return (
      <>
         <div>
            <CoreContainer>
               <Button onClick={() => dispatch(increment())}>increment</Button>
               <CountDisplay />
               <h1 className="">main</h1>
            </CoreContainer>
         </div>
      </>
   );
}

export default PageMain;
