import { motion } from "framer-motion";
import { ExternalLink, GitBranchPlusIcon } from "lucide-react";
import github from "../assets/github.png";


import larisfit from "../assets/larisfit.PNG";
import dashboard from "../assets/dashboard.png";
import ecommerce from "../assets/ecommerce.PNG";

const projects = [
  {
    title: "E-commerce Gamer",
    image: ecommerce,
    description:
      "Loja virtual desenvolvida em React com foco em performance e experiência do usuário.",
    tech: ["React", "Tailwind", "Node.js"],
    GitBranchPlusIcon: "https://github.com/LKkSant/Ecommerce-Website-Layout-",
    demo: "https://ecommerce-plum-one-92.vercel.app/",
  },
  {
    title: "Larisfit Virtual Store",
    image: larisfit,
    description:
      "Loja virtual desenvolvida em React, para realização de pedidos na plataforma WhatsApp.",
    tech: ["React", "Tailwind", "Node.js"],
    GitBranchPlusIcon: "https://github.com/larisfit/larisfit",
    demo: "https://laris-fit-website.vercel.app/",
  },
  {
    title: "Dashboard Financeiro",
    image: dashboard,
    description:
      "Painel analítico para acompanhamento de indicadores financeiros utilizando Power BI.",
    tech: ["Power BI", "SQL Server", "DAX", "Excel"],
    GitBranchPlusIcon: "#",
    demo: "https://dashboard-financeiro.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
  id="projects"
  className="py-32 bg-white dark:bg-[#0D0D0D] transition-colors duration-300"
>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="uppercase tracking-[6px] text-blue-600 dark:text-blue-400">
  Portfólio
</span>

<h2 className="mt-4 text-5xl font-bold text-zinc-900 dark:text-white">
  Projetos em Destaque
</h2>

<p className="mx-auto mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
  Alguns projetos que representam minha experiência em
  desenvolvimento de software, análise de dados e automações.
</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-5 text-zinc-400 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-500/10 border border-blue-500/30 px-3 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.GitBranchPlusIcon}
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-5 cursor-pointer py-3 hover:border-blue-500 transition"
                  >
                    <GitBranchPlusIcon size={18} />
                    GitBranchPlusIcon
                  </a>

                  <a
                    href={project.demo}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 cursor-pointer hover:bg-blue-700 transition"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
