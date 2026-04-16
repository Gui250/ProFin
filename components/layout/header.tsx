"use client";

import Image from "next/image";
import { useState } from "react";

import logoProFin from "../../assets/images/logoProFin-transparent.png";

const navLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Fininho", href: "#fininho" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 font-outfit md:px-6">
      <div className="mx-auto max-w-7xl rounded-full border border-white/60 bg-[#FBFAF6]/88 px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3">
            <Image
              src={logoProFin}
              alt="Logo da ProFin"
              className="h-10 w-auto object-contain md:h-11"
              priority
            />
            <div>
              <h2 className="text-[1.35rem] font-semibold text-[#3D8A5A]">
                ProFin
              </h2>
              <p className="text-[0.75rem] text-[#8A887F]">Finanças para lazer</p>
            </div>
          </a>

          <nav className="max-md:hidden">
            <ul className="flex items-center gap-8 text-[0.98rem] text-[#6D6C6A]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[#3D8A5A]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#acesso-antecipado"
            className="hidden h-12 items-center justify-center rounded-full bg-[#3D8A5A] px-6 text-[0.95rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#2F744C] md:inline-flex"
          >
            Entrar na lista
          </a>

          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-[#E9E3D8] bg-white md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span
              className={`block h-[2px] w-5 bg-[#3D8A5A] transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-[#3D8A5A] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-[#3D8A5A] transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "mt-4 max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-[#ECE8E0] pt-4">
            <ul className="flex flex-col gap-4 text-[1rem] text-[#6D6C6A]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block transition-colors hover:text-[#3D8A5A]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#acesso-antecipado"
              className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3D8A5A] px-5 text-[0.95rem] font-bold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Entrar na lista
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
