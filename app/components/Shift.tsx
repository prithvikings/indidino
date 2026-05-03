"use client";

import React from "react";

const WhatWeDo = () => {
  return (
    <div className="border border-t-0 border-b-0 border-zinc-300 font-sans max-w-6xl mx-auto py-10 max-md:py-6 max-md:border-x-0">
      {/* Main Title Section */}
      <div className="text-center px-6 py-10 max-w-4xl mx-auto mb-6 max-md:py-4 max-md:mb-2 max-sm:px-4">
        <h2 className="text-4xl md:text-[40px] font-medium text-zinc-900 tracking-tight mb-4 leading-tight max-sm:text-3xl max-sm:leading-snug">
          Meet your silent app memory layer that{" "}
          <br className="hidden md:block" /> catches every missed text
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto px-6 max-md:px-4 max-md:gap-4">
        {/* Left Card: Context Finder */}
        <div className="flex-1 bg-[#FAFAFA] border border-zinc-100 rounded-3xl p-8 flex flex-col max-md:p-5 max-md:rounded-2xl">
          <div className="flex justify-between items-start mb-4 max-md:mb-3">
            <h3 className="text-xl font-medium text-zinc-900 max-md:text-lg">
              Context finder
            </h3>
            <button className="bg-zinc-100 p-2 rounded-full hover:bg-zinc-200 transition-colors text-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </button>
          </div>
          <p className="text-zinc-500 mb-8 text-sm max-md:mb-5">
            Watches your activity across all apps to catch missed tasks.
          </p>

          {/* Inner Mock UI */}
          {/* Added pb-16 to protect the absolute positioned tabs from text overlap */}
          <div className="bg-[#F4F4F5] rounded-2xl p-6 flex-1 flex flex-col relative min-h-[350px] max-md:p-4 max-md:pb-16 max-md:min-h-0">
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-10 max-md:mb-6">
              <span>Parsing</span>
              <span className="bg-green-500 text-white rounded-sm px-1 text-[10px] font-bold">
                W
              </span>
              <span>WhatsApp chat</span>
            </div>

            <div className="space-y-6 max-w-sm mx-auto w-full">
              {/* User message */}
              <div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm border border-zinc-100">
                <div className="w-6 h-6 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400 shrink-0">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="text-sm text-zinc-800 font-medium">
                  Send it by tomorrow
                </span>
              </div>

              {/* Status items */}
              <div className="pl-3 space-y-4">
                <div className="flex items-center gap-3 text-xs text-zinc-600 font-medium">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Scan memory</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-500 font-medium">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="animate-spin text-zinc-400 shrink-0 mt-0.5"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  <span className="flex items-center gap-1 flex-wrap">
                    Detect missing follow-ups
                    <span className="w-3.5 h-3.5 bg-indigo-500 text-white rounded-sm flex items-center justify-center text-[8px] font-bold shrink-0">
                      D
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Tabs */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-sm">
              <button className="text-zinc-900 border-b-2 border-zinc-900 pb-1 font-medium">
                Identified
              </button>
              <button className="text-zinc-400 pb-1 hover:text-zinc-600 transition-colors">
                All tasks
              </button>
            </div>
          </div>
        </div>

        {/* Right Card: Drafting Agent */}
        <div className="flex-1 bg-[#FAFAFA] border border-zinc-100 rounded-3xl p-8 flex flex-col max-md:p-5 max-md:rounded-2xl">
          <div className="flex justify-between items-start mb-4 max-md:mb-3">
            <h3 className="text-xl font-medium text-zinc-900 max-md:text-lg">
              Drafting agent
            </h3>
            <button className="bg-zinc-100 p-2 rounded-full hover:bg-zinc-200 transition-colors text-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </button>
          </div>
          <p className="text-zinc-500 mb-8 text-sm max-md:mb-5">
            Drafts and finishes your pending tasks.
          </p>

          {/* Inner Mock UI */}
          {/* Added pb-16 to protect the absolute positioned tabs */}
          <div className="bg-[#F4F4F5] rounded-2xl p-6 flex-1 flex flex-col relative min-h-[350px] max-md:p-4 max-md:pb-16 max-md:min-h-0">
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-8 max-md:mb-6">
              <span>Parsing</span>
              <span className="text-[#E01E5A] font-bold text-sm">#</span>
              <span>#client-project-tasks</span>
            </div>

            <div className="max-w-sm mx-auto w-full mb-12 relative max-md:mb-6">
              {/* Vertical connecting line */}
              <div className="absolute left-4 top-8 bottom-12 w-px bg-zinc-200"></div>

              <div className="space-y-4">
                {/* Trigger message */}
                <div className="bg-white rounded-xl p-3.5 shadow-sm border border-zinc-100 w-full relative z-10">
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-zinc-700">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Trigger: Days pass
                  </div>
                  <p className="text-sm text-zinc-700">
                    Notice the cold chats and, if required, draft new replies.
                  </p>
                </div>

                {/* Shram message */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-zinc-100 w-full relative z-10">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-zinc-50 font-bold text-[10px] shrink-0">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 22L12 2L22 22H2Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-zinc-900 leading-none mb-1">
                        Shram.ai
                      </div>
                      <div className="text-[11px] text-zinc-500 font-medium flex items-center gap-1">
                        <span className="opacity-70">📄</span> Draft execution
                        request
                      </div>
                    </div>
                  </div>
                  <p className="text-[13px] text-zinc-800 mb-4 leading-relaxed">
                    <strong className="font-semibold">Drafting recap:</strong> I
                    have written a new follow-up response for the client you met
                    last week, as they have not replied to your previous email
                    messages.
                  </p>

                  {/* Buttons stack on smaller screens to prevent overflow */}
                  <div className="flex gap-2 max-sm:flex-col">
                    <button className="flex items-center justify-center gap-1.5 text-xs border border-zinc-200 px-3 py-1.5 rounded font-medium text-zinc-700 hover:bg-zinc-50 transition-colors max-sm:w-full">
                      <span className="text-green-500 bg-green-100 rounded-sm px-0.5">
                        ✓
                      </span>{" "}
                      Approve drafts
                    </button>
                    <button className="text-xs border border-zinc-200 px-3 py-1.5 rounded font-medium text-zinc-700 hover:bg-zinc-50 transition-colors max-sm:w-full text-center">
                      Edit in interface
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tabs */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-sm">
              <button className="text-zinc-900 border-b-2 border-zinc-900 pb-1 font-medium">
                Identified
              </button>
              <button className="text-zinc-400 pb-1 hover:text-zinc-600 transition-colors">
                All tasks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
