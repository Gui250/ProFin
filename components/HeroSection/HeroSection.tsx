export default function HeroSection() {
  return (
    <section className="min-h-[12rem] pb-8 flex flex-col items-center justify-center px-4">
      <div>
        <h1 className="text-center text-[2rem] md:text-[3.5rem] font-bold font-outfit leading-tight w-full max-w-[37.5rem]">
          Assuma o controle dos seus gastos com{" "}
          <span className="text-[#3D8A5A]">lazer</span>
        </h1>
      </div>
      <p className="text-[#6D6C6A] mt-[1.2rem] text-[1rem] w-full max-w-[40.18rem] text-center">
        Orçamento inteligente para as coisas divertidas. Acompanhe gastos com
        restaurantes, viagens, shows, hobbies e vida noturna — para que você
        possa aproveitar mais sem culpa.
      </p>
    </section>
  );
}
