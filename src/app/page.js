"use client";
import Header from "@/components/Header";
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { useRef } from "react";
import AnimatedCursor from "react-animated-cursor";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function Home() {
  // import LocomotiveScroll from "locomotive-scroll";

  // const locomotiveScroll = new LocomotiveScroll({
  //   el: document.querySelector("[data-scroll-container]"),
  //   smooth: true,
  //   getSpeed: true,
  //   getDirection: true,
  //   inertia: 0.75,
  // });

  // document.addEventListener("DOMContentLoaded", function () {
  //   function ScrollUpdateDelay() {
  //     setTimeout(function () {
  //       locomotiveScroll.update();
  //     }, 1000);
  //   }

  //   ScrollUpdateDelay();
  // });

  // const anchorLinks = document.querySelectorAll(".fixed-nav .location");

  // anchorLinks.forEach((anchorLink) => {
  //   let hashval = anchorLink.getAttribute("href");
  //   let target = document.querySelector(hashval);

  //   anchorLink.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     e.stopPropagation();

  //     locomotiveScroll.scrollTo(target);
  //   });
  // });
  const ref = useRef(null);

  const options = {
    smooth: true,
    getSpeed: true,
    getDirection: true,
    smoothMobile: "true",
    inertia: 0.75,
  };
  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <AnimatedCursor
          innerSize={30}
          outerSize={20}
          color="255,255,255"
          innerStyle={{ border: "3px rgb(0, 0, 0) solid" }}
        />
        <Header />
        <Hero />
        <About />
      </main>
    </LocomotiveScrollProvider>
  );
}
