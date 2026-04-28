import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative bg-black px-6 py-24 md:py-32" ref={ref}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1624219297569-4a9abfb68c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMEJhbHRpbW9yZSUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NzM5MDAwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Baltimore"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 font-bold text-6xl text-white md:text-7xl">
            Let's Create Together
          </h2>
          <p className="mb-12 text-xl text-gray-400">
            Ready to capture your vision? Get in touch and let's make something incredible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-6"
        >
          <a
            href="mailto:contact@nlvisuals.com"
            className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all hover:bg-gray-200 hover:scale-105"
          >
            <Mail className="h-5 w-5" />
            Email Us
          </a>
          <a
            href="tel:+1234567890"
            className="group flex items-center gap-3 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-black"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-8"
        >
          <a
            href="https://www.facebook.com/nlvisuals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-all hover:text-white hover:scale-110"
          >
            <Facebook className="h-8 w-8" />
          </a>
          <a
            href="https://instagram.com/nlvisuals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-all hover:text-white hover:scale-110"
          >
            <Instagram className="h-8 w-8" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 border-t border-gray-800 pt-8"
        >
          <p className="text-gray-500">© 2026 NL Visuals. Baltimore, MD</p>
        </motion.div>
      </div>
    </section>
  );
}
