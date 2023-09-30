import Link from "next/link";
import Typewriter from "./typewriter";
import Image from "next/image";
import { useEffect, useRef } from "react";

function Header() {
  // Create a reference to the link element
  const linkRef = useRef(null);

  useEffect(() => {
    // Set up a timer to click the link after 3 seconds
    const timerId = setTimeout(() => {
      // Simulate a click event on the link
      linkRef.current.click();
    }, 3000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timerId);
  }, []);
  return (
    <section
      className="w-full h-screen bg-black  flex relative  justify-center"
      data-scroll
      data-scroll-speed="5"
      data-scroll-section
    >
      <h1 className="xl:text-[5.2rem] text-[2.5rem] font-mono flex gap-2 items-center font-[700] pb-[20vh] text-[#f1f2f1]">
        <div className="w-[6vw] h-[6vw]  relative">
          <Image src="/panda.svg" alt="panda emoji" fill priority />
        </div>

        <Typewriter text="dev_panda" speed={100} delay={1000} />
      </h1>
      <Link
        ref={linkRef}
        href="#hero"
        data-scroll-to
        className="w-[4.4vw] h-[4.4vw] absolute left-10 bottom-10 rotate-90"
      >
        <Image src="/arrow-bottom-large.svg" alt="panda emoji" fill priority />
      </Link>
    </section>
  );
}

export default Header;
