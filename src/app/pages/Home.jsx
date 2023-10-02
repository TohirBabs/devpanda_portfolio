import Link from "next/link";
import Typewriter from "./typewriter";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Scrambler } from "./Scrambler";

function Home() {
  return (
    <section className="w-full h-screen bg-black flex-col items-center  flex relative  justify-center">
      <div className="pb-[20vh] flex items-center gap-8 flex-col justify-center">
        <h1 className="lg:text-[3.5rem] text-[2.2rem] font-space flex gap-2 items-center font-[700]   text-[#f1f2f1]">
          <div className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem]  relative">
            <Image src="/panda.svg" alt="panda emoji" fill priority />
          </div>

          <Typewriter text="dev_panda" speed={80} delay={0} />
        </h1>
        <h1 className="lg:text-[2rem] text-[1.2rem] font-space flex gap-2 items-center   text-[#f1f2f1]">
          <Scrambler text="creative web developer" />
        </h1>
      </div>
    </section>
  );
}

export default Home;
