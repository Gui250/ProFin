import Image from "next/image";

import fininhoImage from "../../assets/images/Fininho.png";

const fininhoHighlights = [
  "Sugestões práticas para organizar seus gastos de lazer.",
  "Orientações simples para criar metas que fazem sentido para sua rotina.",
  "Acompanhamento mais leve para transformar hábitos em decisões melhores.",
];

export default function FininhoSection() {
  return (
    <section className="px-4 py-20 font-outfit md:px-6" id="fininho">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2.5rem] border border-[#E8DFD2] bg-[#F5F4F1] px-6 py-10 md:grid-cols-[1fr_0.95fr] md:px-10 md:py-12">
        <div className="max-w-[35rem]">
          <p className="text-[1rem] font-bold text-[#3D8A5A]">Agente de IA</p>
          <h2 className="mt-2 text-[2.2rem] font-bold leading-tight text-[#111111] md:text-[3.4rem]">
            Conheça o Fininho, seu parceiro para se organizar financeiramente
          </h2>
          <p className="mt-5 text-[1rem] leading-7 text-[#6D6C6A]">
            O Fininho será o agente de IA da ProFin criado para ajudar as
            pessoas a entender melhor seus hábitos, ajustar seus gastos e montar
            uma rotina financeira mais saudável sem complicação.
          </p>
          <p className="mt-4 text-[1rem] leading-7 text-[#6D6C6A]">
            Em vez de só mostrar números, ele vai orientar você com insights,
            recomendações e próximos passos claros para manter suas finanças em
            ordem e continuar aproveitando o que gosta.
          </p>

          <div className="mt-8 grid gap-4">
            {fininhoHighlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-4 rounded-[1.25rem] border border-white/70 bg-white/80 px-5 py-4"
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C8F0D8] text-[0.9rem] font-bold text-[#2C6C45]">
                  ✓
                </span>
                <p className="text-[1rem] leading-7 text-[#4F4E4B]">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative rounded-[2rem] border border-white/80 bg-white p-4">
            <Image
              src={fininhoImage}
              alt="Fininho, agente de IA da ProFin"
              className="h-auto w-full max-w-[29rem] object-contain"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
