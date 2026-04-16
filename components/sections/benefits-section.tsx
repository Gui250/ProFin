const benefits = [
  {
    title: "Mais clareza sobre seus gastos",
    description:
      "Visualize com facilidade onde o seu dinheiro está indo e entenda melhor seus hábitos no dia a dia.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-[#3D8A5A]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19h16" />
        <path d="M7 15l3-3 3 2 4-5" />
        <circle cx="7" cy="15" r="1" fill="currentColor" stroke="none" />
        <circle cx="10" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="13" cy="14" r="1" fill="currentColor" stroke="none" />
        <circle cx="17" cy="9" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Organização sem esforço",
    description:
      "Mantenha tudo em ordem com uma experiência simples, direta e pensada para acompanhar sua rotina.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-[#3D8A5A]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
  },
  {
    title: "Decisões financeiras mais conscientes",
    description:
      "Tenha mais contexto para escolher melhor, ajustar prioridades e usar seu orçamento com mais confiança.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-[#3D8A5A]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4v16" />
        <path d="M8.5 8.5C8.5 7.12 9.84 6 11.5 6h1c1.66 0 3 1.12 3 2.5S14.16 11 12.5 11h-1C9.84 11 8.5 12.12 8.5 13.5S9.84 16 11.5 16h1c1.66 0 3-1.12 3-2.5" />
      </svg>
    ),
  },
  {
    title: "Menos surpresas no fim do mês",
    description:
      "Acompanhe sua evolução com mais previsibilidade para fechar o mês com mais tranquilidade.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-[#3D8A5A]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21s-6.5-4.35-6.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 6.5 4c0 5.65-6.5 10-6.5 10Z" />
        <path d="M10 12.5l1.5 1.5L14.5 11" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section className="px-4 py-20 font-outfit md:px-6" id="beneficios">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[1rem] font-bold text-[#3D8A5A]">Benefícios</p>
          <h2 className="mt-2 text-[2rem] font-bold leading-tight md:text-[3rem]">
            Mais controle, menos preocupação
          </h2>
          <p className="mx-auto mt-3 max-w-[38rem] text-[1rem] text-[#6D6C6A]">
            Continue acompanhando sua vida financeira com a mesma simplicidade,
            agora com ainda mais clareza para o dia a dia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex h-full cursor-pointer flex-col rounded-[1.75rem] border border-[#E8DFD2] bg-white p-7 transition-transform duration-300 ease-out hover:scale-[1.03]"
            >
              <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-[#C8F0D8]">
                {benefit.icon}
              </div>
              <h3 className="mt-6 text-[1.15rem] font-semibold text-[#111111]">
                {benefit.title}
              </h3>
              <p className="mt-4 text-[1rem] leading-7 text-[#6D6C6A]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
