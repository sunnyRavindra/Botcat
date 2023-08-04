import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-16 border border-zinc-800">
      <div className="flex row-flex justify-between basis-3/4 w-28">
        <div className="flex row-flex justify-between bg-black h-5 w-1/2">
         <div>
             <Link href="/posts/first-post">BotCat</Link>
         </div>
         <div>
             <Link href="/posts/first-post">Home</Link>
         </div>
         <div>
             <Link href="/posts/first-post">Resume</Link>
         </div>
         <div>
             <Link href="/posts/first-post">Projects</Link>
         </div>
         <div>
             <Link href="/posts/first-post">Contact me</Link>
         </div>
         <div>
             <Link href="/posts/first-post">About</Link>
         </div>
        </div>
        <div className="flex row-flex justify-between bg-black w-28">
         <div>
             <Link href="/posts/first-post">LogIn</Link>
         </div>
         <div className="bg-sky-500">
             <Link href="/posts/first-post">SignIn</Link>
         </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
