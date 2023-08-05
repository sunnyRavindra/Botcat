import React from "react";
import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-16 border border-l-stone-500">
      <div className="flex row-flex justify-between basis-3/4 w-28">
        <div className="flex row-flex justify-between w-1/3">
            <div className="flex items-center justify-center text-center text-sm text-stone-400 ">
                <Image src="/botcat.png" alt="Botcat Logo" className="dark:invert" width={100} height={24} priority />
            </div>
            <div className="flex items-center justify-center text-center text-sm text-neutral-500 mx-4">
                <Link href="/posts/first-post">Profile</Link>
            </div>
            <div className="flex items-center justify-center text-center text-sm text-neutral-500 mx-4">
                <Link href="/posts/first-post">Resume</Link>
            </div>
            <div className="flex items-center justify-center text-center text-sm text-neutral-500 mx-4">
                <Link href="/posts/first-post">Projects</Link>
            </div>
            <div className="flex items-center justify-center text-center text-sm text-neutral-500 mx-4">
                <Link href="/posts/first-post">About</Link>
            </div>
        </div>
        <div className="flex row-flex flex-row-reverse w-1/2" >
            <div className="flex items-center justify-center h-8 w-20 text-center rounded-full text-white rounded-md mx-1 text-sm font-medium bg-zinc-900">
                <Link href="/posts/first-post">Sign Up</Link>
            </div>
            <div className="flex items-center justify-center bg-grey-950 h-8 w-16 text-black text-center rounded-full text-gray-50 rounded-md mx-1 text-sm border border-neutral-700">
                <Link href="/posts/first-post">Log In</Link>
            </div>
            <div className="flex items-center justify-center text-center text-sm text-neutral-500 mx-4">
                <Link href="/posts/first-post">Contact me</Link>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
