import { BlogPost } from "@/lib/data";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const isExternal = !!post.externalUrl;
  const href = post.externalUrl ?? `/blog`;

  const Wrap = ({ children, className }: { children: React.ReactNode; className?: string }) =>
    isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
    ) : (
      <Link href={href} className={className}>{children}</Link>
    );


  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col bg-card border border-border overflow-hidden"
    >
      <Wrap className="relative overflow-hidden block aspect-[4/3]">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] tracking-widest uppercase font-medium text-white/90 border border-white/20 bg-black/30 backdrop-blur-sm px-3 py-1">
            {post.category}
          </span>
        </div>
      </Wrap>

      <div className="p-7 flex flex-col flex-grow border-t border-border">
        <div className="flex items-center gap-3 mb-5">
          <span className="luxury-label text-foreground/40">{post.date}</span>
          <span className="w-px h-3 bg-border" />
          <span className="luxury-label text-foreground/40">{post.readTime} read</span>
        </div>

        <Wrap className="block mb-4">
          <h3 className="font-serif text-2xl md:text-3xl font-light leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h3>
        </Wrap>

        <p className="text-foreground/50 text-sm leading-relaxed mb-8 flex-grow font-light">
          {post.excerpt}
        </p>

        <Wrap className="inline-flex items-center gap-3 mt-auto w-fit">
          <span className="luxury-label text-primary group-hover:text-primary/70 transition-colors duration-300">
            Read Article
          </span>
          <div className="w-8 h-px bg-primary group-hover:w-14 transition-all duration-500" />
        </Wrap>
      </div>
    </motion.article>
  );
}
