import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Divider from "./components/Divider";

const Shift = dynamic(() => import("./components/Shift"));
const What = dynamic(() => import("./components/What"));
const Whatwedo = dynamic(() => import("./components/Whatwedo"));
const Benchmark = dynamic(() => import("./components/Benchmark"));
const Localisation = dynamic(() => import("./components/Localisation"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const Pricing = dynamic(() => import("./Pricing/page"));

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Shram.ai",
    "operatingSystem": "Web, Windows, macOS",
    "applicationCategory": "ProductivityApplication",
    "description": "Shram quietly monitors your chats and emails and drafts perfect responses instantly.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1200"
    }
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shram.ai",
    "url": "https://shram.ai",
    "logo": "https://shram.ai/logo.png",
    "sameAs": [
      "https://twitter.com/shram_ai",
      "https://github.com/shram-ai"
    ]
  };

  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 w-full min-h-screen relative pb-24 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Navbar />
      <Hero />
      <Divider height={16} />
      <Shift />
      <Divider height={16} />

      {/* Wrapper added with ID and scroll-margin for Features */}
      <section id="features" className="scroll-mt-24">
        <What />
      </section>

      <Whatwedo />
      <Benchmark />
      <Localisation />
      <Divider height={16} />
      <Testimonials />
      <Divider height={16} />

      {/* Wrapper added with ID and scroll-margin for Pricing */}
      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>

      {/* --- Bottom Fade/Blur Effect --- */}
      <div className="hidden lg:block fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-100 via-zinc-100/80 dark:from-zinc-950 dark:via-zinc-950/80 to-transparent pointer-events-none z-40 backdrop-blur-sm [mask-image:linear-gradient(to_top,white,transparent)]"></div>
    </div>
  );
};

export default page;
