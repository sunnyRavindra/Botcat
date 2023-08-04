import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-16 border border-zinc-800">
      <div className="flex row-flex justify-between basis-3/4 w-28">
        <div className="flex row-flex justify-between bg-black w-1/3">
         <div className="flex items-center justify-center text-center text-sm text-stone-400">
             <Link href="/posts/first-post">BotCat</Link>
         </div>
         <div className="flex items-center justify-center text-center text-sm text-stone-400">
             <Link href="/posts/first-post">Home</Link>
         </div>
         <div className="flex items-center justify-center text-center text-sm text-stone-400">
             <Link href="/posts/first-post">Resume</Link>
         </div>
         <div className="flex items-center justify-center text-center text-sm text-stone-400">
             <Link href="/posts/first-post">Projects</Link>
         </div>
         <div className="flex items-center justify-center text-center text-sm text-stone-400">
             <Link href="/posts/first-post">Contact me</Link>
         </div>
         <div className="flex items-center justify-center text-center text-sm text-stone-400">
             <Link href="/posts/first-post">About</Link>
         </div>
        </div>
        <div className="flex row-flex flex-row-reverse bg-black w-1/2" >
         <div className="flex items-center justify-center bg-white h-8 w-20 text-center rounded-full text-neutral-950 rounded-md mx-1 text-sm font-medium">
             <Link href="/posts/first-post">Sign Up</Link>
         </div>
         <div className="flex items-center justify-center bg-neutral-950 h-8 w-16 text-center rounded-full text-gray-50 rounded-md  bg-zinc-900 mx-1 text-sm border border-neutral-700">
             <Link href="/posts/first-post">Log In</Link>
         </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
