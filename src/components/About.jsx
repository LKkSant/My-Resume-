import { motion } from "framer-motion";
import { Briefcase, Code2, Database } from "lucide-react";

const cards = [
  {
    icon: Briefcase,
    title: "3 years",
    description: "Professional experience",
  },
  {
    icon: Code2,
    title: "15+ Projects",
    description: "Developed applications",
  },
  {
    icon: Database,
    title: "10+ Technologies",
    description: "Mastered tools",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-[#0D0D0D]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <span className="uppercase tracking-[6px] text-blue-400">
            About Me
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Transforming Ideas into Solutions.
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-zinc-400 leading-8">
            I am a Data Analyst and Full Stack Developer, passionate about
            technology, automation, and creating modern solutions. I work
            daily with SQL, Power BI, React, Node.js and application
            development focused on performance and user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-8">
                  <Icon size={30} className="text-blue-400" />
                </div>

                <h3 className="text-3xl font-bold">
                  {card.title}
                </h3>

                <p className="text-zinc-400 mt-4">
                  {card.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}