import { Scrambler } from "@/components/Scrambler";
import Typewriter from "@/components/typewriter";
import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";

function Home() {
  return (
    <div className="w-full h-screen bg-black flex flex-col lg:flex-row relative text-black">
      <AnimatedCursor />
      <div className=" flex lg:w-[40%]  w-full gap-4 bg-white  flex-col justify-between   relative lg:h-full">
        <header className=" p-4 ">
          <h1 className=" lg:text-[2rem] text-[1.5rem] font-space flex gap-2 items-center font-[700]">
            <div className="w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]  relative">
              <Image src="/panda.svg" alt="panda emoji" fill priority />
            </div>

            <Typewriter text="dev_panda" speed={80} delay={0} />
          </h1>
          <h1 className="lg:text-[1.2rem] text-[1rem] font-space flex gap-2 items-center">
            <Scrambler text="creative web developer" />
          </h1>
        </header>
        <div className="w-full hidden lg:flex bg-gradient-to-r from-transparent from-5% to-black to-70% justify-end">
          <div className=" lg:w-[370px] lg:h-[350px]  overflow-hidden relative  ">
            <Image
              src="/selfai.png"
              alt="panda emoji"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
        <nav className="p-4 flex lg:flex-col lg:gap-8 gap-4 font-space justify-end lg:items-end">
          <a>SouthsideFoods</a>
          <a>Greeth</a>
          <a>getLinked.ai</a>
        </nav>
      </div>

      <main className="flex-1  h-full p-10 relative"></main>
    </div>
  );
}

export default Home;
