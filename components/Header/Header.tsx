export default function Header() {
  return (
    <header className="font-outfit flex items-center justify-between px-[3.5rem] my-[2.375rem]">
      <div>
        <h2 className="text-[#3D8A5A] text-[1.5rem] font-semibold">ProFin</h2>
      </div>

      <nav>
        <ul className="text-[#6D6C6A] flex gap-[2.5rem]">
          <li>Funcionalidades</li>
          <li>Planos</li>
          <li>FAQ</li>
        </ul>
      </nav>

      <button className="font-bold cursor-pointer bg-[#3D8A5A] px-[0.5625rem] py-[0.8125rem] rounded-[0.625rem] text-white hover:bg-[#3D8A5A]/80 transition-colors">
        Comece Agora
      </button>
    </header>
  );
}
