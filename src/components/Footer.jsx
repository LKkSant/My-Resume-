import { ArrowUp, Mail } from "lucide-react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              Lucas<span className="text-blue-500">.</span>
            </h2>

            <p className="text-zinc-400 mt-3">
              Analista de Dados • Full Stack Developer
            </p>
          </div>

          {/* Redes */}
          <div className="flex gap-5">

            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
            >
              <img src={github} alt="GitHub" className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/seuperfil"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
            >
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>

            <a
              href="mailto:seuemail@email.com"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
            >
              <Mail size={20} />
            </a>

          </div>

        </div>

        {/* Linha */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Lucas Santos. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">

            <span className="text-sm text-zinc-500">
              Desenvolvido com React + Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center"
            >
              <ArrowUp size={18} />
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}