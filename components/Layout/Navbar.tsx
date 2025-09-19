import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0c0c48] bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-white font-bold text-xl">
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-white hover:text-blue-400">
              About
            </Link>
            <Link href="#projects" className="text-white hover:text-blue-400">
              Projects
            </Link>
            <Link href="#contact" className="text-white hover:text-blue-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
