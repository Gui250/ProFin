"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="font-outfit px-[3.5rem] py-[2rem] max-sm:px-6 max-sm:my-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[#3D8A5A] text-[1.5rem] font-semibold">ProFin</h2>
        </div>

        {/* Desktop nav */}
        <nav className="max-md:hidden">
          <ul className="text-[#6D6C6A] flex gap-[2.5rem]">
            <li className="cursor-pointer hover:text-[#3D8A5A] transition-colors">
              Funcionalidades
            </li>
            <li className="cursor-pointer hover:text-[#3D8A5A] transition-colors">
              Planos
            </li>
            <li className="cursor-pointer hover:text-[#3D8A5A] transition-colors">
              FAQ
            </li>
          </ul>
        </nav>

        {/* Desktop button */}
        <button className="max-md:hidden font-bold cursor-pointer bg-[#3D8A5A] px-[0.5625rem] py-[0.8125rem] rounded-[0.625rem] text-white hover:bg-[#3D8A5A]/80 transition-colors">
          Comece Agora
        </button>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`block h-[2px] w-6 bg-[#3D8A5A] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-[#3D8A5A] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-[#3D8A5A] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 pb-4 border-t border-gray-100 pt-4">
          <ul className="text-[#6D6C6A] flex flex-col gap-4">
            <li className="cursor-pointer hover:text-[#3D8A5A] transition-colors">
              Funcionalidades
            </li>
            <li className="cursor-pointer hover:text-[#3D8A5A] transition-colors">
              Planos
            </li>
            <li className="cursor-pointer hover:text-[#3D8A5A] transition-colors">
              FAQ
            </li>
          </ul>
          <button className="font-bold cursor-pointer bg-[#3D8A5A] px-[0.5625rem] py-[0.8125rem] rounded-[0.625rem] text-white hover:bg-[#3D8A5A]/80 transition-colors w-full">
            Comece Agora
          </button>
        </nav>
      </div>
    </header>
  );
}
