import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { BLOG_POSTS, type Category } from "@/lib/data";
import { cn } from "@/lib/utils";
import bookBg from "@assets/stock_images/book_pages_bg.jpg";

const categories: Category[] = ["All", "Sports", "Wellness", "Lifestyle"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    const q = query.toLowerCase();
    const matchSearch = !q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q) || post.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <main className="w-full min-h-screen bg-background">

      {/* HEADER */}
      <section className="pt-28 pb-12 px-6 md:px-12 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={bookBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold tracking-[0.25em] uppercase text-xs mb-6 block">
              Portfolio · Articles · Stories
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-semibold mb-6 leading-none" style={{ color: "#7B9ED9" }}>
              My Work
            </h1>
            <div className="w-20 h-1 bg-primary rounded-full mb-8" />
            <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Every article is a window — into a game, a mindset, a life well-lived. Explore the full body of work below.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">

        {/* SEARCH */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative max-w-md mb-8"
        >
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="w-full pl-10 pr-4 py-3 border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </motion.div>

        {/* FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center gap-3 mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground mr-2 hidden md:block">Filter:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-card text-foreground border border-border hover:border-primary hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground hidden md:block">
            {filteredPosts.length} {filteredPosts.length === 1 ? "piece" : "pieces"}
          </span>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-32">
            <h3 className="text-3xl font-serif text-muted-foreground mb-4">Nothing here yet.</h3>
            <button
              onClick={() => setActiveCategory("All")}
              className="text-primary font-medium hover:underline underline-offset-4 uppercase tracking-widest text-sm"
            >
              View All Work
            </button>
          </div>
        )}
      </div>

      {/* WORDPRESS BLOG PREVIEW */}
      <section className="py-20 px-6 md:px-12 border-t border-border bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <span className="luxury-label text-primary tracking-[0.3em] mb-3 block">Read the Work</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
              Blog <em className="text-primary">Preview</em>
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              A glimpse into the latest from{" "}
              <a href="https://jadareneel932.wordpress.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">
                jadareneel932.wordpress.com
              </a>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Top Spring Decor Ideas for 2024",
                excerpt: "Let's face it: our inner space truly affects our mindset. Here are a few effective ways to maintain a light atmosphere for the upcoming season — and promote a fresh, productive environment.",
                date: "Apr 29, 2024",
                category: "Lifestyle",
                imageUrl: "https://jadareneel932.wordpress.com/wp-content/uploads/2024/04/pexels-photo-7169024.jpeg?w=1024",
                url: "https://jadareneel932.wordpress.com/2024/04/29/top-spring-decor-ideas-for-2024/",
                readTime: "3 min",
              },
              {
                title: "Top 4 Ways to Build Your Confidence",
                excerpt: "Have you ever found yourself asking, \"Am I enough?\" Everyone has something they would like to change about themselves. Here are four ways to start building confidence.",
                date: "Oct 12, 2025",
                category: "Lifestyle",
                imageUrl: "https://jadareneel932.wordpress.com/wp-content/uploads/2025/10/img_4266.jpeg?w=570",
                url: "https://jadareneel932.wordpress.com/2025/10/12/top-4-ways-to-build-your-confidence/",
                readTime: "2 min",
              },
              {
                title: "TaikoProject Delivers an Earth-Shaking Performance at Luhrs Performing Arts Center",
                excerpt: "On Mar. 5, 2026, TAIKOPROJECT performed at the H. Ric Luhrs Performing Arts Center — merging thundering rhythm with movement in a performance that shook the room.",
                date: "Mar 7, 2026",
                category: "Arts",
                imageUrl: "https://jadareneel932.wordpress.com/wp-content/uploads/2026/03/img_7957.jpg?w=1024",
                url: "https://jadareneel932.wordpress.com/2026/03/07/taikoproject-delivers-an-earth-shaking-performance-at-luhrs-performing-arts-center/",
                readTime: "2 min",
              },
            ].map((post, i) => (
              <motion.a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-semibold bg-background/90 text-primary px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-2">{post.date} · {post.readTime} read</p>
                  <h3 className="font-serif text-lg font-light leading-snug mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                  <span className="mt-4 text-xs uppercase tracking-widest text-primary font-semibold group-hover:underline underline-offset-4">
                    Read Article →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://jadareneel932.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm uppercase tracking-widest text-primary font-semibold border border-primary px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              Visit the Blog
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
