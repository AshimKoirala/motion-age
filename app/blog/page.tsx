"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

const categories = ["All", "Design", "Development", "Marketing", "Technology", "Sustainability"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const featuredPost = blogPosts[0]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-10" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Our <span className="text-[#0db0fd]">Blog</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Insights, tips, and trends from our digital experts
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className={
                    category === selectedCategory
                      ? "bg-[#0db0fd] text-white hover:bg-[#0db0fd]/90"
                      : ""
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Featured Post */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
            <Image
              src={featuredPost.coverImage || "/placeholder.svg"}
              alt={featuredPost.title}
              width={1200}
              height={600}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#0db0fd] text-white px-3 py-1 rounded-full text-sm">Featured</span>
                <span className="text-white/80 text-sm">{featuredPost.date}</span>
                <span className="text-white/80 text-sm">•</span>
                <span className="text-white/80 text-sm">{featuredPost.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{featuredPost.title}</h2>
              <p className="text-white/90 mb-6 max-w-3xl">{featuredPost.excerpt}</p>
              <Button className="bg-[#0db0fd] hover:bg-[#0db0fd]/90">
                <Link href={`/blog/${featuredPost.slug}`}>Read Article</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-[#0db0fd]/10 text-[#0db0fd] px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.slug}`} className="text-[#0db0fd] font-medium hover:underline">
                    Read more
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="mt-12 text-center text-muted-foreground">
              No blog posts found matching your criteria.
            </div>
          )}

          {filteredPosts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <Button variant="outline">Load More Articles</Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay updated with the latest insights, tips, and trends in the digital world
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-[#0db0fd] hover:bg-[#0db0fd]/90">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
