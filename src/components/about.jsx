"use client";
import React, { useEffect, useRef, useState } from "react";

export const About = () => {
  return (
    <section className="h-screen p-2 bg-black text-black " data-scroll-section>
      <div
        id="stick"
        data-scroll
        data-scroll-class="scaleIn"
        className="h-full scale-95  p-6 pt-10 lg:p-14 lg:pt-20 bg-pastelGreen rounded-[3rem] lg:rounded-[4rem] mx-auto"
      >
        <h2 className="lg:text-[5.5rem] text-[2.4rem] font-mono lg:leading-[6rem] ">
          developing web applications for user experience
        </h2>
      </div>
    </section>
  );
};
