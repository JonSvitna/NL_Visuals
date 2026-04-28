import Image from "next/image";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    alt: "Golden hour landscape with rolling hills",
    category: "Landscape",
    title: "Golden Hour",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
    alt: "Dramatic mountain peaks at sunrise",
    category: "Landscape",
    title: "Mountain Peaks",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
    alt: "Misty forest in the morning",
    category: "Nature",
    title: "Morning Mist",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
    alt: "Vibrant wildflowers in a meadow",
    category: "Nature",
    title: "Wild Blooms",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
    alt: "Serene lake reflecting mountains",
    category: "Landscape",
    title: "Still Waters",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80",
    alt: "Birds flying over the ocean",
    category: "Wildlife",
    title: "Free Flight",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    alt: "Aerial view of winding river through forest",
    category: "Aerial",
    title: "River Bend",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
    alt: "Dense pine forest path",
    category: "Nature",
    title: "Forest Path",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80",
    alt: "Rocky coastline at dusk",
    category: "Coastal",
    title: "Rocky Shore",
  },
];

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50">
        <span className="text-xl font-semibold tracking-widest uppercase text-white">
          NL <span className="text-neutral-400">Visuals</span>
        </span>
        <ul className="hidden md:flex gap-8 text-sm text-neutral-400 tracking-wide">
          <li>
            <a href="#gallery" className="hover:text-white transition-colors">
              Gallery
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=90"
              alt="NL Visuals hero photograph"
              fill
              priority
              className="object-cover opacity-40"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/30 to-neutral-950" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <p className="text-neutral-400 tracking-[0.4em] uppercase text-sm mb-6">
              Photography Portfolio
            </p>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
              Capturing the world
              <br />
              <span className="italic text-neutral-300">as it truly is</span>
            </h1>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10">
              NL Visuals — landscapes, nature, and moments preserved through
              dedicated photography.
            </p>
            <a
              href="#gallery"
              className="inline-block border border-white/30 text-white px-10 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-neutral-950 transition-all duration-300"
            >
              View Gallery
            </a>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
              Gallery
            </h2>
            <p className="text-neutral-500 text-sm tracking-widest uppercase">
              Selected Works
            </p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="break-inside-avoid group relative overflow-hidden bg-neutral-900 cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/50 transition-all duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <div>
                    <p className="text-neutral-400 text-xs tracking-widest uppercase mb-1">
                      {photo.category}
                    </p>
                    <h3 className="text-white text-lg font-light">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="border-t border-neutral-800 px-6 md:px-12 py-24 max-w-7xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-neutral-500 text-sm tracking-widest uppercase mb-4">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
                The story behind the lens
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-4">
                NL Visuals is a photography project dedicated to documenting the
                natural world — from sweeping landscapes and intimate wildlife
                moments to the quiet drama of changing seasons.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Every image is an invitation to pause and notice the beauty that
                surrounds us every day, if only we take the time to look.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
              <Image
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"
                alt="Photographer at work"
                fill
                className="object-cover opacity-80"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="border-t border-neutral-800 px-6 md:px-12 py-24"
        >
          <div className="max-w-xl mx-auto text-center">
            <p className="text-neutral-500 text-sm tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
              Get in touch
            </h2>
            <p className="text-neutral-400 mb-10">
              Interested in prints, licensing, or collaboration? Reach out and
              let&apos;s create something together.
            </p>
            <a
              href="mailto:hello@nlvisuals.com"
              className="inline-block border border-white/30 text-white px-10 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-neutral-950 transition-all duration-300"
            >
              hello@nlvisuals.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-600 text-sm">
          <span className="tracking-widest uppercase">NL Visuals</span>
          <span>© {new Date().getFullYear()} NL Visuals. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
