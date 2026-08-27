import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

import Curriculo from "../assets/Curriculo.pdf";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Sobre", href: "#about" },
    { name: "Experiência", href: "#experience" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/80 dark:bg-black/70 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10"
      : "bg-transparent"
  }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
       <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
  Me<span className="text-blue-500">.</span>
</h1>

        {/* Desktop */}
        <nav className="hidden md:flex gap-8 text-sm text-zinc-700 dark:text-zinc-300">
  {links.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className="transition hover:text-blue-500"
    >
      {link.name}
    </a>
  ))}
</nav>

        {/* Botão */}
     <div className="hidden md:flex items-center gap-4">

  <LanguageSwitcher />

  <ThemeToggle />

 <button className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-white transition cursor-pointer hover:bg-blue-700" onClick={() => window.open(Curriculo, "_blank")}>
  <Download size={18} />
  Currículo
</button>
</div>

        {/* Mobile */}
      <button
  className="md:hidden text-zinc-900 dark:text-white"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <X /> : <Menu />}
</button>
      </div>

      {/* Menu Mobile */}
    {menuOpen && (
  <div className="md:hidden border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-[#121212] transition-colors duration-300">

    <nav className="flex flex-col gap-5 p-6">

      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className="text-zinc-800 dark:text-zinc-300 hover:text-blue-500 transition"
        >
          {link.name}
        </a>
      ))}

      <div className="flex items-center justify-between pt-4">

        <LanguageSwitcher />

        <ThemeToggle />

      </div>

      <button className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700 transition">
        <Download size={18} />
        Currículo
      </button>

    </nav>

  </div>
)}          
        
    </header>
  );
}