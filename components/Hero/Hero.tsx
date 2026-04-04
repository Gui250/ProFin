import HeroSection from "../HeroSection/HeroSection";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center mt-8 md:mt-[4.125rem] pb-16">
      <div className="relative overflow-hidden text-[0.875rem] md:text-[1rem] text-[#3D8A5A] bg-[#C8F0D8] w-auto px-6 h-[2.75rem] rounded rounded-full flex items-center justify-center">
        <span
          className="absolute top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg]"
          style={{ animation: "shine 2.5s ease-in-out infinite" }}
        />
        Finanças inteligentes para Lazer
      </div>
      <HeroSection />
    </section>
  );
}
