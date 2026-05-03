"use client";

import React, { useState } from "react";
import Image from "next/image";

// Reusable Google Icon
const GoogleIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans flex items-center justify-center p-6 relative">
      {/* Background Grid Pattern - Matching the Features & WhatWeDo aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="w-full max-w-[420px] bg-white border border-zinc-200 shadow-sm flex flex-col relative z-10">
        {/* Top Header Bar */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-200 text-[10px] font-dmmono text-zinc-400 tracking-widest uppercase bg-[#FAFAFA]">
          <div>AUTHENTICATION</div>
          <div>SECURE</div>
        </div>

        <div className="p-8 md:p-10">
          {/* Logo & Headline */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-center mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-zinc-900"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
            </div>
            <h1 className="text-2xl font-space font-semibold text-zinc-900 tracking-tight mb-2">
              Welcome back.
            </h1>
            <p className="text-sm text-zinc-500">
              Your memory layer is active. Let's finish those drafts.
            </p>
          </div>

          {/* Social Auth */}
          <button className="w-full py-2.5 px-4 border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-colors font-medium rounded-sm flex items-center justify-center gap-3 text-sm mb-6 shadow-sm">
            <GoogleIcon />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px bg-zinc-200 flex-1"></div>
            <span className="text-[10px] font-dmmono text-zinc-400 uppercase tracking-widest">
              Or email
            </span>
            <div className="h-px bg-zinc-200 flex-1"></div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-700">
                Work Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-sm text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 transition-all"
                required
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-zinc-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-sm text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-2.5 px-4 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors font-medium rounded-sm flex items-center justify-center gap-2 text-sm shadow-sm"
            >
              Access workspace
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
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* Footer Area */}
        <div className="bg-[#FAFAFA] border-t border-zinc-200 p-6 text-center">
          <p className="text-xs text-zinc-500">
            No account yet?{" "}
            <a
              href="#"
              className="font-medium text-zinc-900 hover:underline underline-offset-2"
            >
              Get early keys
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
