import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      title: "Getting Started with Modern Web Development",
      excerpt: "Learn the fundamentals of modern web development and discover the tools and technologies that will help you build better websites.",
      date: "Nov 15, 2025",
      readTime: "5 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    },
    {
      title: "The Importance of Responsive Design",
      excerpt: "In today's mobile-first world, responsive design is more important than ever. Discover why and how to implement it effectively.",
      date: "Nov 12, 2025",
      readTime: "4 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=400&fit=crop",
    },
    {
      title: "Top 10 CSS Tips for Better Layouts",
      excerpt: "Master CSS layouts with these essential tips and tricks that will help you create beautiful, maintainable stylesheets.",
      date: "Nov 8, 2025",
      readTime: "6 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
    },
    {
      title: "JavaScript Best Practices in 2025",
      excerpt: "Stay up to date with the latest JavaScript best practices and learn how to write cleaner, more efficient code.",
      date: "Nov 5, 2025",
      readTime: "7 min read",
      category: "JavaScript",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop",
    },
    {
      title: "Optimizing Website Performance",
      excerpt: "Learn proven techniques to improve your website's loading speed and overall performance for better user experience.",
      date: "Nov 1, 2025",
      readTime: "5 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    },
    {
      title: "Building Accessible Websites",
      excerpt: "Create inclusive web experiences that work for everyone by following accessibility best practices and guidelines.",
      date: "Oct 28, 2025",
      readTime: "6 min read",
      category: "Accessibility",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Latest <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and updates from our team
            </p>
          </div>

          {/* Featured Post */}
          <Card className="border-border mb-12 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center space-x-2 text-sm">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-muted-foreground">Featured Post</span>
                </div>
                <h2 className="text-3xl font-bold">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground">{blogPosts[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Button className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card
                key={index}
                className="border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold line-clamp-2">{post.title}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
