function CoreContainer({ children }: { children: React.ReactNode }) {
   return (
      <>
         <div className="max-w-[1600px] mx-auto px-[1.5rem] relative z-10">
            {children}
         </div>
      </>
   );
}

export default CoreContainer;
