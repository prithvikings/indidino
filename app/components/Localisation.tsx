"use client";

import React from "react";

// Reusable SVG Cube Icon
const WireframeCube = ({ className }: { className?: string }) => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 140 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-colors duration-300 ${className}`}
  >
    {/* Top Face */}
    <path
      d="M70 5 L135 35 L70 65 L5 35 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Left Face */}
    <path
      d="M5 35 L70 65 L70 115 L5 85 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Right Face */}
    <path
      d="M70 65 L135 35 L135 85 L70 115 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />

    {/* Inner Top Face Detail */}
    <path
      d="M70 18 L115 35 L70 52 L25 35 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />

    {/* Vertical dashed lines for left face */}
    <path
      d="M25 45 L25 90"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="3 4"
    />
    <path
      d="M48 55 L48 100"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="3 4"
    />

    {/* Vertical dashed lines for right face */}
    <path
      d="M115 45 L115 90"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="3 4"
    />
    <path
      d="M92 55 L92 100"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="3 4"
    />
  </svg>
);

const featureData = [
  {
    overline: "PER CLIENT",
    title: "One background tracker set per client.",
    description:
      "Set up a background tracker for every conversation or channel in the desktop app. Each client gets their own memory, task draft, and chat history.",
  },
  {
    overline: "PER CHANNEL",
    title: "One intelligent tracker per active channel.",
    description:
      "WhatsApp texts, Gmail threads, Slack channels, meeting notes – each has specific urgencies. Run a separate intelligent tracker per channel.",
  },
  {
    overline: "AT SCALE",
    title: "As many background trackers as you need.",
    description:
      "Background trackers are first-class organizational primitives on Shram.app. Integrate instantly. Act like an assistant. Run one or thousands – the software handles chat scanning, memory, and sending.",
  },
];

const Localisation = () => {
  return (
    <div className="bg-[#FAFAFA] dark:bg-zinc-950/40 font-sans max-w-6xl mx-auto flex justify-center py-24 border-b border-x border-zinc-300 dark:border-zinc-800 transition-colors duration-300 max-md:py-12 max-md:border-x-0">
      {/* Outer Dashed Container */}
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 max-md:px-4">
        {/* Header Section */}
        <div className="text-center mb-20 max-md:mb-10">
          <span className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-[11px] font-medium tracking-wide text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm transition-colors duration-300 max-md:mb-4">
            Autopilot
          </span>
          <h2 className="mb-5 font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 text-2xl leading-tight transition-colors duration-300 max-md:text-xl max-md:mb-3 max-md:px-2">
            A smart tracking layer per message. Per contact. Per app.
          </h2>
          <p className="max-w-xl mx-auto text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 transition-colors duration-300 max-md:px-2">
            Shram.app hosts tracking algorithms. Follow as many of your daily
            workflows as needed – each configured intelligently, auto-drafted
            via AI, resolvable in one.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 max-w-6xl mx-auto max-md:gap-4">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 px-2 pb-2 rounded-2xl transition-all duration-300 hover:border border-zinc-300 dark:hover:border-zinc-700 cursor-pointer max-md:pt-6 max-md:px-4 max-md:pb-6 max-md:border max-md:border-transparent active:border-zinc-300 dark:active:border-zinc-700"
            >
              {/* Icon Container with hover color change */}
              <div className="mb-10 text-zinc-300 dark:text-zinc-800 group-hover:text-[#16a34a] dark:group-hover:text-green-500 transition-colors duration-300 max-md:mb-6">
                <WireframeCube className="w-24 h-24 md:w-28 md:h-28" />
              </div>

              {/* Overline */}
              <div className="text-[11px] font-medium tracking-[0.15em] text-zinc-400 dark:text-zinc-500 uppercase mb-4 transition-colors duration-300 max-md:mb-3">
                {feature.overline}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-[17px] font-bold text-zinc-900 dark:text-zinc-100 leading-snug transition-colors duration-300 max-md:mb-2 max-md:text-base">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Localisation;
