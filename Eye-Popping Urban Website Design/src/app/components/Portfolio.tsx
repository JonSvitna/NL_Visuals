import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1672059928294-210dc79e7ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx1cmJhbiUyMEJhbHRpbW9yZSUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NzM5MDAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Urban Stories",
    category: "Street"
  },
  {
    url: "https://images.unsplash.com/photo-1550697278-2b4ffe4b910f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx1cmJhbiUyMEJhbHRpbW9yZSUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NzM5MDAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "City Lines",
    category: "Architecture"
  },
  {
    url: "https://images.unsplash.com/photo-1596992211168-76ef9679047e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx1cmJhbiUyMEJhbHRpbW9yZSUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NzM5MDAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Heritage",
    category: "Architecture"
  },
  {
    url: "https://images.unsplash.com/photo-1748914033839-25e049eb6097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx1cmJhbiUyMEJhbHRpbW9yZSUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NzM5MDAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Reflections",
    category: "Urban"
  },
  {
    url: "https://images.unsplash.com/photo-1617603000700-06bd452f3a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx1cmJhbiUyMEJhbHRpbW9yZSUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NzM5MDAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Rooftop View",
    category: "Lifestyle"
  },
  {
    url: "https://images.unsplash.com/photo-1768579026181-9bdb68ac6f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHx1cmJhbiUyMEJhbHRpbW9yZSUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NzM5MDAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Skyline",
    category: "Architecture"
  }
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
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
