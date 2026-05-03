"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ArrowRight01Icon } from "hugeicons-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function in case component unmounts while menu is open
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="sticky top-0 z-50 max-w-6xl bg-zinc-50 mx-auto p-4 flex justify-between items-center border border-zinc-300 border-t-0 max-lg:px-6 max-md:px-4 max-md:border-x-0">
        <Link href={"/"} className="logo flex items-center gap-2 relative z-50">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <h2 className="text-xl font-heading font-medium">Shram.ai</h2>
        </Link>

        <div className="btn flex items-center gap-8 text-xs font-dmmono max-lg:gap-6">
          {/* Navigation Links Group - Strictly Hidden on Mobile */}
          <div className="flex items-center gap-4 max-md:hidden">
            <Link
              href={"/Blog"}
              className="cursor-pointer hover:text-zinc-900 transition-colors hover:bg-zinc-100 px-2 py-1"
            >
              Blog
            </Link>
            <div className="w-[1px] h-2 bg-zinc-300"></div>
            <Link
              href={"/About"}
              className="cursor-pointer hover:text-zinc-900 transition-colors hover:bg-zinc-100 px-2 py-1"
            >
              About
            </Link>
            <div className="w-[0.5px] h-2 bg-zinc-300"></div>
            <div className="cursor-pointer hover:text-zinc-900 transition-colors hover:bg-zinc-100 px-2 py-1">
              <Link href={"/Features"}>Features</Link>
            </div>
            <div className="w-[0.5px] h-2 bg-zinc-300"></div>
            <div className="cursor-pointer hover:text-zinc-900 transition-colors hover:bg-zinc-100 px-2 py-1">
              <Link href={"/Pricing"}>Pricing</Link>
            </div>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex items-center gap-3 relative z-50">
            {/* Primary CTA stays visible on mobile */}
            <button className="group relative flex items-stretch rounded-sm overflow-hidden text-white cursor-pointer shadow-sm transition-all duration-150 ease-in-out active:scale-[0.97] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50">
              <div className="bg-zinc-900 px-3 py-2 transition-colors group-hover:bg-zinc-800 flex items-center justify-center font-medium font-dmsans max-md:px-4">
                Get Access
              </div>
              <div className="bg-zinc-900 px-3 py-2 border-l border-zinc-700 transition-colors group-hover:bg-zinc-800 flex items-center justify-center max-md:hidden">
                <ArrowRight01Icon
                  size={16}
                  className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                />
              </div>
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),_transparent_50%)] mix-blend-overlay transition-opacity duration-200 group-hover:opacity-80"></div>
              <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-sm"></div>
            </button>

            {/* Hamburger Menu Toggle (Mobile Only) */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="hidden max-md:flex items-center justify-center p-2 -mr-2 rounded-sm text-zinc-700 hover:bg-zinc-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
              aria-label="Open Menu"
            >
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
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY & DRAWER --- */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-zinc-900/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 z-[101] h-full w-[280px] bg-zinc-50 border-l border-zinc-300 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 flex items-center justify-between border-b border-zinc-200 h-[65px]">
          <span className="font-heading font-medium text-zinc-900">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2 rounded-sm text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
            aria-label="Close Menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col p-4 gap-2 font-dmmono text-sm overflow-y-auto">
          <Link
            href={"/Blog"}
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            Blog
          </Link>
          <Link
            href={"/About"}
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            About
          </Link>
          <Link
            href={"/Features"}
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            Features
          </Link>
          <Link
            href={"/Pricing"}
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* Drawer Footer */}
        <div className="mt-auto p-4 border-t border-zinc-200">
          <p className="text-xs text-zinc-400 font-dmsans text-center">
            © {new Date().getFullYear()} Shram.ai
          </p>
        </div>
      </div>
    </>
  );
};
