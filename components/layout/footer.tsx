const footerLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6 font-outfit md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-[#ECE8E0] bg-[#FBFAF6] px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <h2 className="text-[1.5rem] font-semibold text-[#3D8A5A]">ProFin</h2>
          <p className="mt-2 text-[0.95rem] text-[#6D6C6A]">
            © ProFin - Todos os direitos reservados
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <ul className="flex flex-col gap-3 text-[1rem] text-[#6D6C6A] md:flex-row md:gap-8">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[#3D8A5A]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
