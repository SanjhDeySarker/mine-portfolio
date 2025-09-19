import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Hero from "@/components/Home/Hero/Hero";
import About from "@/components/Home/About/About";
import Projects from "@/components/Home/Projects/Projects";

export default function Home() {
  return (
    <main className="bg-[#0c0c48]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
