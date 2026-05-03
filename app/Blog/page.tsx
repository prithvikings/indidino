"use client";

import React from "react";
// Assuming Navbar is in the correct relative path
import { Navbar } from "../components/Navbar";

// Mock data extracted from the provided screenshots
const filterCategories = [
  "All",
  "Showcase",
  "Product Ops",
  "Client Win",
  "News",
  "Insights",
];

const textOnlyPosts = [
  {
    category: "NEWS",
    title:
      "Empowering the Next Generation of Agencies: Shramai Partner Program",
    excerpt:
      "If there’s one thing we’ve learned while building Shramai, it’s that busy...",
    date: "31 Dec 2025",
  },
  {
    category: "NEWS",
    title: "Shramai raises $3 million with the best memory engine for task",
    excerpt:
      "Today, I am excited to announce our first funding round to accelerate our product...",
    date: "06 Oct 2025",
  },
  {
    category: "CLIENT WIN",
    title: "Task vs Shramai: Why Scale AI Switched And What’s Better For You?",
    excerpt:
      "“Task was not great. Glad to have found Shramai” That’s how Zaid...",
    date: "02 Oct 2025",
  },
  {
    category: "PRODUCT OPS",
    title: "Architecting a memory engine inspired by the busy agency",
    excerpt:
      "Tracking is at the heart of productivity, but what truly powers meaningful...",
    date: "05 Jun 2025",
  },
];

const featuredPost = {
  category: "PRODUCT OPS",
  title: "Introducing @shramai/syncs v2.0.0",
  excerpt:
    "Today we're releasing v2.0.0. This release unifies the app across all tracking sdk integrations from AI CRM to Notion, makes conversation identity a first-class concept, and ships with...",
  date: "27 Apr 2026 · 5 min read",
  gradient: "from-blue-50 to-white",
};

const imagePosts = [
  {
    category: "PRODUCT OPS",
    title: "Switching Tasker Infrastructure",
    excerpt:
      "Most teams don’t even consider switching tasker infrastructure. And it’s not because of...",
    date: "09 Apr 2026 · 3 min read",
    gradient: "from-blue-100 to-indigo-50",
  },
  {
    category: "PRODUCT OPS",
    title: "Shramai will make your Slack channel crazy powerful",
    excerpt:
      "Today, we are launching Shramai support to your Slack channel TLDR: you can use...",
    date: "07 Apr 2026 · 6 min read",
    gradient: "from-zinc-900 to-zinc-800",
  },
  {
    category: "PRODUCT OPS",
    title: "Solving the Precision-Recall Tradeoff: Thread Result Aggregation",
    excerpt:
      "When you're building memory for AI, thread is your foundational layer. The way thread generally work...",
    date: "07 Apr 2026 · 3 min read",
    gradient: "from-zinc-900 to-black",
  },
  {
    category: "NEWS",
    title: "We broke the frontier in chats memory: To prove a point.",
    excerpt:
      "Read the follow up here! https://x.com/DhravyaShah/status/20362439955...",
    date: "22 Mar 2026 · 5 min read",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    category: "PRODUCT OPS",
    title: "Infinitely running stateful agency setups",
    excerpt:
      "We built a plugin for WhatsApp Web and Telegrams that gives your agency setup persistent memory. I...",
    date: "19 Feb 2026 · 5 min read",
    gradient: "from-blue-500 to-blue-400",
  },
  {
    category: "NEWS",
    title:
      "Why everyone is complaining about Zapier Bot's memory (it sucks) - and...",
    excerpt:
      "TLDR: Today, we are releasing a new version of our slack bot plugin -...",
    date: "19 Feb 2026 · 4 min read",
    gradient: "from-red-600 to-red-800",
  },
  {
    category: "PRODUCT OPS",
    title: "We added Shramai to Slack Inbox. It's INSANELY powerful now...",
    excerpt:
      "Today, we are launching the Shramai plugin for Slack Inbox! TLDR: You can use Shramai...",
    date: "30 Jan 2026 · 4 min read",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    category: "NEWS",
    title: "Zapier / Make bot's memory SUCKS. We gave it Shramai.",
    excerpt:
      "I'm the founder of Shramai. Zapier/Make bot is blowing up right now, with many, many use...",
    date: "28 Jan 2026 · 2 min read",
    gradient: "from-zinc-900 to-zinc-700",
  },
  {
    category: "NEWS",
    title: "AI's next big thing: auto-drafting and (super)tracking.",
    excerpt:
      "You are probably thinking of AI drafts in the wrong way. Over the last few years, we've all seen ...",
    date: "24 Jan 2026 · 6 min read",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    category: "NEWS",
    title:
      "Faster, smarter, reliable infinite sync: Shramai IS context engineering.",
    excerpt:
      "People are obsessed with taskers and taskers engineering. Sure, what you say is important, but...",
    date: "09 Jul 2025 · 4 min read",
    gradient: "from-blue-50 to-white",
  },
  {
    category: "PRODUCT OPS",
    title: "We solved AI App interoperability",
    excerpt:
      "One app to rule them all, One spec to find them, One platform to bring them all and in the TypeScrip...",
    date: "07 Jul 2025 · 7 min read",
    gradient: "from-blue-50 to-white",
  },
  {
    category: "PRODUCT OPS",
    title: "2 Approaches For Extending Context Tracking in CRMs",
    excerpt:
      "Integration-based large tracking layers have become the poster boys of modern AI, yet they...",
    date: "04 Jul 2025 · 9 min read",
    gradient: "from-blue-50 to-indigo-50",
  },
];

const Blog = () => {
  return (
    <div className="bg-[#FAFAFA] w-full min-h-screen font-sans">
      <Navbar />
      <div className="max-w-6xl mx-auto border-x border-zinc-200 bg-white min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="pt-24 pb-16 px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg
              width="32"
              height="32"
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
            <h1 className="text-5xl font-bold font-space tracking-tight text-zinc-900">
              Shramai
            </h1>
          </div>
          <p className="text-lg text-zinc-500 font-dmmono tracking-tight max-w-2xl mx-auto">
            How we build Shramai - best tracking tool on the planet.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 px-6 mb-10">
          {filterCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-4 py-1.5 text-sm border font-space ${
                idx === 0
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-zinc-500 border-zinc-200 hover:bg-zinc-50"
              } ${idx !== 0 ? "-ml-[1px]" : ""}`} // Overlap borders slightly
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4-Column Text-Only Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 mb-8">
          {textOnlyPosts.map((post, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 p-6 bg-white hover:shadow-md transition-shadow cursor-pointer flex flex-col"
            >
              <span className="text-[10px] font-dmmono font-bold text-blue-600 uppercase tracking-wider mb-4">
                {post.category}
              </span>
              <h3 className="text-sm font-semibold text-zinc-900 mb-3 leading-snug font-space">
                {post.title}
              </h3>
              <p className="text-xs text-zinc-500 mb-6 leading-relaxed flex-grow">
                {post.excerpt}
              </p>
              <p className="text-[10px] text-zinc-400 font-dmmono">
                {post.date}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Post (Full Width Split) */}
        <div className="px-6 mb-8">
          <div className="border border-zinc-200 bg-white hover:shadow-md transition-shadow cursor-pointer flex flex-col md:flex-row overflow-hidden min-h-[300px]">
            {/* Left side text */}
            <div className="w-full md:w-[45%] p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-200 flex flex-col justify-center">
              <span className="text-[10px] font-dmmono font-bold text-blue-600 uppercase tracking-wider mb-4">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4 font-space tracking-tight">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <p className="text-xs text-zinc-400 font-dmmono">
                {featuredPost.date}
              </p>
            </div>
            {/* Right side Image Abstract Placeholder */}
            <div
              className={`w-full md:w-[55%] bg-gradient-to-br ${featuredPost.gradient} p-8 flex items-center justify-center relative`}
            >
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              ></div>
              <div className="text-zinc-900/10 font-bold text-9xl absolute -right-10 -bottom-10 rotate-12 select-none">
                v2
              </div>
            </div>
          </div>
        </div>

        {/* Image Posts Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-24">
          {imagePosts.map((post, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 bg-white hover:shadow-md transition-shadow cursor-pointer flex flex-col overflow-hidden"
            >
              {/* Image Placeholder */}
              <div
                className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden flex items-center justify-center`}
              >
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>
                <span className="text-white/20 font-space font-bold text-3xl px-6 text-center select-none leading-none">
                  {post.title.split(" ")[0]}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow border-t border-zinc-200">
                {post.category && (
                  <span className="text-[10px] font-dmmono font-bold text-blue-600 uppercase tracking-wider mb-3">
                    {post.category}
                  </span>
                )}
                <h3 className="text-base font-semibold text-zinc-900 mb-3 leading-snug font-space">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-500 mb-6 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <p className="text-[10px] text-zinc-400 font-dmmono">
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-200 bg-[#FAFAFA] mt-auto pt-16 pb-8 px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] font-dmmono text-zinc-400 uppercase tracking-wider">
                Product
              </h4>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
                App
              </a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
                Add-ons
              </a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
                Pricing
              </a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
                Changelog
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] font-dmmono text-zinc-400 uppercase tracking-wider">
                Resources
              </h4>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
                Documentation
              </a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
                Blog
              </a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
                Case study
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] font-dmmono text-zinc-400 uppercase tracking-wider">
                Company
              </h4>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
                About
              </a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
                Careers
              </a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
                Privacy
              </a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
                Terms
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] font-dmmono text-zinc-400 uppercase tracking-wider">
                Connect
              </h4>
              <div className="flex gap-4 text-zinc-500">
                {/* Social Icons Placeholder */}
                <a href="#" className="hover:text-zinc-900">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4l16 16M4 20L20 4" />
                  </svg>
                </a>
                <a href="#" className="hover:text-zinc-900">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a href="#" className="hover:text-zinc-900">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-zinc-200 pt-8">
            <div className="flex items-center gap-2 font-bold text-zinc-900">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
              <span>Shramai</span>
            </div>
            <p className="text-[11px] text-zinc-400">
              © 2026 Shramai Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Blog;
