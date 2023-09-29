"use client";
import React, { useLayoutEffect, useRef, useState } from "react";

export const ScrollIn = ({ children }) => {
  const preScroll = useRef(null);
  const elemRef = useRef(null);
  const [scale, setScale] = useState(0.9);

  useLayoutEffect(() => {
    const botPos = (element) => element.getBoundingClientRect().bottom;
    console.log();
    const onScroll = () => {
      const divBotPos = botPos(elemRef.current);
      console.log(divBotPos);

      const scrollPos = preScroll.current > window.scrollY;
      preScroll.current = window.scrollY;
      if (scrollPos && divBotPos > window.innerHeight) {
        setScale(1);
        return;
      }
      if (divBotPos < window.innerHeight) {
        setScale(1.1);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        ref={elemRef}
        className="w-full h-screen overflow-hidden flex items-center justify-center"
      >
        <div
          style={{
            transition: "transform 1000ms ease-in-out",
            transform: `scale(${scale})`,
          }}
          className="h-screen w-full z-10  flex items-center justify-center bg-white rounded-[5rem] text-black"
        >
          {children}
        </div>
      </div>
    </>
  );
};
