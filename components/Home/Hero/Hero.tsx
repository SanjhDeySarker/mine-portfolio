import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/s1.jpg"
          alt="hero image"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa] mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">Your Name</h1>
        <p className="text-xl mb-6">Full Stack Developer</p>
        <div className="flex gap-4">
          <a
            href="https://github.com"
            className="text-3xl hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            className="text-3xl hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c48] to-[#1a1a6c] -z-10" />
    </div>
  );
};

export default Hero;
