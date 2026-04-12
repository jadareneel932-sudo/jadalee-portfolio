import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Play } from "lucide-react";
import siImg1 from "@assets/IMG_7865_1773807100052.jpeg";
import siImg2 from "@assets/IMG_6657_1773807100053.jpeg";
import siImg3 from "@assets/IMG_6345_1773807100053.jpeg";
import luhrsImg from "@assets/Screenshot_2026-03-18_at_1.03.50_PM_1773887900856.png";

function YouTubeEmbed({ url }: { url: string }) {
  const [active, setActive] = useState(false);
  const id = url.split("/embed/")[1]?.split("?")[0] ?? "";
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  if (active) {
    return (
      <iframe
        src={`${url}?autoplay=1`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    );
  }
  return (
    <button
      onClick={() => setActive(true)}
      className="relative w-full h-full group focus:outline-none"
      aria-label="Play video"
    >
      <img
        src={thumb}
        alt="Video thumbnail"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
          <Play className="w-6 h-6 text-white fill-white ml-1" />
        </div>
      </div>
    </button>
  );
}

const pillars = [
  { icon: "✍️", title: "Sports Journalism", desc: "On-the-ground coverage of college athletics, pro basketball, and the untold stories behind the rosters." },
  { icon: "🌿", title: "Health & Wellness", desc: "Practical, real-world advice on routines, mindset, and habits that actually stick." },
  { icon: "💡", title: "Lifestyle & Culture", desc: "Celebrating community, personal growth, and the quiet power of living with intention." },
];

const experience = [
  {
    icon: "🎭",
    role: "Marketing & Public Relations Intern",
    org: "The Luhrs Performing Arts Center",
    detail: "1,500-seat venue",
    desc: "Developed and executed campaigns for National Broadway tours, dances, and concerts. Created press releases, promotional infographics, and event materials.",
    images: [luhrsImg],
  },
  {
    icon: "🎥",
    role: "Sports Information",
    org: "Shippensburg University Athletics",
    detail: "Production · Stats keeper · Score keeper · Videographer",
    images: [siImg1, siImg2, siImg3],
    desc: "Captured and documented live athletic events across campus — operating cameras, maintaining real-time stats, and producing sports media content for various collegiate sports. Used live production footage to post real-time updates on X (@ShipURaiders) and contributed video to The Shippensburg Sports PSAC YouTube channel.",
    videos: [
      "https://www.youtube.com/embed/RjoO7EIQDJw",
      "https://www.youtube.com/embed/pvVlcnF0kvE",
      "https://www.youtube.com/embed/xnALe-fmiOk",
      "https://www.youtube.com/embed/aTnjukzQlnw?start=10",
    ],
  },
  {
    icon: "📣",
    role: "PRSSA 'Reach Out' Partnership",
    org: "Public Relations Student Society of America",
    detail: "Campaign Development · Content Creation",
    desc: "Collaborated on the 'Reach Out' Spring Break community campaign — producing multimedia content, managing visual storytelling across platforms, and applying real-world PR strategy to community engagement.",
  },
  {
    icon: "✍️",
    role: "Staff Writer & Scriptwriter",
    org: "The Slate — Shippensburg University",
    detail: "Sports · Feature writing · Broadcast scripts",
    desc: "Published articles on PSAC Championships, SU baseball, women's basketball, and campus culture. Also wrote broadcast-ready scripts covering Raiders athletics, campus events, and feature stories for radio and production use.",
  },
  {
    icon: "📰",
    role: "Freelance Contributor",
    org: "News-Chronicle",
    detail: "Community journalism",
    desc: "Covered local community stories including Wawa's first Franklin County expansion and a feature profile on entrepreneur Jane Offner — bridging community news with compelling narrative journalism.",
  },
  {
    icon: "📋",
    role: "Public Relations Research & Ethics",
    org: "PRSA Code of Ethics",
    detail: "Academic · Published paper · 2024",
    desc: "Authored 'Navigating Ethics: What to Know' (2024) — a research paper examining the PRSA Code of Ethics and its application in modern public relations, focusing on advocacy, honesty, expertise, independence, loyalty, and fairness.",
  },
  {
    icon: "📡",
    role: "Live News Reporter / Ship Talk Host / \"Overtime\" Sports Show Host",
    org: "SUTV — Shippensburg University",
    detail: "Shippensburg University, Pa. · Oct. 2023 – Current",
    desc: "Conduct man-on-the-street interviews across campus and coordinate with other hosts to create a smooth and organized outtake. Served as the primary link between the broadcast booth and the court — working closely with coaches, the event coordinator, and the sports information director to gain behind-the-scenes insights and conduct interviews with players and coaches in a fast-paced environment. Developed a strong rapport with coaches and players to maintain a healthy and smooth professional relationship.",
  },
];

const certifications = [
  "Hootsuite Platform Certification",
  "Hootsuite Social Media Marketing Certification",
  "MuckRack Fundamentals of Media Management Certification",
  "MuckRack Fundamentals of Media Relations Certification",
  "Social Behavioral – Education Researchers Certification",
  "Beginner SEO with Semrush",
  "How to Write Effective PR and Link Requests with Adam Riemer w/ Semrush",
];

export default function About() {
  const [contactOpen, setContactOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setTimeout(() => {
      const subject = encodeURIComponent(data.get("subject") as string || "Message from SecretCues");
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:jadarlee932@icloud.com?subject=${subject}&body=${body}`;
      setSending(false);
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 4000);
    }, 600);
  };

  return (
    <main className="w-full bg-background">

      {/* HERO */}
      <section className="pt-28 pb-12 px-6 md:px-12 bg-primary text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-white/60 font-semibold tracking-[0.25em] uppercase text-xs mb-6 block">
              Writer · Creator · Storyteller
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-semibold leading-none mb-6 text-white">
              About<br />
              <span className="italic font-normal text-white/80">Jada Lee</span>
            </h1>
            <div className="w-20 h-1 bg-white/40 rounded-full mb-8" />
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed font-light">
              She covers the stories that move you — from courtside to the page.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BIO */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8 leading-tight">
              I don't just cover stories —<br />
              <span className="text-primary italic font-normal">I live them.</span>
            </h2>

            <div className="space-y-6 text-foreground/70 leading-relaxed text-lg mb-14">
              <p>
                Jada Lee is a writer, content creator, and cultural voice dedicated to telling the stories that sit at the intersection of sport, wellness, and real life. Born out of a genuine passion for people and the power of authentic narrative, her platform <strong className="text-foreground">SecretCues of Ms. Lee</strong> is where raw honesty meets polished storytelling.
              </p>
              <p>
                Whether she's sitting courtside at a Shippensburg University game, tracking a rising pro athlete's journey, or unpacking the mindset shifts that quietly change lives — Jada shows up fully. Her voice is sharp, warm, and unapologetically real.
              </p>
              <p>
                She believes that the most powerful content doesn't shout — it connects. Every piece she writes is a bridge between lived experience and the reader who needed to hear it today.
              </p>
              <p>
                Every day, she seeks opportunities to inspire others to continue moving their bodies and invest in themselves. Physical activity is a gateway to confidence, mental clarity, and emotional strength — and whether someone is an elite athlete or a beginner taking their very first step, encouragement can make a lasting impact.
              </p>
            </div>

            {/* Mission callout */}
            <div className="bg-foreground text-white p-8 md:p-10 rounded-2xl mb-14">
              <p className="text-xs uppercase tracking-widest text-primary mb-4">The Mission</p>
              <blockquote className="text-xl md:text-2xl font-serif italic leading-relaxed text-white/90">
                "I believe in the power of positive influence and aim to build a diverse community where we can learn from each other — making small changes that lead to big improvements."
              </blockquote>
              <p className="mt-4 text-sm text-white/40 font-medium">— Jada Lee</p>
            </div>

            {/* Pillars */}
            <h3 className="text-2xl font-serif font-semibold mb-8">What I Cover</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="bg-secondary/40 border border-border rounded-2xl p-6"
                >
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h4 className="font-semibold text-base mb-2">{p.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="luxury-label text-primary mb-4 block">Where I've Worked</span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-16 leading-tight">
              Experience
            </h2>

            <div className="space-y-8">
              {experience.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="flex gap-6 bg-card border border-border rounded-2xl p-6 md:p-8"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                    {e.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-serif text-xl font-semibold mb-1">{e.role}</p>
                    <p className="text-primary font-medium text-sm mb-1">{e.org}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{e.detail}</p>
                    <p className="text-foreground/70 leading-relaxed">{e.desc}</p>
                    {(e as any).images && (
                      <div className={`mt-5 ${(e as any).images.length === 1 ? "" : "grid grid-cols-3 gap-2"}`}>
                        {(e as any).images.map((src: string, idx: number) => (
                          (e as any).images.length === 1 ? (
                            <div key={idx} className="overflow-hidden rounded-lg w-full">
                              <img src={src} alt={`${e.org} image`} className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                            </div>
                          ) : (
                            <div key={idx} className="overflow-hidden rounded-lg aspect-square">
                              <img src={src} alt={`${e.org} image ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                            </div>
                          )
                        ))}
                      </div>
                    )}
                    {(e as any).videos && (
                      <div className={`mt-5 grid gap-3 ${(e as any).videos.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                        {(e as any).videos.map((url: string, idx: number) => (
                          <div key={idx} className="rounded-xl overflow-hidden aspect-video">
                            <YouTubeEmbed url={url} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-24 px-6 md:px-12 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="luxury-label text-primary mb-4 block">Background</span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-16 leading-tight">
              My Credentials
            </h2>

            {/* Education */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg">🎓</div>
                <h3 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Education</h3>
              </div>
              <div className="border-l-2 border-primary/30 pl-8">
                <p className="font-serif text-2xl font-semibold mb-1">Shippensburg University</p>
                <p className="text-primary font-medium text-sm mb-4">2022 – 2026</p>
                <ul className="space-y-2 text-foreground/70 text-base">
                  <li>BA Bachelor of Arts in Communication / Journalism</li>
                  <li>Concentration: Public Relations</li>
                  <li>Expected May 2026</li>
                  <li>Minor: International Development with a subsector in Community Economic Development</li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg">📜</div>
                <h3 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
                  >
                    <span className="mt-0.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <p className="text-sm text-foreground/80 leading-snug font-medium">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* CTA + INLINE CONTACT */}
      <section className="py-20 px-6 md:px-12 text-center">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button asChild size="lg" className="px-10">
            <Link href="/blog">Read My Work</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-10"
            onClick={() => setContactOpen((o) => !o)}
          >
            {contactOpen ? "Close" : "Let's Talk"}
          </Button>
        </div>

        <AnimatePresence>
          {contactOpen && (
            <motion.div
              key="contact-form"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="max-w-xl mx-auto mt-4 bg-card border border-border rounded-3xl p-8 md:p-10 shadow-lg text-left">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">Let's Connect</p>
                <h3 className="font-serif text-3xl font-light mb-3">Get in Touch</h3>
                <a
                  href="mailto:jadarlee932@icloud.com"
                  className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors mb-6"
                >
                  <Mail className="w-3.5 h-3.5" />
                  jadarlee932@icloud.com
                </a>
                {sent ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-primary font-serif text-xl py-8"
                  >
                    Message sent — talk soon!
                  </motion.p>
                ) : (
                  <form onSubmit={handleSend} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs uppercase tracking-wider font-semibold text-foreground/60 block mb-1.5">Name</label>
                        <Input name="name" placeholder="Your name" required />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-wider font-semibold text-foreground/60 block mb-1.5">Email</label>
                        <Input name="email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-foreground/60 block mb-1.5">Subject</label>
                      <Input name="subject" placeholder="What's this about?" required />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-foreground/60 block mb-1.5">Message</label>
                      <Textarea name="message" placeholder="Hello Jada, I'd love to talk about..." className="min-h-[130px]" required />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={sending}>
                      {sending ? "Opening mail app..." : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

    </main>
  );
}
