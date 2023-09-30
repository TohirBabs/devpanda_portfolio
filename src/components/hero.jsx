"use client";
import React, { useEffect, useRef, useState } from "react";

export const Hero = () => {
  return (
    <section className="h-screen p-2 bg-black text-black" data-scroll-section>
      <div
        id="stick"
        className="h-full  p-6 pt-10 lg:p-14 lg:pt-20 bg-white rounded-[3rem] lg:rounded-[4rem] mx-auto"
      >
        <h2
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="5"
          className="lg:text-[5.5rem] text-[2.4rem] font-mono lg:leading-[6rem] "
        >
          developing web applications for user experience
        </h2>
        <h1
          data-scroll
          data-scroll-speed="5"
          data-scroll-sticky // Attibute that enables the sticky scroll
          data-scroll-target="#stick"
          className="lg:text-[4.5rem] text-[2rem] font-mono lg:leading-[6rem] "
        >
          Hey Sticky
        </h1>
      </div>
    </section>
  );
};
