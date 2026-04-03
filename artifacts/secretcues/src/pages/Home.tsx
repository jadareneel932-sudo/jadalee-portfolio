import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES, PORTRAIT_URL } from "@/lib/data";
import { useLang } from "@/lib/i18n";

import field3  from "@assets/IMG_6173_1773808043914.jpeg";
import field4  from "@assets/IMG_5752_1773808043914.jpeg";
import field5  from "@assets/IMG_5457_1773808043915.jpeg";
import field6  from "@assets/IMG_1773_1773808043915.jpeg";
import field7  from "@assets/IMG_4387_1773808043915.jpeg";
import field8  from "@assets/IMG_4372_1773808043915.jpeg";
import field9  from "@assets/IMG_4353_1773808043915.jpeg";
import field10 from "@assets/IMG_4260_1773808043915.jpeg";
import field11 from "@assets/IMG_4267_1773808043915.jpeg";
import field12 from "@assets/IMG_3994_1773808043915.jpeg";
import field13 from "@assets/IMG_3993_1773808043915.png";
import field14 from "@assets/IMG_1271_1773808043915.jpeg";
import field15 from "@assets/IMG_3574_1773808043916.jpeg";
import field16 from "@assets/IMG_3071_1773808043916.jpeg";
import field17 from "@assets/IMG_3038_1773808043916.jpeg";
import field18 from "@assets/IMG_3068_1773808043916.jpeg";
import field19 from "@assets/IMG_3188_1773808328373.jpeg";
import field20 from "@assets/image_1773808349072.jpeg";

const IN_THE_FIELD = [
  { src: field3,  alt: "On the track with SUTV media badge" },
  { src: field4,  alt: "Jada at the Luhrs Performing Arts Center" },
  { src: field5,  alt: "Jada at the PA State Capitol with press badge" },
  { src: field6,  alt: "Earth Day PRSSA class presentation" },
  { src: field7,  alt: "PRSSA Certificate of Appreciation — Jada Lee" },
  { src: field8,  alt: "Spin class at Shippensburg gym" },
  { src: field9,  alt: "Premiere Pro editing the SecretCues podcast" },
  { src: field10, alt: "Jada studio shoot in athletic wear" },
  { src: field11, alt: "Jada smiling in studio shoot" },
  { src: field12, alt: "Jada at 2025 PRSSA Mid-Atlantic District Conference" },
  { src: field13, alt: "PRSSA conference with teammate" },
  { src: field14, alt: "Jada at Women in Sports Communications Panel" },
  { src: field15, alt: "Spin class group celebration" },
  { src: field16, alt: "Wawa grand opening crew selfie" },
  { src: field17, alt: "Jada with SUTV mic interviewing at Wawa" },
  { src: field18, alt: "Wawa exterior crew selfie" },
  { src: field19, alt: "Jada reporting courtside in red dress with SUTV mic" },
  { src: field20, alt: "Wawa grand opening crew outside" },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const FEATURED_IN = [
  "The Slate", "Franklin County Freepress", "The Shippensburg News-Chronicle",
];

const roles = ["Sports Journalism", "Wellness", "Lifestyle", "Content Creation", "Storytelling", "International Development"];
const marqueeText = [...roles, ...roles].join("  ·  ");

const testimonials = [
  {
    quote: "Jada has a rare gift for making you feel like you were right there in the room. Her writing doesn't just report — it transports.",
    name: "Coach, Shippensburg University Athletics",
  },
  {
    quote: "SecretCues is the first thing I read when a new piece drops. Jada captures the human side of sport in a way no one else does.",
    name: "Reader & Community Member",
  },
];

export default function Home() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <main className="w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen overflow-hidden">

        {/* Full-bleed photo */}
        <img
          src={PORTRAIT_URL}
          alt="Jada Lee interviewing a Raiders athlete"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient overlay — cream-toned fade at bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

        {/* Text — bottom-left, overlaid on photo */}
        <div className="relative z-10 flex flex-col justify-end min-h-screen pb-16 px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-white leading-[0.85] mb-6"
              style={{ fontSize: "clamp(64px, 9vw, 140px)" }}
            >
              Jada<br />
              <em className="text-primary" style={{ fontStyle: "italic" }}>Lee</em>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="origin-left w-16 h-px bg-primary mb-6"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="font-serif italic text-white/60 text-lg md:text-xl max-w-xs mb-8 leading-relaxed"
            >
              {t.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="px-10 uppercase tracking-widest text-xs shadow-lg shadow-primary/40 bg-primary hover:bg-primary/90 text-white font-semibold">
                <Link href="/blog">{t.viewWork}</Link>
              </Button>
              <Button asChild size="lg" variant="outline"
                className="px-10 uppercase tracking-widest text-xs border-white/60 text-white hover:bg-white hover:text-foreground"
              >
                <Link href="/about">{t.myStory}</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-2"
          >
            <span className="luxury-label text-white/30 [writing-mode:vertical-lr] tracking-[0.4em]">{t.scroll}</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* ── ROLE LABELS ──────────────────────────────────── */}
      <div className="bg-background py-8 px-8 md:px-16 lg:px-24 border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center gap-y-3"
        >
          {t.roles.map((r, i, arr) => (
            <span key={r} className="flex items-center">
              <span className="luxury-label text-primary/80 tracking-[0.25em]">{r}</span>
              {i < arr.length - 1 && (
                <span className="mx-4 text-primary/40 text-lg leading-none">·</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section className="py-16 px-6 md:px-16 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { target: 11, suffix: "", label: "Articles Published" },
            { target: 3, suffix: "+", label: "Years in the Field" },
            { target: 12, suffix: "", label: "Publications" },
          ].map(({ target, suffix, label }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-serif text-5xl md:text-6xl font-light text-primary mb-2">
                <CountUp target={target} suffix={suffix} />
              </div>
              <p className="luxury-label text-foreground/40 tracking-widest">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MEET JADA ────────────────────────────────────── */}
      <section className="py-32 px-6 md:px-16 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="luxury-label text-primary mb-8 block">{t.personBehindPen}</span>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
              {t.meetMs.split(" ")[0]}<br /><em className="text-primary">{t.meetMs.split(" ").slice(1).join(" ")}</em>
            </h2>
            <div className="w-16 h-px bg-primary mb-10" />
            <div className="space-y-6 text-foreground/60 leading-relaxed text-lg font-light mb-12">
              <p>
                Jada Lee is a writer, content creator, and passionate voice at the intersection of culture, sports, and wellness. She created <em className="text-foreground/80">SecretCues of Ms. Lee</em> to share the insights that don't always make the headlines.
              </p>
              <p>
                Her work blends the discipline of sports journalism with the warmth of lifestyle storytelling — building a community that believes in growing together.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="px-10 uppercase tracking-widest text-xs bg-primary text-white hover:bg-primary/90">
                <Link href="/about">Full Story</Link>
              </Button>
              <Button asChild size="lg" variant="outline"
                className="px-10 uppercase tracking-widest text-xs border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/about">Let's Connect</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ───────────────────────────────── */}
      <div className="py-5 bg-primary overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-block luxury-label text-white/80 tracking-[0.3em] pr-20">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* ── AS FEATURED IN ───────────────────────────────── */}
      <div className="py-10 bg-secondary/40 border-b border-border overflow-hidden">
        <p className="luxury-label text-center text-foreground/30 tracking-[0.4em] mb-8">As Seen In</p>
        <div className="flex whitespace-nowrap">
          <div className="flex animate-marquee gap-0">
            {[...FEATURED_IN, ...FEATURED_IN, ...FEATURED_IN].map((pub, i) => (
              <span key={i} className="inline-flex items-center gap-8 px-10">
                <span className="font-serif italic text-lg md:text-xl text-foreground/40 hover:text-primary transition-colors duration-300 cursor-default select-none">
                  {pub}
                </span>
                <span className="text-primary/30 text-xs">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── TESTIMONIAL STRIP ────────────────────────────── */}
      <section className="py-32 px-6 bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="font-serif text-7xl md:text-9xl text-white/20 leading-none mb-4 select-none">"</div>
            <blockquote className="font-serif text-2xl md:text-4xl font-light italic leading-relaxed text-white/90 mb-10">
              Great things are done by a series of small things brought together.
            </blockquote>
            <div className="w-12 h-px bg-white/40 mx-auto mb-6" />
            <p className="luxury-label text-white/50">Vincent Van Gogh</p>
          </motion.div>
        </div>
      </section>

      {/* ── IN THE FIELD ─────────────────────────────────── */}
      <section className="py-28 px-6 md:px-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="luxury-label text-primary mb-3 block">{t.visualPortfolio}</span>
            <h2 className="font-serif text-4xl md:text-6xl font-light">{t.inTheField.split(" ").slice(0,-1).join(" ")} <em>{t.inTheField.split(" ").slice(-1)}</em></h2>
          </motion.div>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {[
              ...GALLERY_IMAGES.map((img) => ({ src: img.url, alt: img.alt })),
              ...IN_THE_FIELD,
            ].map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: (i % 10) * 0.04 }}
                className="break-inside-avoid overflow-hidden rounded-xl"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────── */}
      <section className="py-28 px-6 bg-background text-center border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-foreground">
            {t.readyExplore}<br />
            <em className="text-primary">{t.throughLens}</em>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-10" />
          <p className="text-foreground/40 text-lg mb-12 font-light max-w-lg mx-auto">
            {t.fromSidelines}
          </p>
          <Button asChild size="lg" className="px-16 uppercase tracking-widest text-xs bg-primary text-white hover:bg-primary/90">
            <a href="https://jadareneel932.wordpress.com" target="_blank" rel="noopener noreferrer">{t.readWork}</a>
          </Button>

        </motion.div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────── */}
      <section className="py-28 px-6 bg-background border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center"
        >
          <span className="luxury-label text-primary mb-4 block">{t.stayInLoop}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            {t.neverMissStory.split(" ").slice(0, -1).join(" ")} <em>{t.neverMissStory.split(" ").slice(-1)}</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            {t.newsletterSub}
          </p>

          {subscribed ? (
            <div className="py-6 text-primary font-serif italic text-xl">
              {t.thankYou}
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="flex-1 px-5 py-3 border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <Button type="submit" className="uppercase tracking-widest text-xs px-8 shrink-0">
                {t.subscribe}
              </Button>
            </form>
          )}
        </motion.div>
      </section>

    </main>
  );
}
