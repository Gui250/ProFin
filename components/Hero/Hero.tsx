export default function Hero() {
  return (
    <section className="flex justify-center mt-[4.125rem]">
      <div className="relative overflow-hidden text-[1rem] text-[#3D8A5A] bg-[#C8F0D8] w-[16.375rem] h-[2.75rem] rounded rounded-full flex items-center justify-center">
        <span
          className="absolute top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg]"
          style={{ animation: "shine 2.5s ease-in-out infinite" }}
        />
        Finanças inteligentes para Lazer
      </div>
    </section>
  );
}
