"use client";
import React, { useEffect, useRef, useState } from "react";

export const Hero = () => {
  // Create a ref for the section you want to scroll to
  const sectionRef = useRef(null);

  useEffect(() => {
    // Use setTimeout to scroll to the section after 5 seconds
    const scrollTimeout = setTimeout(() => {
      // Check if the section ref is defined
      if (sectionRef.current) {
        // Scroll to the section using scrollIntoView
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 3000); // 5000 milliseconds (5 seconds)

    // Cleanup the timeout if the component unmounts
    return () => {
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <section
      className="h-screen w-full z-10  p-2  text-black"
      data-scroll-section
    >
      <div className="h-full p-6 pt-10 lg:p-14 lg:pt-20 bg-white rounded-[3rem] lg:rounded-[4rem] mx-auto">
        <h2
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="5"
          className="lg:text-[5.5rem] text-[2.4rem] font-mono lg:leading-[6rem] "
        >
          developing web applications for user experience
        </h2>
      </div>
    </section>
  );
};
