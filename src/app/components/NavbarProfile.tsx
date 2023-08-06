import React from "react";
import Link from "next/link";
import Image from 'next/image'

const NavbarProfile = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-10 shadow-md">
      <div className="flex items-center justify-center h-16 border border-l-stone-500">
        <div className="flex row-flex justify-between basis-3/4 w-28">
          <div className="flex row-flex justify-between w-1/3">
              <div className="flex items-center justify-center text-center text-sm text-stone-400 ">
                <Link href="/"><Image src="/Cat.svg" alt="Botcat Logo" width={100} height={24} priority /></Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarProfile;
