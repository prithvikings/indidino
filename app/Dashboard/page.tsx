"use client";

import React, { useState } from "react";

// --- Icons ---
const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-zinc-400"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const BellIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-zinc-500"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const MailIcon = () => (
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
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const SlackIcon = () => (
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
    <path d="M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0z"></path>
    <path d="M12 8v8"></path>
    <path d="M8 12h8"></path>
  </svg>
);

const SparkleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-amber-500"
  >
    <path d="M12 3l2 5h5l-4 4 1 5-4-3-4 3 1-5-4-4h5l2-5z"></path>
  </svg>
);

// --- Dummy Data ---
const activities = [
  {
    id: 1,
    sender: "Sarah Jenkins",
    source: "Email",
    snippet: "Hey, did we ever send that revised proposal to Acme Corp?",
    time: "10m ago",
    status: "Processed",
    icon: <MailIcon />,
  },
  {
    id: 2,
    sender: "David Lee (Slack)",
    source: "Slack",
    snippet: "Can you check the Q3 compliance docs when you have a sec?",
    time: "45m ago",
    status: "Processed",
    icon: <SlackIcon />,
  },
  {
    id: 3,
    sender: "Elena Rostova",
    source: "Email",
    snippet: "Thanks for the intro! Let's schedule a call next week.",
    time: "Just now",
    status: "Unprocessed",
    icon: <MailIcon />,
  },
];

const tasks = [
  {
    id: 1,
    title: "Draft revised proposal for Acme Corp",
    type: "Follow-up",
    status: "Pending",
  },
  {
    id: 2,
    title: "Review Q3 compliance docs",
    type: "Review",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Send onboarding packet to Elena",
    type: "Reply",
    status: "Completed",
  },
];

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="h-screen w-full flex bg-white font-sans text-zinc-900 overflow-hidden">
      {/* 1. SIDEBAR */}
      <aside className="w-[240px] flex-shrink-0 border-r border-zinc-200 bg-[#FAFAFA] flex flex-col justify-between z-20">
        <div>
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-zinc-200">
            <div className="flex items-center gap-2 font-bold text-lg font-space text-zinc-900 tracking-tight">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
              Shram.ai
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1">
            {["Dashboard", "Activity", "Tasks", "Settings"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                  activeNav === item
                    ? "bg-zinc-200/60 text-zinc-900 font-medium"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-zinc-200">
          <div className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-100 rounded-md cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600"></div>
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-medium text-zinc-900 truncate">
                Alex Developer
              </div>
              <div className="text-[10px] font-dmmono text-zinc-500 truncate">
                Free Plan
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* RIGHT WORKSPACE */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* TOP BAR */}
        <header className="h-16 flex-shrink-0 border-b border-zinc-200 bg-white flex items-center justify-between px-6 z-10">
          {/* Search */}
          <div className="flex items-center gap-2 w-64 px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-md">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search history..."
              className="bg-transparent border-none outline-none text-sm text-zinc-900 w-full placeholder:text-zinc-400"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-zinc-500 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-100">
              <BellIcon />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
          </div>
        </header>

        {/* 3-COLUMN LAYOUT */}
        <main className="flex-1 flex overflow-hidden bg-[#FAFAFA]">
          {/* 2. ACTIVITY FEED (Input Layer) */}
          <section className="w-[30%] flex-shrink-0 border-r border-zinc-200 flex flex-col bg-white">
            <div className="px-6 py-5 border-b border-zinc-200 bg-[#FAFAFA]">
              <div className="text-[10px] font-dmmono text-zinc-500 uppercase tracking-widest font-bold">
                Input Stream
              </div>
              <h2 className="text-lg font-space font-medium text-zinc-900 mt-1">
                Activity Feed
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {activities.map((act) => (
                <div
                  key={act.id}
                  className="p-4 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors cursor-pointer bg-white shadow-sm relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div className="text-zinc-400">{act.icon}</div>
                      <span className="text-sm font-semibold text-zinc-900">
                        {act.sender}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400">
                      {act.time}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-3 line-clamp-2">
                    {act.snippet}
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 text-[9px] font-dmmono uppercase tracking-wider rounded border ${
                        act.status === "Processed"
                          ? "bg-zinc-50 border-zinc-200 text-zinc-500"
                          : "bg-blue-50 border-blue-200 text-blue-600"
                      }`}
                    >
                      {act.status}
                    </span>
                  </div>
                </div>
              ))}

              {/* Processing Loader Indicator */}
              <div className="p-4 border border-dashed border-zinc-200 rounded-xl flex items-center justify-center gap-2 text-zinc-400 text-xs font-dmmono">
                <svg
                  className="animate-spin h-3 w-3 text-zinc-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Scanning inbox...
              </div>
            </div>
          </section>

          {/* 3. AI SUGGESTIONS PANEL (Intelligence Layer) */}
          <section className="flex-1 flex flex-col relative bg-[#FAFAFA]">
            {/* Subtle Intelligence Background Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            ></div>

            <div className="px-8 py-5 border-b border-zinc-200 bg-white relative z-10">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] font-dmmono text-blue-600 uppercase tracking-widest font-bold flex items-center gap-1.5">
                    <SparkleIcon /> Autopilot Active
                  </div>
                  <h2 className="text-lg font-space font-medium text-zinc-900 mt-1">
                    Suggested Actions
                  </h2>
                </div>
                <div className="text-[10px] font-dmmono text-zinc-400 border border-zinc-200 px-2 py-1 rounded bg-zinc-50">
                  2 Pending Approvals
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6 relative z-10">
              {/* Suggestion Card 1 */}
              <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                {/* Card Header */}
                <div className="px-5 py-3 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-xs font-dmmono font-bold text-zinc-800 uppercase tracking-wider">
                      Draft Follow-up
                    </span>
                  </div>
                  <span className="text-[10px] font-dmmono text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    98% Confidence
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="mb-4">
                    <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-1">
                      Reason for action
                    </div>
                    <p className="text-xs text-zinc-600">
                      Sarah Jenkins asked about the Acme Corp proposal 10
                      minutes ago. It has been 3 days since the last draft was
                      edited.
                    </p>
                  </div>

                  <div className="border border-zinc-200 rounded-lg p-4 bg-zinc-50 relative">
                    <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-2 absolute -top-2 left-3 bg-zinc-50 px-1">
                      Drafted Reply
                    </div>
                    <p className="text-sm text-zinc-800 font-sans leading-relaxed">
                      Hi Sarah,
                      <br />
                      <br />
                      Good catch. I reviewed the revised proposal for Acme Corp
                      this morning. It looks solid, but I want to double-check
                      the pricing tiers before we send it out.
                      <br />
                      <br />
                      I'll finalize and send it over to them by 2 PM today.
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-5 py-4 border-t border-zinc-100 bg-white flex gap-3">
                  <button className="flex-1 py-2 px-4 border border-zinc-300 text-zinc-700 text-xs font-medium rounded-sm hover:bg-zinc-50 transition-colors">
                    Edit Draft
                  </button>
                  <button className="flex-[2] py-2 px-4 bg-zinc-900 text-white text-xs font-medium rounded-sm hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <CheckIcon /> Approve & Send
                  </button>
                </div>
              </div>

              {/* Suggestion Card 2 (Meeting) */}
              <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden flex flex-col opacity-60 hover:opacity-100 transition-opacity">
                <div className="px-5 py-3 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-xs font-dmmono font-bold text-zinc-800 uppercase tracking-wider">
                      Schedule Meeting
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-zinc-600 mb-3">
                    Elena Rostova requested a call for next week based on her
                    recent email.
                  </p>
                  <div className="flex items-center gap-3 p-3 border border-zinc-200 rounded-lg bg-zinc-50">
                    <div className="w-8 h-8 bg-white border border-zinc-200 rounded flex flex-col items-center justify-center text-[10px] font-bold text-zinc-900">
                      <span className="text-[8px] text-red-500">OCT</span>
                      12
                    </div>
                    <div className="text-sm text-zinc-800 font-medium">
                      Introductory Sync w/ Elena
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. TASK PANEL (Output/Memory Layer) */}
          <section className="w-[26%] flex-shrink-0 border-l border-zinc-200 flex flex-col bg-white">
            <div className="px-6 py-5 border-b border-zinc-200 bg-[#FAFAFA]">
              <div className="text-[10px] font-dmmono text-zinc-500 uppercase tracking-widest font-bold">
                Execution Memory
              </div>
              <h2 className="text-lg font-space font-medium text-zinc-900 mt-1">
                Task Tracker
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Pending Section */}
              <div>
                <h3 className="text-xs font-dmmono font-bold text-zinc-400 uppercase tracking-widest mb-3 px-2">
                  Pending Execution
                </h3>
                <div className="space-y-2">
                  {tasks
                    .filter((t) => t.status !== "Completed")
                    .map((task) => (
                      <div
                        key={task.id}
                        className="p-3 border border-zinc-200 rounded-xl bg-white hover:border-zinc-300 cursor-pointer shadow-sm"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span
                            className={`px-2 py-0.5 text-[9px] font-dmmono uppercase tracking-wider rounded border ${
                              task.status === "In Progress"
                                ? "bg-orange-50 border-orange-200 text-orange-600"
                                : "bg-zinc-100 border-zinc-200 text-zinc-600"
                            }`}
                          >
                            {task.status}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-zinc-900 leading-snug">
                          {task.title}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Completed Section */}
              <div>
                <h3 className="text-xs font-dmmono font-bold text-zinc-400 uppercase tracking-widest mb-3 px-2 flex items-center gap-2">
                  <CheckIcon /> Completed
                </h3>
                <div className="space-y-2">
                  {tasks
                    .filter((t) => t.status === "Completed")
                    .map((task) => (
                      <div
                        key={task.id}
                        className="p-3 border border-zinc-100 rounded-xl bg-zinc-50 opacity-60"
                      >
                        <p className="text-sm font-medium text-zinc-500 line-through decoration-zinc-300 leading-snug">
                          {task.title}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
