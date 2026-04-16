import HeroSection from "./hero-section";

export default function Hero() {
  return (
    <section className="px-4 pb-16 pt-10 md:px-6 md:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="inline-flex h-[2.75rem] items-center justify-center rounded-full border border-[#B9E7CC] bg-[#C8F0D8] px-6 text-[0.875rem] text-[#2C6C45] md:text-[1rem]">
          Finanças inteligentes para lazer
        </div>
        <HeroSection />
      </div>
    </section>
  );
}
