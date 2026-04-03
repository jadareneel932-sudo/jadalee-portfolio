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
  const [ffOpen, setFfOpen] = useState(false);
  const [mpcOpen, setMpcOpen] = useState(false);
  const mbRef = useRef<HTMLDivElement>(null);
  const hpRef = useRef<HTMLDivElement>(null);
  const ffRef = useRef<HTMLDivElement>(null);
  const mpcRef = useRef<HTMLDivElement>(null);

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

  const toggleFf = () => {
    const opening = !ffOpen;
    setFfOpen(opening);
    if (opening) setTimeout(() => ffRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  };

  const toggleMpc = () => {
    const opening = !mpcOpen;
    setMpcOpen(opening);
    if (opening) setTimeout(() => mpcRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
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
      open: mpcOpen,
      toggle: toggleMpc,
      label: "The Magic School Bus — Luhrs Center",
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
      open: ffOpen,
      toggle: toggleFf,
      label: "Fostering Families Today Conference",
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
        {/* ── FOSTERING FAMILIES TODAY ──────────────────────── */}
        <AnimatePresence>
          {ffOpen && (
            <motion.div
              key="ff-case-study"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div ref={ffRef} className="mt-10 space-y-6">

                {/* ── BLUE MAN GROUP ── */}
                <div className="rounded-3xl overflow-hidden border border-border bg-card">
                  <img
                    src="/blue-man-group.png"
                    alt="Blue Man Group – Marketing and Public Relations work by Jada Lee"
                    className="w-full object-cover"
                  />
                  <div className="px-8 py-6">
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      I have been able to create media content for Blue Man Group and contribute to LUHRS' biggest selling show ever.
                    </p>
                  </div>
                </div>

                {/* ── LOOKBOOK COVER ── */}
                <div className="rounded-3xl overflow-hidden border border-primary/20 shadow-lg">
                  <div className="bg-[#1a2744] text-white px-10 py-16 md:px-16 md:py-20 relative">
                    <div className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />
                    <div className="relative z-10 max-w-2xl">
                      <span className="text-white/50 text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">Brand Activations · Case Study · Mockup Event</span>
                      <h2 className="font-serif text-5xl md:text-6xl font-light leading-tight mb-4">
                        Fostering<br />
                        <em className="font-normal">Families Today</em>
                      </h2>
                      <div className="w-16 h-0.5 bg-white/40 mb-6" />
                      <p className="text-2xl font-light text-white/80 mb-2">Winter 2025 Conference</p>
                      <p className="text-white/50 text-sm">December 11–12, 2025 · J.W. Marriott · Washington, D.C.</p>
                    </div>
                    <div className="absolute bottom-8 right-10 text-right hidden md:block">
                      <p className="text-white/30 text-xs uppercase tracking-widest">Press Release</p>
                      <p className="text-white/30 text-xs uppercase tracking-widest">Event Infographic</p>
                      <p className="text-white/30 text-xs uppercase tracking-widest">Speaker Profiles</p>
                    </div>
                  </div>
                </div>

                {/* ── SPREAD 1: Overview + Mission ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
                    <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-5 block">The Event</span>
                    <h3 className="font-serif text-2xl font-semibold mb-4 leading-snug">A two-day conference dedicated to fostering, adoptive, and kinship families across the United States.</h3>
                    <div className="space-y-3 text-sm text-foreground/60 leading-relaxed">
                      <div className="flex gap-3"><span className="text-primary font-semibold min-w-[80px]">Date</span><span>December 11–12, 2025</span></div>
                      <div className="flex gap-3"><span className="text-primary font-semibold min-w-[80px]">Venue</span><span>J.W. Marriott, 1331 Pennsylvania Ave NW, Washington, D.C. 20004</span></div>
                      <div className="flex gap-3"><span className="text-primary font-semibold min-w-[80px]">Guests</span><span>550–800 expected attendees</span></div>
                      <div className="flex gap-3"><span className="text-primary font-semibold min-w-[80px]">Focus</span><span>Evidence-based narratives on foster care, adoption, and family stability</span></div>
                    </div>
                  </div>
                  <div className="bg-[#1a2744] text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between">
                    <span className="text-white/40 text-xs uppercase tracking-[0.25em] font-semibold mb-5 block">Our Mission</span>
                    <blockquote className="font-serif text-xl md:text-2xl font-light leading-relaxed text-white/90 flex-1">
                      "Bridge the gap between parent associations, adoptive parent coalitions, and other leaders in the foster and kinship care world."
                    </blockquote>
                    <div className="mt-8 pt-6 border-t border-white/10 text-white/40 text-xs">
                      Founded 2001 · Angels in Adoption Award · Media Award Winners
                    </div>
                  </div>
                </div>

                {/* ── SPREAD 2: Press Release text ── */}
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
                  <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-6 block">Press Release</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <p className="font-serif text-3xl font-light leading-tight text-foreground mb-4">Washington, D.C.<br /><em className="text-primary">Dec. 11–12, 2025</em></p>
                      <div className="w-10 h-0.5 bg-primary mb-4" />
                      <p className="text-xs text-foreground/40 leading-relaxed uppercase tracking-widest">Fostering Media Connections<br />Email: fosteringmediaconnections.org<br />Phone: (213) 379-5359</p>
                    </div>
                    <div className="md:col-span-2 space-y-4 text-foreground/70 leading-relaxed text-sm">
                      <p>
                        Fostering Families Today will host a two-day conference at the J.W. Marriott. The conference will feature two guest speakers for 550–800 guests who will provide evidence-based narratives to create a well-rounded approach to foster care and its success.
                      </p>
                      <p>
                        This event will be great for anyone who is interested in fostering children, inspiring their foster child, or simply interested in learning how to work through trauma as a current or previous foster child.
                      </p>
                      <p>
                        Our fostering parent magazine was established in 2001 after the founder, Richard Fischer, discovered how few resources and training are provided to foster families. Nearly two decades later, the purpose of this magazine continues to provide solutions for families who must navigate the foster care system. The magazine has since earned two awards: the Media Award Winners and the Angels in Adoption Award.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── SPREAD 3: Stats Infographic ── */}
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
                  <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-2 block">Infographic</span>
                  <h3 className="font-serif text-2xl font-light mb-8">Foster Care in the U.S. — <em className="text-primary">2024 Data</em></h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "328,947", label: "Children in Foster Care", note: "as of Sep. 30, 2024", highlight: true },
                      { value: "170,943", label: "Entering Foster Care", note: "per year" },
                      { value: "176,730", label: "Exiting Foster Care", note: "per year" },
                      { value: "46,935", label: "Children Adopted", note: "from foster care" },
                      { value: "125+", label: "Programs Supported", note: "across the U.S." },
                      { value: "2001", label: "Magazine Founded", note: "by Richard Fischer" },
                    ].map(({ value, label, note, highlight }) => (
                      <div key={label} className={cn(
                        "rounded-2xl p-5 text-center border",
                        highlight ? "bg-[#1a2744] border-[#1a2744] text-white" : "bg-primary/5 border-primary/20"
                      )}>
                        <p className={cn("font-serif text-3xl font-light mb-1", highlight ? "text-white" : "text-primary")}>{value}</p>
                        <p className={cn("text-xs font-semibold uppercase tracking-widest mb-1", highlight ? "text-white/70" : "text-foreground/70")}>{label}</p>
                        <p className={cn("text-xs", highlight ? "text-white/40" : "text-foreground/40")}>{note}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-xs text-foreground/40 italic">And this is just the beginning.</p>
                </div>

                {/* ── SPREAD 4: Speakers ── */}
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
                  <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-2 block">Speaker Profiles</span>
                  <h3 className="font-serif text-2xl font-light mb-8">Meet Our <em className="text-primary">Panelists</em></h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Jeanette Yoffe",
                        credentials: "M.A., M.F.T.",
                        title: "Trauma-Informed Public Speaker",
                        bio: "Licensed Clinical Director and Founder of Celia Center. A seasoned psychotherapist with 16+ years of experience and personal experience as a former foster child. Specializes in adoption, abuse, neglect, and multiple foster-care placements — particularly those showing emotional, cognitive, or behavioral challenges.",
                      },
                      {
                        name: "Jimmy Wayne",
                        credentials: "NYT Bestselling Author",
                        title: "Country Singer & Former Foster Child",
                        bio: "Award-Winning Recording Artist whose music highlights his story as a former foster child. Member of the National Council for Adoption with several awards for his contributions to foster care advocacy. Committed to raising awareness and inspiring positive change.",
                      },
                      {
                        name: "Dr. Sandra Gasca-Gonzalez",
                        credentials: "Harvard Graduate",
                        title: "VP, Annie E. Casey Foundation",
                        bio: "Expert in Child Protection, Foster Care, Permanence, and Youth in Transition (Aging Out). Her background spans domestically and internationally in child welfare, youth transitioning into adulthood, and juvenile justice.",
                      },
                    ].map(({ name, credentials, title, bio }) => (
                      <div key={name} className="border border-border rounded-2xl overflow-hidden">
                        <div className="bg-[#1a2744] px-6 py-5">
                          <p className="font-serif text-lg font-semibold text-white leading-tight">{name}</p>
                          <p className="text-white/50 text-xs mt-0.5">{credentials}</p>
                        </div>
                        <div className="p-6">
                          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">{title}</p>
                          <p className="text-foreground/60 text-sm leading-relaxed">{bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── SPREAD 5: Media Contact + Download ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-3xl p-8">
                    <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-5 block">Media Inquiries</span>
                    <p className="font-serif text-2xl font-light mb-1">Jada Lee</p>
                    <p className="text-foreground/50 text-sm mb-4">Fostering Media Connections (FFT)</p>
                    <div className="space-y-2 text-sm text-foreground/60">
                      <p>📞 717-494-9877</p>
                      <p>✉️ jl3564@ship.edu</p>
                    </div>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-5 block">Full Document</span>
                      <p className="text-foreground/70 text-sm leading-relaxed mb-6">View or download the complete press release including the full team bios and event details.</p>
                    </div>
                    <a
                      href="/PressRelease-FosteringFamilies.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-center w-full py-3 rounded-xl bg-primary text-white text-xs uppercase tracking-widest font-semibold hover:bg-primary/90 transition-colors duration-200"
                    >
                      Download Press Release →
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MEDIA & PRESS COVERAGE ───────────────────────── */}
        <AnimatePresence>
          {mpcOpen && (
            <motion.div
              key="mpc-case-study"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div ref={mpcRef} className="mt-10">
                <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                  <iframe
                    src="/press-release-msb.html"
                    title="The Magic School Bus Press Release"
                    className="w-full"
                    style={{ height: "560px" }}
                  />
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
