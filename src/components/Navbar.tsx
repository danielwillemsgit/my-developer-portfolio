import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 flex justify-between items-center px-10 py-4 z-50">
      <h1 className="text-xl font-bold">DW</h1>

      <nav className="flex gap-8 text-sm font-semibold">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#skills" className="hover:underline">
          Skills
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;