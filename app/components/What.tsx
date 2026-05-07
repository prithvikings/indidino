"use client";

import React, { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { ArrowRight01Icon } from "hugeicons-react";
import Image from "next/image";

const What = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveStep(1);
    } else if (latest >= 0.33 && latest < 0.66) {
      setActiveStep(2);
    } else {
      setActiveStep(3);
    }
  });

  const smoothTransition =
    "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]";

  return (
    <div className="max-w-6xl mx-auto border-x border-t-0 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-sans max-md:border-x-0 transition-colors duration-300">
      {/* Top Header Bar */}
      <div className="flex justify-between items-center px-8 py-4 border-b border-t-0 border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500 dark:text-zinc-400 tracking-widest uppercase sticky top-[64px] z-45 bg-[#FAFAFA] dark:bg-zinc-900/50 backdrop-blur-md max-md:px-4 max-md:py-3 transition-colors duration-300">
        <div>WHAT WE DO</div>
        <div>
          [<span className="text-blue-500 dark:text-blue-400">1</span>/4]
        </div>
      </div>

      <div className="text-center px-6 pt-24 pb-16 max-w-4xl mx-auto max-md:pt-12 max-md:pb-8 max-md:px-4">
        <div className="flex items-center justify-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 group-hover:underline cursor-pointer w-max mx-auto max-sm:text-xs transition-colors duration-300">
          Check out drafting app{" "}
          <ArrowRight01Icon size={18} className="max-sm:w-4 max-sm:h-4" />
        </div>
        <h2 className="text-4xl font-medium text-zinc-900 dark:text-zinc-50 tracking-tight mb-4 leading-tight max-sm:text-3xl max-sm:leading-snug max-sm:px-2 transition-colors duration-300">
          It catches every forgotten text you miss
        </h2>
      </div>

      {/* The Scroll Container */}
      <div ref={containerRef} className="relative h-[250vh]">
        {/* The Sticky Wrapper */}
        <div className="sticky top-[120px] px-8 pb-24 max-md:px-4 max-md:pb-12 max-md:top-[100px]">
          <div className="bg-[#FAFAFA] dark:bg-zinc-900/40 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 flex flex-col md:flex-row min-h-[500px] max-md:min-h-0 overflow-hidden transition-colors duration-300">
            {/* Left Side: Mock UI on Dynamic Background */}
            <div className="w-full md:w-[45%] p-6 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#80b1ff] to-[#d6e5ff] dark:from-indigo-950/80 dark:to-slate-900/80 max-md:py-10 max-md:p-4 transition-colors duration-300">
              {/* Converted inline styles to Tailwind classes for dark mode support */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[size:16px_16px] bg-[image:radial-gradient(#ffffff_1px,transparent_1px)] dark:bg-[image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>

              {/* Mock UI Card */}
              <div className="bg-white dark:bg-zinc-950 rounded-xl shadow-sm w-full max-w-[340px] p-5 relative z-10 font-sans text-sm border border-white/50 dark:border-zinc-800 max-md:p-4 transition-colors duration-300">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-4 max-md:mb-3 transition-colors">
                  Sources
                </h3>

                <div className="space-y-4 max-md:space-y-3">
                  {/* Knowledge Sources */}
                  <div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2 transition-colors">
                      Communication app
                    </p>
                    <div className="space-y-2">
                      {/* Whatsapp */}
                      <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer text-xs">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/whats.png"
                            alt="WhatsApp"
                            width={64}
                            height={64}
                            className="w-4 h-4 object-contain shrink-0"
                          />
                          <span className="font-medium text-zinc-700 dark:text-zinc-300 transition-colors">
                            Whatsapp
                          </span>
                        </div>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-zinc-400 shrink-0"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>

                      {/* Gmail */}
                      <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer text-xs">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/gmail.webp"
                            alt="Gmail"
                            width={32}
                            height={32}
                            className="w-4 h-4 object-contain shrink-0"
                          />
                          <span className="font-medium text-zinc-700 dark:text-zinc-300 flex flex-wrap gap-x-1 transition-colors">
                            Gmail inboxes{" "}
                            <span className="text-zinc-400 dark:text-zinc-500 font-normal">
                              1432 threads (needs replies)
                            </span>
                          </span>
                        </div>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-zinc-400 shrink-0"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>

                      {/* Google Calendar */}
                      <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer text-xs">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/googlecalander.png"
                            alt="Google Calendar"
                            width={32}
                            height={32}
                            className="w-4 h-4 object-contain shrink-0"
                          />
                          <span className="font-medium text-zinc-700 dark:text-zinc-300 transition-colors">
                            Google calendar
                          </span>
                        </div>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-zinc-400 shrink-0"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>

                      {/* Slack */}
                      <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer text-xs">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/slack.png"
                            alt="Slack"
                            width={32}
                            height={32}
                            className="w-4 h-4 object-contain shrink-0"
                          />
                          <span className="font-medium text-zinc-700 dark:text-zinc-300 transition-colors">
                            Slack-workspaces{" "}
                            <span className="text-zinc-400 dark:text-zinc-500 font-normal">
                              251 channels
                            </span>
                          </span>
                        </div>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-zinc-400 shrink-0"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>

                      <button className="flex items-center justify-center gap-2 w-full p-2 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors text-xs font-medium">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="shrink-0"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                        Add
                      </button>
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2 transition-colors">
                      Syncs
                    </p>
                    <div className="space-y-2">
                      {/* Outlook */}
                      <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer text-xs">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/outlook.png"
                            alt="Outlook"
                            width={32}
                            height={32}
                            className="w-4 h-4 object-contain shrink-0"
                          />
                          <span className="font-medium text-zinc-700 dark:text-zinc-300 transition-colors">
                            Outlook
                          </span>
                        </div>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-zinc-400 shrink-0"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>

                      {/* Notion */}
                      <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer text-xs">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/notion.png"
                            alt="Notion"
                            width={32}
                            height={32}
                            className="w-4 h-4 object-contain shrink-0 dark:invert"
                          />
                          <span className="font-medium text-zinc-700 dark:text-zinc-300 transition-colors">
                            Notion
                          </span>
                        </div>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-zinc-400 shrink-0"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>

                      <button className="flex items-center justify-center gap-2 w-full p-2 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors text-xs font-medium">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="shrink-0"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button className="bg-[#18181A] dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-300 transition-colors max-sm:w-full">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z" />
                    </svg>
                    Track
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side: Dynamic Text Steps */}
            <div className="w-full md:w-[55%] p-10 md:p-14 flex flex-col justify-center gap-8 max-md:p-6 max-md:gap-6 bg-white dark:bg-zinc-950/50 transition-colors duration-300">
              {/* Step 1 */}
              <div
                className={`border-b pb-8 max-md:pb-5 ${smoothTransition} ${
                  activeStep === 1
                    ? "border-zinc-800 dark:border-zinc-200 opacity-100"
                    : "border-zinc-200 dark:border-zinc-800 opacity-40"
                }`}
              >
                <h3
                  className={`text-xl md:text-2xl font-medium mb-3 max-md:text-lg max-md:mb-2 ${smoothTransition} ${
                    activeStep === 1
                      ? "text-zinc-900 dark:text-zinc-50"
                      : "text-zinc-400 dark:text-zinc-600"
                  }`}
                >
                  Step 1: Shram links to your chat apps
                </h3>
                <p
                  className={`leading-relaxed text-sm md:text-base ${smoothTransition} ${
                    activeStep === 1
                      ? "text-zinc-500 dark:text-zinc-300"
                      : "text-zinc-400 dark:text-zinc-600"
                  }`}
                >
                  Link up your daily chat apps and tools, and Shram builds your
                  memory system.
                </p>
              </div>

              {/* Step 2 */}
              <div
                className={`border-b pb-8 max-md:pb-5 ${smoothTransition} ${
                  activeStep === 2
                    ? "border-zinc-800 dark:border-zinc-200 opacity-100"
                    : "border-zinc-200 dark:border-zinc-800 opacity-40"
                }`}
              >
                <h3
                  className={`text-xl md:text-2xl font-medium mb-3 max-md:text-lg max-md:mb-2 ${smoothTransition} ${
                    activeStep === 2
                      ? "text-zinc-900 dark:text-zinc-50"
                      : "text-zinc-400 dark:text-zinc-600"
                  }`}
                >
                  Step 2: You forgot to text back.
                </h3>
                <p
                  className={`leading-relaxed text-sm md:text-base ${smoothTransition} ${
                    activeStep === 2
                      ? "text-zinc-500 dark:text-zinc-300"
                      : "text-zinc-400 dark:text-zinc-600"
                  }`}
                >
                  Shram runs silently in the background and notices when a
                  conversation dies.
                </p>
              </div>

              {/* Step 3 */}
              <div
                className={`${smoothTransition} ${
                  activeStep === 3 ? "opacity-100" : "opacity-40"
                }`}
              >
                <h3
                  className={`text-xl md:text-2xl font-medium mb-3 max-md:text-lg max-md:mb-2 ${smoothTransition} ${
                    activeStep === 3
                      ? "text-zinc-900 dark:text-zinc-50"
                      : "text-zinc-400 dark:text-zinc-600"
                  }`}
                >
                  Step 3: Shram acts
                </h3>
                <p
                  className={`leading-relaxed text-sm md:text-base ${smoothTransition} ${
                    activeStep === 3
                      ? "text-zinc-500 dark:text-zinc-300"
                      : "text-zinc-400 dark:text-zinc-600"
                  }`}
                >
                  It flags the cold chat and drafts a perfect reply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
