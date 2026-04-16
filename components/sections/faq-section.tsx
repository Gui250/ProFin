"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Para quem é a ProFin?",
    answer:
      "A ProFin foi criada para pessoas que querem organizar melhor a vida financeira de forma simples, com mais clareza sobre gastos e hábitos.",
  },
  {
    question: "Preciso conectar minha conta bancária?",
    answer:
      "Não necessariamente. A proposta é oferecer praticidade e flexibilidade para você acompanhar suas finanças da forma que fizer mais sentido.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim. A ProFin foi pensada para tratar seus dados com cuidado, priorizando segurança, privacidade e transparência em toda a experiência.",
  },
  {
    question: "Quando o sistema estará disponível?",
    answer:
      "Estamos liberando o acesso em etapas. Entrando na lista de espera, você fica entre os primeiros a receber novidades sobre a disponibilidade.",
  },
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section className="px-4 py-20 font-outfit md:px-6" id="faq">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-[1rem] font-bold text-[#3D8A5A]">FAQ</p>
          <h2 className="mt-2 text-[2rem] font-bold leading-tight md:text-[3rem]">
            Dúvidas frequentes
          </h2>
          <p className="mx-auto mt-3 max-w-[34rem] text-[1rem] text-[#6D6C6A]">
            Respostas simples para ajudar você a entender como a ProFin vai
            funcionar.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <article
                key={item.question}
                className="cursor-pointer rounded-[1.5rem] border border-[#E8DFD2] bg-white px-6 py-5 transition-transform duration-300 ease-out hover:scale-[1.02]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() =>
                    setOpenItem((current) => (current === index ? null : index))
                  }
                  aria-expanded={isOpen}
                >
                  <span className="text-[1.05rem] font-semibold text-[#111111]">
                    {item.question}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F4F1] text-[#3D8A5A]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {isOpen ? (
                  <p className="pr-10 pt-4 text-[1rem] leading-7 text-[#6D6C6A]">
                    {item.answer}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
