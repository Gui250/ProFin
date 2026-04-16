export default function WaitlistSection() {
  return (
    <section className="px-4 py-20 font-outfit md:px-6" id="acesso-antecipado">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#F5F4F1] px-6 py-12 md:px-10 md:py-14">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_0.95fr]">
          <div className="max-w-[33rem]">
            <p className="text-[1rem] font-bold text-[#3D8A5A]">
              Acesso antecipado
            </p>
            <h2 className="mt-3 text-[2rem] font-bold leading-tight md:text-[3rem]">
              Entre na lista de espera da ProFin
            </h2>
            <p className="mt-4 text-[1rem] leading-7 text-[#6D6C6A]">
              Seja um dos primeiros a testar e organizar sua vida financeira
              com mais simplicidade.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-white/70 bg-white/80 px-5 py-4">
                <p className="text-[0.8rem] uppercase tracking-[0.12em] text-[#8B887F]">
                  Prioridade
                </p>
                <p className="mt-2 text-[1.5rem] font-bold text-[#111111]">
                  Early access
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-white/70 bg-white/80 px-5 py-4">
                <p className="text-[0.8rem] uppercase tracking-[0.12em] text-[#8B887F]">
                  Atualizações
                </p>
                <p className="mt-2 text-[1.5rem] font-bold text-[#111111]">
                  Em primeira mão
                </p>
              </div>
            </div>
          </div>

          <form className="rounded-[1.75rem] border border-white/80 bg-white p-6">
            <div className="grid gap-4">
              <label className="text-[0.95rem] font-medium text-[#111111]">
                Nome
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  className="mt-2 h-12 w-full rounded-[0.875rem] border border-[#E5E2DB] bg-white px-4 text-[1rem] text-[#111111] outline-none transition-colors placeholder:text-[#9B9994] focus:border-[#3D8A5A]"
                />
              </label>

              <label className="text-[0.95rem] font-medium text-[#111111]">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="voce@email.com"
                  className="mt-2 h-12 w-full rounded-[0.875rem] border border-[#E5E2DB] bg-white px-4 text-[1rem] text-[#111111] outline-none transition-colors placeholder:text-[#9B9994] focus:border-[#3D8A5A]"
                />
              </label>

              <label className="mt-1 flex items-start gap-3 text-[0.95rem] leading-6 text-[#6D6C6A]">
                <input
                  type="checkbox"
                  name="communications"
                  className="mt-1 h-4 w-4 rounded border border-[#CFCBC3] accent-[#3D8A5A]"
                />
                <span>
                  Ao me cadastrar, concordo em receber comunicações da ProFin
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 h-12 rounded-[0.875rem] bg-[#3D8A5A] px-5 text-[1rem] font-bold text-white transition-colors hover:bg-[#2F744C]"
              >
                Quero acesso antecipado
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
