import { motion } from "framer-motion";
import { Mic } from "lucide-react";

const interviews: {
  guest: string;
  role: string;
  topic: string;
  date: string;
  excerpt: string;
}[] = [];

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

      {/* CONTENT */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
        {interviews.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mic className="text-primary" size={28} />
            </div>
            <h3 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Interviews <em className="text-primary font-normal">Coming Soon</em>
            </h3>
            <p className="text-foreground/40 max-w-sm mx-auto text-sm leading-relaxed">
              Stay tuned — conversations are being lined up. Check back soon for in-depth interviews with the people behind the stories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interviews.map((item, i) => (
              <motion.div
                key={item.guest}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-colors duration-300"
              >
                <span className="luxury-label text-primary/60 tracking-[0.3em] mb-3 block text-xs">{item.date}</span>
                <h3 className="font-serif text-2xl font-semibold mb-1">{item.guest}</h3>
                <p className="text-primary text-sm mb-4">{item.role}</p>
                <p className="text-xs uppercase tracking-widest text-foreground/40 mb-4">{item.topic}</p>
                <p className="text-foreground/60 leading-relaxed text-sm">{item.excerpt}</p>
              </motion.div>
            ))}
          </div>
        )}
      </section>

    </main>
  );
}
