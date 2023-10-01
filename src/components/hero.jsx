"use client";
import React, { useEffect, useRef, useState } from "react";

export const Hero = () => {
  // // Create a ref for the section you want to scroll to
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   // Use setTimeout to scroll to the section after 5 seconds
  //   const scrollTimeout = setTimeout(() => {
  //     // Check if the section ref is defined
  //     if (sectionRef.current) {
  //       // Scroll to the section using scrollIntoView
  //       sectionRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, 3000); // 5000 milliseconds (5 seconds)

  //   // Cleanup the timeout if the component unmounts
  //   return () => {
  //     clearTimeout(scrollTimeout);
  //   };
  // }, []);
  return (
    <section
      // ref={sectionRef}
      id="hero"
      className=" p-2  bg-black flex flex-col lg:flex-row gap-2 h-max"
      data-scroll-section
    >
      <div
        id="stick"
        data-scroll
        data-scroll-class="scaleIn"
        className="h-full scale-90 p-6  lg:p-14 lg:w-3/5 font-mono  rounded-[3rem] lg:rounded-[4rem] mx-auto"
      >
        <h2 className="lg:text-[3rem] text-[2rem]  pr-[5vw]">
          <div className=" ">
            i am an <span className="font-mexa"> ARTISTE</span>👨🏼‍🎨
          </div>
          <div className=" ">and your web browser</div>
          <div className=" ">is my canvas🎨</div>
        </h2>
      </div>
      <div
        id="stick"
        data-scroll
        data-scroll-class="scaleIn"
        className="h-full scale-90 p-6  lg:p-14 font-mono flex-1  rounded-[3rem] lg:rounded-[3] mx-auto"
      >
        <h2 className="lg:text-[3rem] text-[2rem]  pr-[5vw]">
          <div className=" ">
            i am an <span className="font-mexa"> ARTISTE</span>👨🏼‍🎨
          </div>
          <div className=" ">and your web browser</div>
          <div className=" ">is my canvas🎨</div>
        </h2>
      </div>
    </section>
  );
};
