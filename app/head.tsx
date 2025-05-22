export default function Head() {
  return (
    <>
      <title>Motion Age | Digital Solutions for Modern Businesses</title>
      <meta
        name="description"
        content="Motion Age (also known as MotionAge) provides innovative web design, development, SEO, and branding services tailored for startups and enterprises."
      />
      <meta
        name="keywords"
        content="Motion Age, MotionAge, motion age, web design, web development,nepal software company, IT company branding, SEO, branding, digital agency"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta charSet="UTF-8" />


      {/* Favicon based on browser theme */}
      {/* <link rel="icon" href="/faviconblack.ico" media="(prefers-color-scheme: light)" />
      <link rel="icon" href="/faviconwhite.ico" media="(prefers-color-scheme: dark)" />
      <link rel="icon" href="/faviconwhite.ico" />  */}

      <link rel="apple-touch-icon" href="/faviconwhite/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Open Graph Meta for Social Sharing */}
      <meta property="og:title" content="Motion Age | Creative Web Solutions" />
      <meta
        property="og:description"
        content="Motion Age (MotionAge) offers top-notch web solutions, SEO, and branding services."
      />
      <meta property="og:image" content="https://www.motionage.com/logo.png" />
      <meta property="og:url" content="https://www.motionage.com" />
      <meta property="og:type" content="website" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Motion Age",
            url: "https://www.motionage.com",
            logo: "https://www.motionage.com/logo.png",
            sameAs: [
              "https://www.facebook.com/p/Motion-Age-61571351039643", 
              "https://np.linkedin.com/company/motionage?trk=public_post_feed-actor-image"
            ]
          }),
        }}
      />
    </>
  );
}

