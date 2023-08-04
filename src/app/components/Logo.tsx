import React from "react";
import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src="/Botcat.svg"
      width={500}
      height={500}
      alt="Botcat"
    />
  )
}

export default Logo;
