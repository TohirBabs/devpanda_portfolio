"use client";
import Header from "@/components/Header";
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
}
