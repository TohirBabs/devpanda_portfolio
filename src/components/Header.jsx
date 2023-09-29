"use client";
import { useEffect, useState } from "react";
import Typewriter from "./typewriter";
import Image from "next/image";

function Header({ scrollY }) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (scrollY < 500) {
      setOpacity(1 - scrollY / 500);
    }
  }, [scrollY]);

  return (
    <div
      style={{ opacity: opacity }}
      className="w-full h-[90vh] flex  justify-center -z-10 sticky top-0"
    >
      <h1 className="xl:text-[3.5rem] text-[2.5rem] font-mono flex gap-2 items-center font-[700] -z-10 pb-[20vh] text-[#f1f2f1]">
        <Image
          src="/panda.svg"
          alt="panda emoji"
          width={60}
          height={60}
          priority
        />
        <Typewriter text="dev_panda" speed={100} delay={1000} />
      </h1>
    </div>
  );
}

export default Header;
