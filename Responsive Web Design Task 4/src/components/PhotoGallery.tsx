import { useState } from "react";
import { Expand, Heart } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  {
    id: 1,
    image: gallery1,
    title: "Architecture",
    category: "Urban",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 2,
    image: gallery2,
    title: "Interior",
    category: "Living",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: 3,
    image: gallery3,
    title: "Ceramics",
    category: "Craft",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    image: gallery4,
    title: "Landscape",
    category: "Nature",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    image: gallery5,
    title: "Portrait",
    category: "Fashion",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: 6,
    image: gallery6,
    title: "Botanical",
    category: "Still Life",
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

const PhotoGallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="gallery" className="py-24 md:py-36 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-sm font-medium mb-6">
            CSS Grid Layout
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A dynamic masonry-style layout powered by CSS Grid. 
            Hover over images to explore the interactive experience.
          </p>
        </div>

        {/* CSS Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 auto-rows-[280px] md:auto-rows-[320px]">
          {galleryItems.map((item, index) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.gridClass} opacity-0 animate-scale-in`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  hoveredId === item.id ? "scale-110 brightness-75" : "scale-100"
                }`}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent transition-opacity duration-500 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Content */}
              <div
                className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-500 ${
                  hoveredId === item.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {/* Top Actions */}
                <div className="flex justify-end gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(item.id);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      likedItems.includes(item.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
                    }`}
                  >
                    <Heart
                      size={18}
                      className={likedItems.includes(item.id) ? "fill-current" : ""}
                    />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-primary-foreground/20 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                    <Expand size={18} />
                  </button>
                </div>

                {/* Bottom Info */}
                <div>
                  <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/60 mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Corner Accent */}
              <div
                className={`absolute bottom-0 left-0 w-1 h-0 gradient-warm transition-all duration-500 ${
                  hoveredId === item.id ? "h-full" : ""
                }`}
              />
            </article>
          ))}
        </div>

        {/* Grid Info Badge */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-secondary border border-border">
            <span className="font-body text-sm text-muted-foreground">
              Built with <code className="px-2 py-0.5 rounded bg-muted text-primary font-mono text-xs">display: grid</code>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
