"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "#home" },
    { label: "Skills", id: "#skills" },
    { label: "Projects", id: "#projects" },
    { label: "Experience", id: "#experience" },
    { label: "Achievements", id: "#achievements" },
    { label: "Education", id: "#education" },
    { label: "About", id: "#about" },
    { label: "Contact", id: "#contact" },
  ];

  

  return (
    <nav className=" w-full sticky top-0 z-10 bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Pravakar</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.id}
              className="hover:text-blue-500"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 border rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden z-10  flex flex-col bg-white shadow px-4 py-4 gap-4 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.id}
               href={item.id}
              className="text-left"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
