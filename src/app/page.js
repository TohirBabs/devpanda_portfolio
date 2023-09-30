"use client";
import Header from "@/components/Header";
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function Home() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };
  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <Header />
        <Hero />
        <About />
      </main>
    </LocomotiveScrollProvider>
  );
}
