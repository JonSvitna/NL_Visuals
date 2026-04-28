import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-black px-6 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-6 font-bold text-5xl text-white md:text-6xl">
              About NL Visuals
            </h2>
            <p className="mb-6 text-lg text-gray-400 leading-relaxed">
              We specialize in capturing the raw energy and authentic beauty of Baltimore's urban landscape. From gritty street photography to architectural masterpieces, our lens tells the story of a city that never stops evolving.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Every frame is a testament to the vibrant culture, diverse communities, and undeniable character that makes Baltimore home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1611458182083-d5120d829fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHx1cmJhbiUyMEJhbHRpbW9yZSUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NzM5MDAwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Baltimore cityscape at night"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-48 w-48 border-4 border-white/20 rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
