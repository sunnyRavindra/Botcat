import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-16 border-slate-700">
      <div className="flex row-flex justify-between basis-3/4 h-5 w-28" >
        <div className="flex row-flex justify-between bg-black w-1/2">
         <div>
             <Link href="/posts/first-post">this page!</Link>
         </div>
         <div>1</div> 
         <div>1</div> 
         <div>1</div> 
         <div>1</div> 
         <div>1</div> 
        </div>
        <div className="flex row-flex justify-between bg-black w-28">
         <div>1</div> 
         <div>1</div> 
        </div>
      </div>
    </div>
  );
};
export default Navbar;
