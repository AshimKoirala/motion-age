import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import { ThemeProvider } from '@/components/theme-provider'
import DynamicFavicon from '@/components/dynamic-favicon' // import client favicon logic

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Motion Age - Digital Solutions for Modern Businesses',
  description:
    'Motion Age offers web development, app development, graphic design, video editing, and SEO optimization services to help your business thrive in the digital age.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/faviconwhite.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <DynamicFavicon />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
