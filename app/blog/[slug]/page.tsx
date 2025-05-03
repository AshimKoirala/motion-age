import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === params.slug)

  // If no post is found, return 404
  if (!post) {
    notFound()
  }

  // Get 3 related posts (excluding the current post)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-10" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-[#0db0fd] mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#0db0fd]/10 text-[#0db0fd] px-3 py-1 rounded-full text-sm">{post.category}</span>
              <span className="flex items-center text-muted-foreground text-sm">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center text-muted-foreground text-sm">
                <Clock className="mr-1 h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>

            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-full overflow-hidden relative">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{post.author.name}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
              <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Social Share Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="flex flex-col gap-4 items-center">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Share</div>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-[#0db0fd]">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                <div className="text-sm font-medium mr-2">Tags:</div>
                {post.tags.map((tag) => (
                  <Button key={tag} variant="outline" size="sm">
                    {tag}
                  </Button>
                ))}
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-accent rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden relative">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold">{post.author.name}</div>
                  </div>
                </div>
              </div>

              {/* Social Share Mobile */}
              <div className="mt-8 flex justify-center gap-4 lg:hidden">
                <div className="text-sm font-medium text-muted-foreground mr-2 self-center">Share:</div>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Related Articles</h2>
            <p className="mt-4 text-muted-foreground">You might also be interested in these articles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <Image
                    src={relatedPost.coverImage || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-[#0db0fd]/10 text-[#0db0fd] px-2 py-1 rounded-full">
                      {relatedPost.category}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2">{relatedPost.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-muted-foreground">{relatedPost.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${relatedPost.slug}`} className="text-[#0db0fd] font-medium hover:underline">
                    Read more
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Enjoyed this article?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Subscribe to our newsletter to get the latest insights delivered to your inbox
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button className="bg-[#0db0fd] hover:bg-[#0db0fd]/90">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
