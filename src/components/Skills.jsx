import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 92 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Java", level: 80 },
      { name: "C#", level: 75 },
    ],
  },
  {
    category: "Dados",
    items: [
      { name: "SQL Server", level: 95 },
      { name: "Power BI", level: 95 },
      { name: "Power Query", level: 90 },
      { name: "Python", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="uppercase tracking-[6px] text-blue-400">
            Skills
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Tecnologias
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Ferramentas que utilizo diariamente para desenvolver soluções,
            automações e projetos completos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >

              <h3 className="text-2xl font-bold mb-8">
                {group.category}
              </h3>

              {group.items.map((skill) => (
                <div key={skill.name} className="mb-6">

                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="text-zinc-400">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-zinc-800">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full bg-blue-500"
                    />

                  </div>

                </div>
              ))}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}