import React from "react";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Divider from "./components/Divider";
import Whatwedo from "./components/Whatwedo";
import What from "./components/What";
import Shift from "./components/Shift";
import Benchmark from "./components/Benchmark";
import Enterprise from "./components/Enterprise";
import Localisation from "./components/Localisation";
import Testimonials from "./components/Testimonials";
import Pricing from "./Pricing/page";

const page = () => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 w-full min-h-screen relative pb-24 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Divider height={24} />
      <Shift />
      <Divider height={16} />
      <What />
      <Whatwedo />
      <Benchmark />
      <Localisation />
      <Divider height={24} />
      <Testimonials />
      <Divider height={16} />
      <Pricing />

      {/* --- Bottom Fade/Blur Effect --- */}
      {/* Updated the gradient to support dark mode zinc-950 */}
      <div className="hidden lg:block fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-100 via-zinc-100/80 dark:from-zinc-950 dark:via-zinc-950/80 to-transparent pointer-events-none z-40 backdrop-blur-sm [mask-image:linear-gradient(to_top,white,transparent)]"></div>
    </div>
  );
};

export default page;
