"use client";
import React, { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center gap-1.5 p-2"
        aria-label="Toggle navigation"
      >
        <span
          className={`block w-5 h-px bg-zinc-400 transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
        />
        <span
          className={`block w-5 h-px bg-zinc-400 transition-all duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-5 h-px bg-zinc-400 transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-white/5">
          <ul className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-zinc-400 hover:text-white rounded-md hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
