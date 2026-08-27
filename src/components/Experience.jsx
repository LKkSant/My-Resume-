import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "2025 - Atual",
    company: "ViewB Analytics",
    role: "Analista de Dados",
    description:
      "Atuação em análise e modelagem de dados, transformando informações de múltiplas fontes em insights estratégicos para suporte à tomada de decisão. Desenvolvimento de dashboards interativos com foco em Business Intelligence (BI), data storytelling e indicadores de desempenho. Experiência em modelagem dimensional, processos ETL/ELT, tratamento e padronização de dados conforme regras de negócio. Domínio de SQL avançado para consultas, procedimentos armazenados e manipulação de grandes volumes de dados. Suporte técnico N1 e N2 em ambientes analíticos, atuando na resolução de incidentes e validação de dados.",
    technologies: [
      "SQL Server",
      "Power BI",
      "ETL/ELT",
      "Modelagem Dimensional",
      "Data Storytelling",
       "Business Intelligence",   
       "Python",
       "Excel Avançado",    
      
    ],
  },
  {
    period: "2023 - 2025",
    company: "Paschoalotto",
    role: "Analista de Dados",
    description:
      "Responsável pela análise de dados jurídicos e geração de insights para apoio à tomada de decisão. Desenvolvimento e acompanhamento de KPIs operacionais, incluindo SLA, lead time, backlog, produtividade e taxa de êxito. Automação de processos utilizando Power Query e Power Automate, reduzindo atividades manuais e aumentando a eficiência operacional. Atuação na padronização de processos e melhoria contínua, garantindo maior qualidade e confiabilidade das informações.",
    technologies: ["Power Query", "Power BI", "Excel Avançado", "Power Automate", "Business Intelligence"],
  },
  {
    period: "2023 - Atual",
    company: "Autonomo",
    role: "Desenvolvedor Fullstack",
    description:
      "Atuo como desenvolvedor Full Stack, criando aplicações web modernas e responsivas. Experiência em desenvolvimento front-end com React, Next.js e Tailwind CSS, garantindo interfaces intuitivas e de alta performance. No back-end, utilizo Node.js e Express para construir APIs robustas e escaláveis. Integração com bancos de dados relacionais e não relacionais, além de implementação de autenticação e autorização de usuários. Foco em boas práticas de desenvolvimento, testes automatizados e versionamento de código com Git.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "SQL", "MySQL", "Git", "REST APIs", "Python", "JavaScript", "TypeScript"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 bg-white dark:bg-[#111111] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="uppercase tracking-[6px] text-blue-600 dark:text-blue-400">
            Carreira
          </span>

          <h2 className="mt-4 text-5xl font-bold text-zinc-900 dark:text-white">
            Experiência Profissional
          </h2>
        </div>

        <div className="relative ml-5 border-l border-zinc-300 dark:border-zinc-700">

          {experiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-16 pl-12"
            >

              <div className="absolute -left-6 top-2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-blue-600 dark:border-[#111111]">
                <Briefcase size={20} className="text-white" />
              </div>

              <span className="text-sm text-blue-600 dark:text-blue-400">
                {job.period}
              </span>

              <h3 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">
                {job.company}
              </h3>

              <p className="mt-2 text-xl text-zinc-700 dark:text-zinc-300">
                {job.role}
              </p>

              <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-400">
                {job.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-blue-200
                      bg-blue-50
                      px-4
                      py-2
                      text-sm
                      text-blue-700
                      transition-colors
                      duration-300

                      dark:border-blue-500/40
                      dark:bg-blue-500/10
                      dark:text-blue-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}