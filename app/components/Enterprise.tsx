"use client";

import React from "react";

const Enterprise = () => {
  return (
    <div className="max-w-6xl mx-auto border border-b-0 border-t-0 border-zinc-300 bg-[#FAFAFA] font-sans flex flex-col max-md:border-x-0">
      {/* Top Header Bar */}
      <div className="sticky top-[64px] z-10 bg-[#FAFAFA] flex justify-between items-center px-6 py-4 border-b border-t-0 border-zinc-300 text-xs font-dmmono text-zinc-500 tracking-wider max-md:px-4 max-md:py-3">
        <div>WORKSPACES</div>
        <div>
          [<span className="text-blue-500">3</span>/4]
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center px-6 py-28 max-w-3xl mx-auto max-md:py-16 max-md:px-4">
        <h2 className="text-5xl font-medium text-zinc-900 tracking-tight mb-6 font-space max-sm:text-4xl max-sm:leading-tight">
          Built for busy agency workers.
        </h2>
        <p className="text-md text-zinc-500 leading-relaxed max-w-2xl mx-auto max-sm:text-sm">
          If your work runs on relationships that need to keep moving, Shram is
          the silent autopilot that keeps things flowing. State-of-the-art
          memory, wherever you need it.
        </p>
      </div>

      {/* Logos Section */}
      <div className="flex flex-col border-t border-zinc-200 bg-[#FAFAFA]">
        <div className="py-8 text-center border-b border-zinc-200 max-md:py-5 max-md:px-4">
          <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase max-sm:text-[10px]">
            Some of the best teams trust Shram AI to catch their tasks
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-[#FAFAFA]">
          {/* Stripe - Top Left on Mobile */}
          <div className="py-12 flex justify-center items-center border-b md:border-b-0 md:border-r border-zinc-200 opacity-40 hover:opacity-70 transition-opacity grayscale max-md:py-8 max-md:border-r">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-zinc-900 max-md:text-xl">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="max-md:w-6 max-md:h-6"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m8 12 3 3 5-5" />
              </svg>
              Stripe
            </div>
          </div>

          {/* Notion - Top Right on Mobile */}
          <div className="py-12 flex justify-center items-center border-b md:border-b-0 md:border-r border-zinc-200 opacity-40 hover:opacity-70 transition-opacity grayscale max-md:py-8 max-md:border-r-0">
            <div className="flex items-center justify-center font-bold text-xl tracking-widest text-zinc-900 border-2 rounded-full border-zinc-900 px-1 py-4 relative w-24 h-24 max-md:w-20 max-md:h-20 max-md:text-lg">
              <span className="absolute bg-[#FAFAFA] px-1">NOTION</span>
            </div>
          </div>

          {/* WhatsApp - Bottom Left on Mobile */}
          <div className="py-12 flex justify-center items-center border-b md:border-b-0 md:border-r border-zinc-200 opacity-40 hover:opacity-70 transition-opacity grayscale max-md:py-8 max-md:border-b-0 max-md:border-r">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-zinc-900 max-md:text-xl">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="max-md:w-7 max-md:h-7"
              >
                <path d="M22 2 11 13" />
                <path d="m22 2-7 20-4-9-9-4Z" />
              </svg>
              WhatsApp
            </div>
          </div>

          {/* Telegram - Bottom Right on Mobile */}
          <div className="py-12 flex justify-center items-center opacity-40 hover:opacity-70 transition-opacity grayscale max-md:py-8">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-zinc-900 max-md:text-xl">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="max-md:w-6 max-md:h-6"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Telegram
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-200 bg-[#FAFAFA]">
        {/* Feature 1 */}
        <div className="flex flex-col p-10 py-2 border-b md:border-b-0 md:border-r border-zinc-200 max-md:p-8">
          <div className="w-12 h-12 bg-[#E6EFFF] rounded-xl flex items-center justify-center text-blue-500 mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h3 className="text-md font-space font-semibold text-zinc-900 mb-2">
            Runs quietly in the back.
          </h3>
          <p className="text-zinc-500 leading-relaxed text-sm">
            Shram works right out of the box without needing complex setup.
            Total user control.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col p-10 py-2 border-b md:border-b-0 md:border-r border-zinc-200 max-md:p-8">
          <div className="w-12 h-12 bg-[#E6EFFF] rounded-xl flex items-center justify-center text-blue-500 mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h3 className="text-md font-space font-semibold text-zinc-900 mb-2">
            Private and secure
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 rounded">
              LOCAL
            </span>
            <span className="px-2 py-1 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 rounded">
              OAUTH
            </span>
            <span className="px-2 py-1 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 rounded">
              FAST
            </span>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors inline-flex items-center mt-auto"
          >
            Read our privacy page <span className="ml-1">→</span>
          </a>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col p-10 py-2 max-md:p-8">
          <div className="w-12 h-12 bg-[#E6EFFF] rounded-xl flex items-center justify-center text-blue-500 mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <h3 className="text-md font-space font-semibold text-zinc-900 mb-2">
            Remembers history
          </h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Shram remembers everything you promised.{" "}
            <br className="hidden md:block" /> No data dropped.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
