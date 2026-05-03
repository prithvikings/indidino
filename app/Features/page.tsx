"use client";

import React from "react";

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto border-x border-b border-zinc-300 bg-white font-sans flex flex-col">
      {/* Top Header Bar */}
      <div className="sticky top-[64px] z-40 bg-[#FAFAFA] flex justify-between items-center px-8 py-4 border-b border-zinc-300 text-xs font-dmmono text-zinc-500 tracking-widest uppercase">
        <div>FEATURES</div>
        <div>
          [<span className="text-blue-500">1</span>/3]
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center px-6 pt-24 pb-16 max-w-4xl mx-auto bg-[#FAFAFA]">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-[11px] font-medium tracking-wide text-zinc-600 bg-white border border-zinc-200 rounded-full shadow-sm">
          Core Integrations
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight mb-6 font-space">
          Every background task caught. <br className="hidden md:block" /> Never
          miss a beat.
        </h2>
        <p className="text-base text-zinc-500 leading-relaxed max-w-2xl mx-auto">
          We stripped away the menus to focus on what actually finishes threads:
          chat history, reliable memory checks, and autonomous drafting.
        </p>
      </div>

      {/* Feature 1: Split Content Area */}
      <div className="px-8 pb-20 bg-[#FAFAFA]">
        <div className="bg-white rounded-2xl border border-zinc-200 flex flex-col md:flex-row overflow-hidden min-h-[450px]">
          {/* Left Side: Text Description */}
          <div className="w-full md:w-[45%] p-10 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-200">
            <h3 className="text-2xl font-medium text-zinc-900 mb-4 font-space">
              Context-Aware Writing
            </h3>
            <p className="text-zinc-500 leading-relaxed text-sm mb-8">
              Your Shram AI doesn't just read the current message. It analyzes
              the entire workflow history, active conversations, and past
              relationships before deciding how to respond or draft the letter.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-zinc-700">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                Message cold tracking
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-700">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                Historical connection tracing
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-700">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                Automated routing
              </div>
            </div>
          </div>

          {/* Right Side: Mock UI */}
          <div className="w-full md:w-[55%] bg-[#F4F4F5] p-8 flex items-center justify-center relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            ></div>

            <div className="w-full max-w-sm bg-white border border-zinc-200 rounded-xl shadow-sm p-4 relative z-10">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-xs font-semibold text-zinc-800 uppercase tracking-wider">
                    Tracking Message #8842
                  </span>
                </div>
                <span className="text-[10px] text-zinc-400 font-mono">
                  14ms
                </span>
              </div>

              <div className="space-y-3">
                {/* Mock Code/Logic Blocks */}
                <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-zinc-600">
                      Fetch Client Chat
                    </span>
                    <span className="text-[10px] text-green-500 font-medium">
                      SUCCESS
                    </span>
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    {"{ status: 'ignored', days: 3.50 }"}
                  </div>
                </div>

                <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-zinc-600">
                      Check Drafted Status
                    </span>
                    <span className="text-[10px] text-green-500 font-medium">
                      DRAFT (3)
                    </span>
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    confidence_score: 0.94
                  </div>
                </div>

                {/* Dashed Connector */}
                <div className="flex justify-center py-1">
                  <div className="w-px h-4 border-l border-dashed border-zinc-300"></div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium">
                      Action: Auto-Drafted
                    </span>
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
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2: 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-300 bg-white">
        <div className="flex flex-col p-10 border-b md:border-b-0 md:border-r border-zinc-200 hover:bg-[#FAFAFA] transition-colors group cursor-pointer">
          <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-600 mb-6 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
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
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h3 className="text-md font-space font-semibold text-zinc-900 mb-3">
            Multi-channel Trackers
          </h3>
          <p className="text-zinc-500 leading-relaxed text-sm">
            Syncs with WhatsApp, Calendars, and your internal systems. If the
            details exist anywhere in your history, the system views it.
          </p>
        </div>

        <div className="flex flex-col p-10 border-b md:border-b-0 md:border-r border-zinc-200 hover:bg-[#FAFAFA] transition-colors group cursor-pointer">
          <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-600 mb-6 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
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
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3 className="text-md font-space font-semibold text-zinc-900 mb-3">
            Total Backgrounds
          </h3>
          <p className="text-zinc-500 leading-relaxed text-sm">
            Custom memory sweeps and silent execution ensures your drafts
            surface faster than humanly possible, without sacrificing accuracy.
          </p>
        </div>

        <div className="flex flex-col p-10 hover:bg-[#FAFAFA] transition-colors group cursor-pointer">
          <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-600 mb-6 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h3 className="text-md font-space font-semibold text-zinc-900 mb-3">
            Draft & Review Mode
          </h3>
          <p className="text-zinc-500 leading-relaxed text-sm">
            Not ready for full automation? Set the Shram to "Draft" mode to
            prepare responses for your human team to review and send.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
