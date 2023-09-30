import Typewriter from "./typewriter";
import Image from "next/image";

function Header() {
  return (
    <section
      className="w-full h-screen  flex  justify-center"
      data-scroll
      data-scroll-speed="4"
      data-scroll-section
    >
      <h1 className="xl:text-[3.5rem] text-[2.5rem] font-mono flex gap-2 items-center font-[700] pb-[20vh] text-[#f1f2f1]">
        <Image
          src="/panda.svg"
          alt="panda emoji"
          width={60}
          height={60}
          priority
        />
        <Typewriter text="dev_panda" speed={100} delay={1000} />
      </h1>
    </section>
  );
}

export default Header;
