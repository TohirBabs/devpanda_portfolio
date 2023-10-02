import { Scrambler } from "@/components/Scrambler";
import Typewriter from "@/components/typewriter";
import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";

function Home() {
  return (
    <div className="w-full h-screen bg-black flex flex-col lg:flex-row relative text-black">
      <AnimatedCursor />
      <div className=" flex lg:w-[40%] h-[45%] w-full gap-4 bg-white  flex-col justify-between   relative lg:h-full">
        <header className="lg:p-8 p-4 ">
          <h1 className=" lg:text-[2.2rem] text-[1.5rem] font-space flex gap-2 items-center font-[700]">
            <div className="w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem]  relative">
              <Image src="/panda.svg" alt="panda emoji" fill priority />
            </div>

            <Typewriter text="dev_panda" speed={80} delay={0} />
          </h1>
          <h1 className="lg:text-[1.5rem] text-[1.2rem] font-space flex gap-2 items-center">
            <Scrambler text="creative web developer" />
          </h1>
        </header>
        <div className="w-full flex-1 flex justify-end">
          <div className="w-[400px]  bg-black overflow-hidden relative  ">
            <Image
              src="/selfai.png"
              alt="panda emoji"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
        <nav className="lg:p-8 p-4 flex lg:flex-col lg:gap-12 gap-4 font-space justify-end lg:items-end">
          <a>about</a>
          <a>projects</a>
          <a>contact</a>
        </nav>
      </div>

      <main className="flex-1  h-full p-10 relative"></main>
    </div>
  );
}

export default Home;
