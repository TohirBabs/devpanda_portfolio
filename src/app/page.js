import { Scrambler } from "@/components/Scrambler";
import Typewriter from "@/components/typewriter";
import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";

function Home() {
  return (
    <div className="w-full h-screen bg-black flex flex-col lg:flex-row relative text-black">
      <AnimatedCursor />
      <div className=" flex lg:w-[40%]  w-full lg:gap-4 gap-2 bg-white flex-col justify-between items-center   relative lg:h-full">
        <header className=" lg:p-4 p-2 w-full">
          <h1 className=" lg:text-[2rem] text-[1.5rem] font-space flex gap-2 items-center font-[700]">
            <div className="w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]  relative">
              <Image src="/panda.svg" alt="panda emoji" fill priority />
            </div>

            <Typewriter text="dev_panda" speed={80} delay={0} />
          </h1>
          <h1 className="lg:text-[1.2rem] font-[700] text-[1rem] font-space flex items-center">
            <span className="text-[#0057e7]">c</span>
            <span className="text-[#d62d20]">r</span>
            <span className="text-[#ffa700]">e</span>
            <span className="text-[#008744]">a</span>
            <span className="text-[#0057e7]">t</span>
            <span className="text-[#008744]">i</span>
            <span className="text-[#ffa700]">v</span>
            <span className="text-[#d62d20]">e</span>
            <span className="pl-3">web developer</span>
          </h1>
        </header>
        <div className="w-full flex lg:bg-gradient-to-r bg-gradient-to-b from-transparent from-5% to-black to-70% justify-end">
          <div className=" lg:w-[370px] w-full h-[350px] lg:h-[350px]  overflow-hidden relative  ">
            <Image
              src="/selfai.png"
              alt="panda emoji"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>

        <nav className="lg:p-4 p-2 lg:flex lg:gap-4 hidden  gap-2 lg:justify-end font-mono lg:items-end lg:w-full">
          <a className=" lg:w-[36px] lg:h-[35px]  relative ">
            <Image
              src="/github.png"
              alt="panda emoji"
              className="object-fit"
              fill
            />
          </a>
          <a className=" lg:w-[37px] lg:h-[35px]  relative ">
            <Image
              src="/whatsapp.png"
              alt="panda emoji"
              className="object-fit"
              fill
            />
          </a>
          <a className=" lg:w-[37px] lg:h-[35px]  relative ">
            <Image
              src="/linkedin.png"
              alt="panda emoji"
              className="object-fit"
              fill
            />
          </a>
        </nav>
      </div>

      <main className="flex-1  h-full p-10 relative"></main>
    </div>
  );
}

export default Home;
