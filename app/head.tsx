export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Favicon for light and dark themes */}
      <link
        rel="icon"
        href="/faviconblack/favicon.ico"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        href="/faviconwhite/favicon.ico"
        media="(prefers-color-scheme: dark)"
      />

      {/* SEO Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Motion Age",
            url: "https://www.motionage.com", // Replace with your actual domain
            logo: "https://www.motionage.com/logo.png", // Replace with your actual logo URL
          }),
        }}
      />
    </>
  )
}
