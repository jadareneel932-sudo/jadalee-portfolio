import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import photo1 from "@assets/DSC_5644_1773803594985.JPG";
import photo2 from "@assets/DSC_6084_1773803594985.JPG";
import photo3 from "@assets/DSC_6197_1773803594985.JPG";
import photo4 from "@assets/DSC_6294_1773803594985.JPG";
import photo5 from "@assets/DSC_6472_1773803594985.JPG";
import photo6 from "@assets/DSC_6645_1773803594985.JPG";
import photo7 from "@assets/TimmyConner_8402_JL_1773803594985.png";
import photo8 from "@assets/JaydonSmith_8387_JL_1773803594985.png";
import photo9 from "@assets/TimmyConner_8400_JL_1773803594985.png";

import life20 from "@assets/IMG_1325_1773805074200.jpeg";
import life21 from "@assets/IMG_1333_1773805074200.jpeg";
import life22 from "@assets/D6E8EBD4-5761-4666-B0C1-96C0209F9BB6_1773805074200.jpeg";
import life23 from "@assets/IMG_0792_1773805074200.jpeg";
import life24 from "@assets/IMG_0689_1773805074200.jpeg";
import life25 from "@assets/IMG_2740_1773805074200.jpeg";
import life26 from "@assets/07C05C36-DF0A-4124-9C52-70341B421650_1773805074200.jpeg";
import life27 from "@assets/IMG_2365_1773805074201.jpeg";
import life28 from "@assets/891E2286-AB59-43FC-8110-120615211FAD_1773805074201.jpeg";
import life29 from "@assets/IMG_2250_1773805074201.jpeg";

import life1 from "@assets/IMG_7363_1773804347907.jpeg";
import life2 from "@assets/IMG_7357_1773804347907.jpeg";
import life3 from "@assets/IMG_7350_1773804347907.jpeg";
import life4 from "@assets/IMG_7351_1773804347907.jpeg";
import life5 from "@assets/IMG_7353_1773804347907.jpeg";
import life6 from "@assets/IMG_7793_1773804347907.jpeg";
import life7 from "@assets/IMG_7742_1773804347907.jpeg";
import life8 from "@assets/IMG_8087_1773804655360.jpeg";
import life9 from "@assets/IMG_7348_1773804655360.jpeg";
import life10 from "@assets/IMG_7349_1773804655360.jpeg";
import life11 from "@assets/IMG_7334_1773804655360.jpeg";
import life12 from "@assets/IMG_6492_1773804655360.jpeg";
import life13 from "@assets/IMG_5456_1773804655360.jpeg";
import life14 from "@assets/IMG_5391_1773804655360.jpeg";
import life15 from "@assets/IMG_5206_1773804655360.jpeg";
import life16 from "@assets/IMG_4929_1773804655360.jpeg";
import life17 from "@assets/IMG_1796_1773804655360.jpeg";
import life18 from "@assets/IMG_1581_1773804655360.jpeg";
import life19 from "@assets/5AB024A0-7581-4D42-8F6F-96D31DACEFB4_1773804655360.jpeg";

const categories = [
  {
    id: "sports",
    label: "Sports",
    description: "Court-side and sideline — capturing athletes in motion.",
    photos: [
      { src: photo1, alt: "Women's basketball rebound" },
      { src: photo2, alt: "Men's basketball layup" },
      { src: photo3, alt: "Raiders basketball game action" },
      { src: photo4, alt: "Shippensburg sideline" },
      { src: photo5, alt: "Raiders dunk" },
      { src: photo6, alt: "Raiders dribble" },
      { src: photo7, alt: "Timmy Conner shooting" },
      { src: photo8, alt: "Jaydon Smith layup" },
      { src: photo9, alt: "Timmy Conner driving" },
    ],
  },
  {
    id: "lifestyle",
    label: "Lifestyle & Travel",
    description: "Places, moments, and scenes from life beyond the press box.",
    photos: [
      { src: life1, alt: "St. Patrick's Cathedral NYC" },
      { src: life2, alt: "The Plaza Hotel NYC" },
      { src: life3, alt: "St. Patrick's Cathedral interior" },
      { src: life4, alt: "Gothic cathedral NYC" },
      { src: life5, alt: "Louis Vuitton NYC" },
      { src: life6, alt: "Concert performance" },
      { src: life7, alt: "Mariah the Scientist at the Anthem" },
      { src: life8, alt: "City lights from above" },
      { src: life9, alt: "Radio City Music Hall" },
      { src: life10, alt: "Church candles" },
      { src: life11, alt: "Gourmet toast" },
      { src: life12, alt: "Philadelphia City Hall at night" },
      { src: life13, alt: "Street clock downtown" },
      { src: life14, alt: "PA Capitol building" },
      { src: life15, alt: "Carnival at dusk" },
      { src: life16, alt: "Picnic by the pond" },
      { src: life17, alt: "Shippensburg University campus" },
      { src: life18, alt: "Laguna Beach lifeguard station" },
      { src: life19, alt: "Dumplings" },
      { src: life20, alt: "Aerial mountain view from plane window" },
      { src: life21, alt: "In-N-Out Burger California" },
      { src: life22, alt: "Phillies game at Citizens Bank Park" },
      { src: life23, alt: "Citizens Bank Park night game" },
      { src: life24, alt: "Philadelphia skyline downtown street" },
      { src: life25, alt: "Cherry blossoms on campus" },
      { src: life26, alt: "Green juice shot in Boca Raton" },
      { src: life27, alt: "Atlantic Avenue Delray Beach" },
      { src: life28, alt: "Brunch spread" },
      { src: life29, alt: "Palm Beach streetscape" },
    ],
  },
];

type LightboxState = { photos: { src: string; alt: string }[]; index: number } | null;

export default function Photography() {
  const [activeTab, setActiveTab] = useState("sports");
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const active = categories.find((c) => c.id === activeTab)!;

  const openLightbox = (photos: { src: string; alt: string }[], index: number) =>
    setLightbox({ photos, index });

  const prev = () =>
    setLightbox((l) => l && { ...l, index: (l.index - 1 + l.photos.length) % l.photos.length });

  const next = () =>
    setLightbox((l) => l && { ...l, index: (l.index + 1) % l.photos.length });

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-12 px-6 md:px-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="luxury-label text-primary tracking-[0.3em] mb-4 block">Portfolio</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-6">Photography</h1>
          <p className="text-foreground/60 max-w-xl mx-auto text-lg">A visual record of the stories behind the stories.</p>
        </motion.div>
      </section>

      <div className="flex justify-center gap-2 px-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
              activeTab === cat.id
                ? "bg-primary text-white shadow-md"
                : "bg-card border border-border text-foreground/60 hover:text-foreground hover:border-primary/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
          className="px-6 md:px-16 pb-28"
        >
          <p className="text-center text-foreground/50 text-sm mb-10 tracking-wide">{active.description}</p>
          <div className="columns-2 md:columns-3 gap-4 max-w-6xl mx-auto">
            {active.photos.map((photo, i) => (
              <motion.div
                key={i}
                className="break-inside-avoid mb-4 overflow-hidden rounded-xl cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => openLightbox(active.photos, i)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors" onClick={() => setLightbox(null)}>
              <X size={28} />
            </button>
            <button className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors" onClick={(e) => { e.stopPropagation(); prev(); }}>
              <ChevronLeft size={36} />
            </button>
            <motion.img
              key={lightbox.index}
              src={lightbox.photos[lightbox.index].src}
              alt={lightbox.photos[lightbox.index].alt}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="absolute right-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors" onClick={(e) => { e.stopPropagation(); next(); }}>
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
