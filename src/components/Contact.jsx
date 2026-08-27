import {
  Mail,
  Phone,
  Send
} from "lucide-react";

import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-[#111111]"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[6px] text-blue-400">
            Contato
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Vamos trabalhar juntos?
          </h2>

          <p className="text-zinc-400 mt-6">
            Estou aberto a oportunidades, novos projetos
            e desafios na área de tecnologia.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          <a
            href="lucasberthopaulo@hotmail.com"
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500 transition"
          >
            <Mail className="text-blue-400" />
            <div>
              <h3>Email</h3>
              <p className="text-zinc-400">
                lucasberthopaulo@hotmail.com
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/5514991980817"
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500 transition"
          >
            <Phone className="text-blue-400" />
            <div>
              <h3>WhatsApp</h3>
              <p className="text-zinc-400">
                55+(14)99198-0817
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com"
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500 transition"
          >
            <img
  src={linkedin}
  alt="LinkedIn"
  className="w-6 h-6"
/>
            <div>
              <h3>LinkedIn</h3>
            </div>
          </a>

          <a
            href="https://github.com"
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500 transition"
          >
            <img src={github} alt="GitHub" className="w-6 h-6" />
            <div>
              <h3>GitHub</h3>
            </div>
          </a>

        </div>

        <div className="flex justify-center mt-16">

          <a
            href="mailto:seuemail@email.com"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl transition"
          >
            <Send size={18}/>
            Entrar em contato
          </a>

        </div>

      </div>
    </section>
  );
}