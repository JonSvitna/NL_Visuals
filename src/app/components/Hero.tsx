import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-40"
        >
          <source
            src="https://videos.pexels.com/video-files/34038015/14435779_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="mb-4 font-bold text-7xl text-white tracking-tight md:text-9xl">
            NL VISUALS
          </h1>
          <p className="mb-8 text-xl text-gray-300 md:text-2xl">
            Capturing Baltimore's Urban Soul
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex gap-4"
        >
          <a
            href="#portfolio"
            className="rounded-full bg-white px-8 py-3 font-semibold text-black transition-all hover:bg-gray-200 hover:scale-105"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-black"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-12"
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </motion.div>
      </div>
    </section>
  );
}
