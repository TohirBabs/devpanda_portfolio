"use client";
import Header from "@/components/Header";
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header scrollY={scrollPosition} />
      <Hero />
      <About />
    </>
  );
}
