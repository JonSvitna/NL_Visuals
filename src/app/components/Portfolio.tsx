import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const images = [
  { url: "/portfolio/portfolio-1.jpg", title: "Golden Hour Toast", category: "Lifestyle" },
  { url: "/portfolio/portfolio-2.jpg", title: "Through the Gate", category: "Travel" },
  { url: "/portfolio/portfolio-3.jpg", title: "The First Kiss", category: "Wedding" },
  { url: "/portfolio/portfolio-4.jpg", title: "Dapper Joy", category: "Portrait" },
  { url: "/portfolio/portfolio-5.jpg", title: "Pure Laughter", category: "Events" },
  { url: "/portfolio/portfolio-6.jpg", title: "Quiet Moment", category: "Family" }
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="bg-zinc-900 px-6 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-bold text-6xl text-white md:text-7xl">Portfolio</h2>
          <p className="text-xl text-gray-400">A glimpse into Baltimore's soul</p>
        </motion.div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:overflow-visible">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[420px] min-w-[240px] flex-1 snap-center overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="mb-2 text-sm text-gray-400 uppercase tracking-wider">{image.category}</p>
                  <h3 className="font-bold text-2xl text-white">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
