import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="https://www.facebook.com/profile.php?id=61571351039643" className="text-muted-foreground hover:text-[#0db0fd]">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="https://www.instagram.com/motion_age/" className="text-muted-foreground hover:text-[#0db0fd]">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://x.com/motion_age" className="text-muted-foreground hover:text-[#0db0fd]">
            <span className="sr-only">X</span>
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/company/motionage/" className="text-muted-foreground hover:text-[#0db0fd]">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Motion Age. All rights reserved.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/about" className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]">
                  Our Works
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">Services</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/services#web-development"
                  className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#app-development"
                  className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#graphic-design"
                  className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]"
                >
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">More Services</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/services#video-editing"
                  className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]"
                >
                  Video Editing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#seo-optimization"
                  className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]"
                >
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services#digital-marketing"
                  className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm leading-6 text-muted-foreground hover:text-[#0db0fd]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
