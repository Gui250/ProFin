import Image from "next/image";

import heroImage from "../../assets/images/profin-hero 1.png";

export default function HeroSection() {
  return (
    <section className="grid items-center gap-12 pb-8 pt-10 md:grid-cols-[1.02fr_0.98fr] md:pt-14">
      <div>
        <h1 className="max-w-[11ch] font-outfit text-[2.8rem] font-bold leading-[0.96] text-[#111111] md:text-[5.25rem]">
          Assuma o controle dos seus gastos com{" "}
          <span className="text-[#3D8A5A]">lazer</span>
        </h1>

        <p className="mt-6 max-w-[38rem] text-[1.08rem] leading-8 text-[#6D6C6A] md:text-[1.14rem]">
          Orçamento inteligente para restaurantes, viagens, shows, hobbies e
          vida noturna. A ProFin transforma seus gastos em clareza, metas e
          decisões melhores para você aproveitar mais sem culpa.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#acesso-antecipado"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#3D8A5A] px-7 text-[1rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#2F744C]"
          >
            Quero acesso antecipado
          </a>
          <a
            href="#funcionalidades"
            className="inline-flex h-14 items-center justify-center rounded-full border border-[#DCCFBE] bg-white px-7 text-[1rem] font-semibold text-[#2C6C45] transition-colors hover:border-[#3D8A5A]"
          >
            Ver funcionalidades
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="cursor-pointer rounded-[1.5rem] border border-[#E8DFD2] bg-white/80 px-5 py-5 transition-transform duration-300 ease-out hover:scale-[1.03]">
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#8B887F]">
              Visão mensal
            </p>
            <p className="mt-2 text-[1.8rem] font-bold text-[#111111]">+92%</p>
            <p className="mt-2 text-[0.95rem] leading-6 text-[#6D6C6A]">
              Mais clareza sobre hábitos de lazer.
            </p>
          </div>
          <div className="cursor-pointer rounded-[1.5rem] border border-[#E8DFD2] bg-white/80 px-5 py-5 transition-transform duration-300 ease-out hover:scale-[1.03]">
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#8B887F]">
              Metas ativas
            </p>
            <p className="mt-2 text-[1.8rem] font-bold text-[#111111]">3x</p>
            <p className="mt-2 text-[0.95rem] leading-6 text-[#6D6C6A]">
              Mais consistência no orçamento divertido.
            </p>
          </div>
          <div className="cursor-pointer rounded-[1.5rem] border border-[#E8DFD2] bg-white/80 px-5 py-5 transition-transform duration-300 ease-out hover:scale-[1.03]">
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#8B887F]">
              Ajustes com IA
            </p>
            <p className="mt-2 text-[1.8rem] font-bold text-[#111111]">24h</p>
            <p className="mt-2 text-[0.95rem] leading-6 text-[#6D6C6A]">
              Recomendações rápidas e fáceis de aplicar.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#E8DFD2] bg-white p-3">
          <div className="rounded-[1.5rem] bg-[#F6F4EE] p-4">
            <Image
              src={heroImage}
              alt="Visual da interface da ProFin"
              className="h-auto w-full rounded-[1.25rem] object-cover"
              priority
            />
          </div>

          <div className="absolute bottom-8 left-8 rounded-[1.25rem] border border-white/70 bg-white px-5 py-4">
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#8B887F]">
              Orçamento do mês
            </p>
            <p className="mt-2 text-[1.6rem] font-bold text-[#111111]">
              R$ 820 livres
            </p>
            <p className="mt-1 text-[0.95rem] text-[#3D8A5A]">
              Meta saudável para gastar com lazer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
