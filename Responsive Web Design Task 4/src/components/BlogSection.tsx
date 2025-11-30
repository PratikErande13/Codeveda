import { ArrowRight, Clock, User, Bookmark } from "lucide-react";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const blogPosts = [
  {
    id: 1,
    image: gallery3,
    category: "Design",
    title: "The Art of Minimalist Photography",
    excerpt:
      "Discover how simplicity in composition can create powerful visual narratives that resonate with viewers.",
    author: "Sarah Chen",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    image: gallery6,
    category: "Lifestyle",
    title: "Bringing Nature Indoors",
    excerpt:
      "Tips for incorporating botanical elements into your living space for a calming atmosphere.",
    author: "Marcus Webb",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 3,
    image: gallery2,
    category: "Interior",
    title: "Light & Space in Modern Living",
    excerpt:
      "How natural lighting transforms interior spaces and influences our daily well-being.",
    author: "Elena Russo",
    readTime: "6 min read",
    featured: false,
  },
];

const BlogSection = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section id="blog" className="py-24 md:py-36 gradient-subtle relative overflow-hidden noise">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-sm font-medium mb-6">
              Flexbox Layout
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Latest <span className="text-gradient-sunset">Stories</span>
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <span className="font-body text-sm font-medium text-foreground">View All</span>
            <ArrowRight
              size={16}
              className="text-primary group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* Flexbox Blog Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Post */}
          {featuredPost && (
            <article
              className="lg:flex-1 group cursor-pointer opacity-0 animate-slide-in-left"
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-card hover:shadow-hover transition-all duration-500 h-full flex flex-col gradient-border">
                <div className="relative h-72 lg:h-96 overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-4 py-2 gradient-warm text-primary-foreground text-xs font-semibold rounded-full shadow-card">
                      Featured
                    </span>
                  </div>

                  {/* Bookmark */}
                  <button className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                    <Bookmark size={18} />
                  </button>
                </div>

                <div className="flex-1 flex flex-col p-8 bg-card">
                  <span className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-4">
                    {featuredPost.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-8 flex-1 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div className="flex items-center gap-5">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User size={14} className="text-primary" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock size={14} className="text-primary" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center group-hover:scale-110 transition-transform shadow-card">
                      <ArrowRight size={16} className="text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Regular Posts */}
          <div className="lg:w-[420px] flex flex-col gap-6">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="group cursor-pointer opacity-0 animate-slide-in-right"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex gap-5 p-5 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-500 border border-transparent hover:border-primary/20">
                  <div className="w-28 h-28 flex-shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0 flex-1">
                    <span className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                      {post.category}
                    </span>
                    <h4 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3 leading-snug">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Flexbox Info */}
            <div className="flex items-center justify-center gap-4 p-5 rounded-2xl border-2 border-dashed border-border mt-2">
              <span className="font-body text-sm text-muted-foreground">
                Built with <code className="px-2 py-0.5 rounded bg-muted text-primary font-mono text-xs">display: flex</code>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
