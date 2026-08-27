import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download} from "lucide-react";

import Capturar from "../assets/Capturar.png";
import Curriculo from "../assets/Curriculo.pdf";  

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-zinc-900 transition-colors duration-500 dark:bg-[#080808] dark:text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/20" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[120px] dark:bg-blue-500/10" />

      {/* Grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)]
          bg-[size:60px_60px]
          dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
        "
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            Available for opportunities
          </motion.div>

          <span className="block text-sm font-medium uppercase tracking-[5px] text-blue-600 dark:text-blue-400">
            Hi, my name is
          </span>

          {/* Name */}
          <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Lucas B.{" "}
            <span className="text-blue-600 dark:text-blue-500">
              Santos
            </span>
          </h1>

          {/* Typing */}
          <div className="mt-7 h-10 text-xl font-semibold text-zinc-700 dark:text-zinc-300 sm:text-2xl">
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "Full Stack Developer",
                2000,
                "BI Developer",
                2000,
                "Data & Technology",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            I transform data into strategic insights and build modern
            applications focused on performance, usability and real
            business results.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              See my work

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href={Curriculo}
              download
              className="flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3.5 font-medium text-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              <Download size={18} />
              Download CV
            </a>

          </div>

          {/* Social */}
          <div className="mt-10 flex items-center gap-4">

          
          </div>
        </motion.div>

        {/* PROFILE */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >

          <div className="relative">

            {/* Outer glow */}
            <div className="absolute -inset-10 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/20" />

            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-6 rounded-full border border-dashed border-blue-500/30"
            />

            {/* Image container */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-2xl shadow-blue-500/20 dark:border-[#151515] sm:h-96 sm:w-96">

              <img
                src={Capturar}
                alt="Lucas B. Santos"
                className="h-full w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-8 rounded-2xl border border-zinc-200 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#111]/90"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <span className="text-lg font-bold">
                    {"</>"}
                  </span>
                </div>

                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Focus
                  </p>

                  <p className="font-semibold text-zinc-900 dark:text-white">
                    Data & Development
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Floating status */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-5 top-10 rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#111]/90"
            >
              <div className="flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />

                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  Open to work
                </span>

              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent dark:from-[#080808]" />

    </section>
  );
}