import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t text-muted-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-8">
        {/* Left Side - Brand Info & Socials */}
        <div>
          <h2 className="text-xl font-bold text-foreground">Motion Age Pvt. Ltd.</h2>
          <p className="mt-4 text-sm leading-relaxed">
            We bring your ideas to life with high-performing websites, stunning apps, creative media, and impactful digital strategies. Let's innovate together.
          </p>

          <div className="mt-6 flex space-x-5">
            <Link href="https://www.facebook.com/profile.php?id=61571351039643" className="hover:text-[#0db0fd]">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/motion_age/" className="hover:text-[#0db0fd]">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://x.com/motion_age" className="hover:text-[#0db0fd]">
              <span className="sr-only">X</span>
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/company/motionage/" className="hover:text-[#0db0fd]">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Right Side - Links */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Link Sections */}
          {[
            {
              title: "Company",
              links: [
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Careers", href: "/careers" },
              ],
            },
            {
              title: "Services",
              links: [
                { name: "Web Development", href: "/services#web-development" },
                { name: "App Development", href: "/services#app-development" },
                { name: "Graphic Design", href: "/services#graphic-design" },
              ],
            },
            {
              title: "More",
              links: [
                { name: "Video Editing", href: "/services#video-editing" },
                { name: "SEO Optimization", href: "/services#seo-optimization" },
                { name: "Digital Marketing", href: "/services#digital-marketing" },
              ],
            },
            // {
            //   title: "Legal",
            //   links: [
            //     { name: "Privacy", href: "#" },
            //     { name: "Terms", href: "#" },
            //     { name: "Contact", href: "/contact" },
            //   ],
            // },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:text-[#0db0fd]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t mt-6">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Motion Age. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
