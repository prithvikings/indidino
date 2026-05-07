"use client";

import React from "react";

// Reusable SVG Cube for the design system aesthetic
const WireframeCube = ({ className }: { className?: string }) => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 140 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M70 5 L135 35 L70 65 L5 35 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M5 35 L70 65 L70 115 L5 85 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M70 65 L135 35 L135 85 L70 115 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M70 18 L115 35 L70 52 L25 35 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
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

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto border-x border-b border-zinc-300 bg-[#FAFAFA] font-sans flex flex-col min-h-screen">
      {/* Top Header Bar */}
      <div className="sticky top-[64px] z-40 bg-[#FAFAFA] flex justify-between items-center px-8 py-4 border-b border-zinc-300 text-xs font-dmmono text-zinc-500 tracking-widest uppercase">
        <div>CONTACT US</div>
        <div>
          [<span className="text-blue-500">1</span>/1]
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center px-6 pt-24 pb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight mb-6 font-space">
          Let's start a conversation.
        </h2>
        <p className="text-base text-zinc-500 leading-relaxed max-w-xl mx-auto">
          Whether you have a query about our platform, need technical support,
          or want to explore enterprise options, we are here to help.
        </p>
      </div>

      {/* Split Content Area */}
      <div className="px-8 pb-24">
        <div className="bg-white rounded-2xl border border-zinc-200 flex flex-col md:flex-row overflow-hidden min-h-[550px] shadow-sm">
          {/* Left Side: Contact Form */}
          <div className="w-full md:w-[60%] p-8 md:p-14 border-b md:border-b-0 md:border-r border-zinc-200">
            <div className="mb-8">
              <h3 className="text-xl font-medium text-zinc-900 mb-2 font-space">
                Send a message
              </h3>
              <p className="text-sm text-zinc-500">
                Fill out the form below and our team will get back to you
                shortly.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-dmmono text-zinc-500 uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-zinc-200 rounded-lg p-3 text-sm focus:outline-none focus:border-zinc-400 bg-[#FAFAFA] focus:bg-white transition-colors text-zinc-900 placeholder:text-zinc-400"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-dmmono text-zinc-500 uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-zinc-200 rounded-lg p-3 text-sm focus:outline-none focus:border-zinc-400 bg-[#FAFAFA] focus:bg-white transition-colors text-zinc-900 placeholder:text-zinc-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-dmmono text-zinc-500 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-zinc-200 rounded-lg p-3 text-sm focus:outline-none focus:border-zinc-400 bg-[#FAFAFA] focus:bg-white transition-colors text-zinc-900 placeholder:text-zinc-400"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-dmmono text-zinc-500 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-zinc-200 rounded-lg p-3 text-sm focus:outline-none focus:border-zinc-400 bg-[#FAFAFA] focus:bg-white transition-colors text-zinc-900 resize-none placeholder:text-zinc-400"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="button"
                className="bg-zinc-900 text-white text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-zinc-800 transition-colors w-full flex justify-center items-center gap-2"
              >
                Send Message
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>

          {/* Right Side: Contact Information */}
          <div className="w-full md:w-[40%] bg-[#FAFAFA] p-8 md:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Optional subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="text-xl font-medium text-zinc-900 mb-8 font-space">
                Company Details
              </h3>

              <div className="space-y-10">
                {/* Email Section */}
                <div>
                  <div className="text-[11px] font-dmmono text-zinc-400 uppercase tracking-wider mb-3">
                    Direct Email
                  </div>
                  <a
                    href="mailto:info@shram.ai"
                    className="group flex items-center gap-3 text-zinc-900 hover:text-blue-500 transition-colors w-fit"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 group-hover:border-blue-200 group-hover:text-blue-500 transition-all shadow-sm">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <span className="text-base font-medium">info@shram.ai</span>
                  </a>
                  <p className="text-sm text-zinc-500 mt-3">
                    For any queries, please email us directly.
                  </p>
                </div>

                <div className="border-t border-dashed border-zinc-200"></div>

                {/* Address Section */}
                <div>
                  <div className="text-[11px] font-dmmono text-zinc-400 uppercase tracking-wider mb-3">
                    Office Address
                  </div>
                  <div className="flex gap-3 text-zinc-900">
                    <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 flex-shrink-0 shadow-sm">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <p className="text-base font-medium leading-relaxed pt-2">
                      16192, Coastal HWY,
                      <br />
                      Lewes, DE 19958,
                      <br />
                      USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aesthetic Wireframe Graphic */}
            <div className="relative mt-16 flex justify-end text-zinc-200 opacity-60">
              <WireframeCube className="w-32 h-32 transform translate-x-4 translate-y-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
