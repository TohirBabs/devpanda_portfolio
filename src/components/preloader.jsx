import React from "react";
import Typewriter from "./typewriter";
import Image from "next/image";

export const Preloader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h1 className="xl:text-[4rem] text-[2rem] font-mono flex gap-2 items-center">
        <Image
          src="/panda.svg"
          alt="panda emoji"
          width={70}
          height={70}
          priority
          className="p-2 rounded-xl bg-white h-max"
        />
        <Typewriter text="dev_panda" speed={200} delay={2000} />
      </h1>
    </div>
  );
};
