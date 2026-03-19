import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, Users, Mic, Star, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import mbSocial from "@assets/Screenshot_2026-03-18_at_11.13.02_AM_1773849908093.png";
import mbEvent  from "@assets/Screenshot_2026-03-18_at_12.13.35_PM_1773850461511.png";

import aramarkCal  from "@assets/Screenshot_2026-03-18_at_12.16.31_PM_1773850771181.png";
import aramark1    from "@assets/IMG_8123_1773851636488.jpeg";
import aramark2    from "@assets/IMG_8124_1773851636488.jpeg";
import aramark3    from "@assets/IMG_8125_1773851636488.jpeg";
import aramark4    from "@assets/IMG_8127_1773851636488.jpeg";
import aramark5    from "@assets/IMG_8128_1773851636488.jpeg";
import aramark6    from "@assets/IMG_8129_1773851636488.jpeg";
import aramark7    from "@assets/IMG_8130_1773851636488.jpeg";
import aramark8    from "@assets/IMG_8131_1773851636488.jpeg";
import aramark9    from "@assets/IMG_8132_1773851636488.jpeg";

import hp1 from "@assets/IMG_4192_1773851135832.jpeg";
import hp2 from "@assets/IMG_4197_1773851135834.jpeg";
import hp3 from "@assets/IMG_4202_1773851135834.jpeg";
import hp4 from "@assets/IMG_4203_1773851135834.jpeg";
import hp5 from "@assets/IMG_4207_1773851135834.jpeg";

export default function EventPlanning() {
  const [mbOpen, setMbOpen] = useState(false);
  const [hpOpen, setHpOpen] = useState(false);
  const mbRef = useRef<HTMLDivElement>(null);
  const hpRef = useRef<HTMLDivElement>(null);

  const toggleMb = () => {
    const opening = !mbOpen;
    setMbOpen(opening);
    if (opening) setTimeout(() => mbRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  };

  const toggleHp = () => {
    const opening = !hpOpen;
    setHpOpen(opening);
    if (opening) setTimeout(() => hpRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  };

  const services = [
    {
      icon: CalendarDays,
      title: "Event Coordination",
      desc: "Full-service coordination for campus events, ceremonies, and community gatherings — from concept to execution.",
      open: mbOpen,
      toggle: toggleMb,
      label: "Madison & Brookside Apartments",
    },
    {
      icon: Mic,
      title: "Media & Press Coverage",
      desc: "On-site reporting, live coverage, and post-event content creation to amplify your event's reach and impact.",
      open: false,
      toggle: null,
      label: null,
    },
    {
      icon: Users,
      title: "Community Engagement",
      desc: "Crafting events that bring people together — fostering connection, culture, and meaningful experiences.",
      open: hpOpen,
      toggle: toggleHp,
      label: "Healthy Pots, Healthy Planet",
    },
    {
      icon: Star,
      title: "Brand Activations",
      desc: "Helping organizations tell their story through curated, immersive event experiences that leave a lasting impression.",
      open: false,
      toggle: null,
      label: null,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-6 md:px-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="luxury-label text-primary tracking-[0.3em] mb-4 block">Services</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-6">Event Planning</h1>
          <p className="text-foreground/60 max-w-xl mx-auto text-lg leading-relaxed">
            Bringing stories to life beyond the page — creating experiences that resonate, inspire, and connect communities.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-16 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {service.toggle ? (
                <button
                  onClick={service.toggle}
                  className={cn(
                    "w-full text-left bg-card border rounded-2xl p-8 md:p-10 group transition-colors duration-300",
                    service.open ? "border-primary/60 bg-primary/5" : "border-border hover:border-primary/40"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300",
                        service.open ? "bg-primary/20" : "bg-primary/10 group-hover:bg-primary/20"
                      )}>
                        <service.icon className="text-primary" size={22} />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-foreground/60 leading-relaxed">{service.desc}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: service.open ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-1 shrink-0 text-primary/60"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                  <span className={cn(
                    "mt-5 inline-block text-xs uppercase tracking-widest font-semibold transition-colors duration-200",
                    service.open ? "text-primary" : "text-primary/50 group-hover:text-primary"
                  )}>
                    {service.open ? `Hide case study ↑` : `View case study →`}
                  </span>
                </button>
              ) : (
                <div className="bg-card border border-border rounded-2xl p-8 md:p-10 group hover:border-primary/40 transition-colors duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{service.desc}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── MADISON & BROOKSIDE ──────────────────────────── */}
        <AnimatePresence>
          {mbOpen && (
            <motion.div
              key="mb-case-study"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div ref={mbRef} className="mt-10 border border-primary/20 rounded-3xl p-8 md:p-12 bg-card/60">
                <div className="mb-10">
                  <span className="luxury-label text-primary tracking-[0.3em] mb-3 block">Event Coordination</span>
                  <h2 className="font-serif text-4xl md:text-5xl font-light mb-2">
                    Madison &amp; Brookside <em className="text-primary">Apartments</em>
                  </h2>
                  <p className="text-foreground/50 text-sm uppercase tracking-widest mb-6">Marketing Internship</p>
                  <p className="text-foreground/70 max-w-2xl leading-relaxed text-lg">
                    Developed and executed a full marketing campaign for a student housing complex — designing social media
                    content, hosting on-campus tabling events, and organizing a formal marketing event that drove
                    measurable growth and positioned the property as a premium option for student renters.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mb-12">
                  {["50+ New Instagram Followers","Merchandise Giveaways","Tabling Events on Campus","Formal Marketing Event","Helped Raise Competitive Rent"].map((badge) => (
                    <span key={badge} className="px-5 py-2 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-widest font-semibold bg-primary/5">{badge}</span>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                    <img src={mbSocial} alt="Madison & Brookside social media posts" className="w-full h-auto object-cover" />
                    <div className="px-5 py-4 bg-card">
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">Social Media</p>
                      <p className="text-sm text-foreground/60">Designed Instagram posts promoting leasing specials, Valentine's campaigns, and on-campus tabling events.</p>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                    <img src={mbEvent} alt="Madison & Brookside event collection" className="w-full h-auto object-cover" />
                    <div className="px-5 py-4 bg-card">
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">Event Collection</p>
                      <p className="text-sm text-foreground/60">Coordinated a College Night at UGrille with giveaways, a 10% leasing discount, and on-site brand presence.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── ARAMARK ─────────────────────────────────── */}
              <div className="mt-8 border border-primary/20 rounded-3xl p-8 md:p-12 bg-card/60">
                <div className="mb-8">
                  <span className="luxury-label text-primary tracking-[0.3em] mb-3 block">Event Coordination</span>
                  <h2 className="font-serif text-4xl md:text-5xl font-light mb-2">
                    Shippensburg Dining Services — <em className="text-primary">Aramark</em>
                  </h2>
                  <p className="text-foreground/50 text-sm uppercase tracking-widest mb-6">Marketing &amp; Event Planning Internship</p>
                  <p className="text-foreground/70 max-w-2xl leading-relaxed text-lg">
                    Supported Shippensburg University's dining program through Aramark by planning and promoting a
                    full month of campus dining events — from themed dinners and nutritional pop-ups to holiday specials
                    and guest chef spotlights. Created social content, event calendars, and on-site activations that
                    drove student engagement and community excitement around campus food experiences.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-10">
                  {["Monthly Event Calendar","Social Media Content","Themed Dining Events","Nutritional Pop-Ups","Guest Chef Spotlights","Student Engagement"].map((badge) => (
                    <span key={badge} className="px-5 py-2 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-widest font-semibold bg-primary/5">{badge}</span>
                  ))}
                </div>

                {/* Event Calendar */}
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">March Event Calendar</p>
                  <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                    <img src={aramarkCal} alt="Shippensburg Dining Services March event calendar" className="w-full h-auto object-cover" />
                  </div>
                </div>

                {/* Instagram content grid */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Event Content Created</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { src: aramark9, label: "Flavors of Mardi Gras" },
                      { src: aramark8, label: "Mardi Gras Dinner Recap" },
                      { src: aramark7, label: "Fan Favorites Dinner" },
                      { src: aramark4, label: "Supper Club" },
                      { src: aramark5, label: "Heart Month Overnight Oats" },
                      { src: aramark6, label: "Po the Hippo Birthday" },
                      { src: aramark1, label: "Sunday Night Carry Out Pizza" },
                      { src: aramark2, label: "Aromatherapy Pop-Up" },
                      { src: aramark3, label: "Thanksgiving Pies" },
                    ].map(({ src, label }) => (
                      <div key={label} className="rounded-xl overflow-hidden border border-border shadow-sm group">
                        <img src={src} alt={label} className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                        <div className="px-3 py-2 bg-card">
                          <p className="text-xs text-foreground/50 font-medium truncate">{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── HEALTHY POTS HEALTHY PLANET ──────────────────── */}
        <AnimatePresence>
          {hpOpen && (
            <motion.div
              key="hp-case-study"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div ref={hpRef} className="mt-10 border border-primary/20 rounded-3xl p-8 md:p-12 bg-card/60">
                <div className="mb-10">
                  <span className="luxury-label text-primary tracking-[0.3em] mb-3 block">Community Engagement</span>
                  <h2 className="font-serif text-4xl md:text-5xl font-light mb-2">
                    Healthy Pots, <em className="text-primary">Healthy Planet</em>
                  </h2>
                  <p className="text-foreground/50 text-sm uppercase tracking-widest mb-3">Campus Sustainability Event</p>
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <a
                      href="https://www.healthypotshealthyplanet.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4"
                    >
                      healthypotshealthyplanet.org →
                    </a>
                    <a
                      href="https://drinkpoppi.com/?srsltid=AfmBOorpBNqVZTwQxPofd-caMIac1Rc16vYUl85GSwkuQCqP2_pqKr9k"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-xs uppercase tracking-widest font-semibold text-foreground/60 hover:border-primary hover:text-primary transition-colors duration-200"
                    >
                      🫧 Sponsored by Poppi
                    </a>
                  </div>
                  <p className="text-foreground/70 max-w-2xl leading-relaxed text-lg">
                    Organized and executed a campus tabling event promoting environmental awareness and sustainable living.
                    Poppi generously donated sodas to the event — creating an irresistible draw that invited students
                    to stop by the table, enjoy a free drink, and sign up to support Healthy Pots, Healthy Planet.
                    Students also engaged with Earth Day educational materials and received eco-friendly merchandise,
                    bringing sustainability conversations directly to the student community.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mb-12">
                  {["Earth Day Awareness","Student Sign-Ups","Eco Merchandise Giveaway","Campus Tabling Event","Poppi Drink Giveaways","Sustainability Education"].map((badge) => (
                    <span key={badge} className="px-5 py-2 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-widest font-semibold bg-primary/5">{badge}</span>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { src: hp1, caption: "Tabling setup with Healthy Pots Healthy Planet branding, Poppi drinks & eco pots" },
                    { src: hp2, caption: "Students excited to sign up and grab merchandise at the event table" },
                    { src: hp3, caption: "Attendees holding giveaway drinks and eco-friendly wristbands" },
                    { src: hp4, caption: "Students engaged at the table with the Healthy Pots Healthy Planet sign" },
                    { src: hp5, caption: "Jada holding the 'How to Celebrate Earth Day' educational poster" },
                  ].map(({ src, caption }, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "rounded-xl overflow-hidden border border-border shadow-sm",
                        idx === 0 ? "col-span-2 md:col-span-1" : ""
                      )}
                    >
                      <img src={src} alt={caption} className="w-full h-52 object-cover object-top" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="py-24 px-6 bg-foreground text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0 }}
        >
          <span className="luxury-label text-white/50 tracking-[0.3em] mb-4 block">Let's Work Together</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">Have an event in mind?</h2>
          <p className="text-white/60 max-w-md mx-auto mb-10 leading-relaxed">
            Reach out and let's talk about how we can bring your vision to life.
          </p>
          <a href="mailto:jadarlee932@icloud.com">
            <Button className="uppercase tracking-widest text-xs px-10 py-6">Get in Touch</Button>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
