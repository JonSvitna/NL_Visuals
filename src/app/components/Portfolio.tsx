import { AnimatePresence, motion, useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const [active, setActive] = useState<number | null>(null);

  const step = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, step]);

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

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:snap-none lg:overflow-hidden lg:pb-0">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[420px] min-w-[240px] flex-1 snap-center overflow-hidden rounded-lg cursor-pointer lg:min-w-0 lg:transition-[flex-grow] lg:duration-500 lg:hover:flex-[2]"
            >
              <motion.img
                layoutId={`portfolio-img-${index}`}
                src={image.url}
                alt={image.title}
                onClick={() => setActive(index)}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="mb-2 text-sm text-gray-400 uppercase tracking-wider">{image.category}</p>
                  <h3 className="font-bold text-2xl text-white">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={images[active].title}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              key={active}
              layoutId={`portfolio-img-${active}`}
              src={images[active].url}
              alt={images[active].title}
              className="max-h-full max-w-full rounded-lg object-contain"
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
              onClick={() => setActive(null)}
            >
              ✕
            </button>
            <button
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-2xl text-white hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
            >
              ‹
            </button>
            <button
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-2xl text-white hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); step(1); }}
            >
              ›
            </button>
            <p className="pointer-events-none absolute bottom-4 left-0 right-0 text-center text-white">
              {images[active].title} · {images[active].category}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
