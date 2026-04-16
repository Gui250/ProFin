export default function ContactSection() {
  return (
    <section className="px-4 py-20 font-outfit md:px-6" id="contato">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-[#ECE8E0] bg-white px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-[27rem]">
            <p className="text-[1rem] font-bold text-[#3D8A5A]">Contato</p>
            <h2 className="mt-2 text-[2rem] font-bold leading-tight md:text-[3rem]">
              Fale com a ProFin
            </h2>
            <p className="mt-4 text-[1rem] leading-7 text-[#6D6C6A]">
              Se quiser saber mais ou tirar alguma dúvida, envie uma mensagem.
              Vamos adorar falar com você.
            </p>

            <a
              href="https://wa.me/5500000000000"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[#C8F0D8] px-5 text-[1rem] font-semibold text-[#2C6C45] transition-colors hover:bg-[#B9E7CC]"
            >
              Falar via WhatsApp
            </a>

            <div className="mt-8 rounded-[1.5rem] bg-[#F5F4F1] p-5">
              <p className="text-[0.82rem] uppercase tracking-[0.14em] text-[#8B887F]">
                Resposta humana
              </p>
              <p className="mt-3 text-[1rem] leading-7 text-[#6D6C6A]">
                Seja para dúvidas, parcerias ou feedback, queremos construir a
                ProFin com uma experiência próxima e útil desde o começo.
              </p>
            </div>
          </div>

          <form className="rounded-[1.75rem] bg-[#F5F4F1] p-6 md:p-7">
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

              <label className="text-[0.95rem] font-medium text-[#111111]">
                Mensagem
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Como podemos ajudar?"
                  className="mt-2 w-full rounded-[0.875rem] border border-[#E5E2DB] bg-white px-4 py-3 text-[1rem] text-[#111111] outline-none transition-colors placeholder:text-[#9B9994] focus:border-[#3D8A5A]"
                />
              </label>

              <button
                type="submit"
                className="mt-2 h-12 rounded-[0.875rem] bg-[#3D8A5A] px-5 text-[1rem] font-bold text-white transition-colors hover:bg-[#2F744C]"
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
