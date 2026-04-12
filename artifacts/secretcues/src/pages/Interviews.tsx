import { motion } from "framer-motion";

export default function Interviews() {
  return (
    <main className="w-full min-h-screen bg-background">

      {/* HEADER */}
      <section className="pt-28 pb-10 px-6 md:px-12 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.08) 39px,rgba(255,255,255,.08) 40px)" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <span className="luxury-label text-white/40 tracking-[0.3em] mb-4 block">Conversations</span>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-tight mb-4 text-white">
            Interviews
          </h1>
          <p className="text-white/60 max-w-xl text-base leading-relaxed">
            One-on-one conversations with athletes, creatives, and changemakers — told with intention, depth, and heart.
          </p>
        </div>
      </section>

      {/* SHIPTALK SECTION */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <span className="luxury-label text-primary tracking-[0.3em] mb-3 block">Featured</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Ship<em className="text-primary">Talk</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/rY6zKHcmeLE"
              title="ShipTalk"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="px-6 py-4 border-t border-border">
            <p className="text-sm text-foreground/60">
              To view: <span className="font-semibold text-foreground">29:03–30:27</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* HEATHER McGHEE SECTION */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <span className="luxury-label text-primary tracking-[0.3em] mb-3 block">Featured</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Heather <em className="text-primary">McGhee</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/Z8UEp9nfTUg"
              title="House Speaker McClinton"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="px-6 py-4 border-t border-border">
            <p className="text-sm text-foreground/60">
              To view: <span className="font-semibold text-foreground">13:34–14:44</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* WEATHER REPORTING SECTION */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <span className="luxury-label text-primary tracking-[0.3em] mb-3 block">Featured</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Weather <em className="text-primary">Reporting</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/Z8UEp9nfTUg"
              title="Weather Reporting"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="px-6 py-4 border-t border-border">
            <p className="text-sm text-foreground/60">
              To view: <span className="font-semibold text-foreground">25:45–27:20</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* REP. JOANNA McCLINTON SECTION */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <span className="luxury-label text-primary tracking-[0.3em] mb-3 block">Featured</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            American Politician, Rep. <em className="text-primary">Joanna McClinton</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/3gZaDGAsVnI"
              title="American Politician, Rep. Joanna McClinton"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </section>

    </main>
  );
}
