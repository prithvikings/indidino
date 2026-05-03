"use client";

import React, { useState } from "react";

// --- Icons ---
const CameraIcon = () => (
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
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </svg>
);

const MailIcon = () => (
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
);

const SlackIcon = () => (
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
    <path d="M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0z"></path>
    <path d="M12 8v8"></path>
    <path d="M8 12h8"></path>
  </svg>
);

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-zinc-900 pb-20">
      {/* Top Navigation Bar (Consistent with Dashboard) */}
      <header className="h-16 flex-shrink-0 border-b border-zinc-200 bg-white flex items-center px-8 sticky top-0 z-20">
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
      </header>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto mt-10 px-6 flex flex-col md:flex-row gap-10">
        {/* Settings Sidebar */}
        <aside className="w-full md:w-[220px] flex-shrink-0">
          <div className="text-[10px] font-dmmono text-zinc-400 uppercase tracking-widest font-bold mb-4 px-3">
            Settings
          </div>
          <nav className="space-y-1">
            {[
              "Profile",
              "Autopilot Preferences",
              "Integrations",
              "Billing",
              "Team",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                  activeTab === item
                    ? "bg-white border border-zinc-200 text-zinc-900 font-medium shadow-sm"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 border border-transparent"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Settings Content Area */}
        <main className="flex-1 space-y-8">
          <div className="border-b border-zinc-200 pb-6">
            <h1 className="text-3xl font-space font-medium tracking-tight text-zinc-900">
              Profile & Account
            </h1>
            <p className="text-sm text-zinc-500 mt-2">
              Manage your personal information and security preferences.
            </p>
          </div>

          {/* Section: Personal Info */}
          <section className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-100 bg-[#FAFAFA]">
              <h2 className="text-xs font-dmmono uppercase tracking-widest font-bold text-zinc-500">
                Personal Information
              </h2>
            </div>

            <div className="p-6">
              {/* Avatar Upload */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative group cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-space font-medium">
                    AD
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <CameraIcon />
                  </div>
                </div>
                <div>
                  <button className="px-4 py-2 border border-zinc-300 text-sm font-medium text-zinc-700 rounded-sm hover:bg-zinc-50 transition-colors bg-white shadow-sm">
                    Upload new photo
                  </button>
                  <p className="text-[11px] text-zinc-400 mt-2 font-dmmono">
                    JPG, GIF or PNG. Max size of 2MB.
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Alex"
                    className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-sm text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Developer"
                    className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-sm text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 transition-all"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-medium text-zinc-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="alex@agency.com"
                    className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-sm text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 transition-all"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-medium text-zinc-700">
                    Job Title
                  </label>
                  <input
                    type="text"
                    defaultValue="Senior Account Manager"
                    className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-sm text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 transition-all"
                  />
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-zinc-100 bg-[#FAFAFA] flex justify-end">
              <button className="px-5 py-2 bg-zinc-900 text-white text-sm font-medium rounded-sm hover:bg-zinc-800 transition-colors shadow-sm">
                Save Changes
              </button>
            </div>
          </section>

          {/* Section: Autopilot Settings (Shram specific) */}
          <section className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-100 bg-[#FAFAFA] flex justify-between items-center">
              <h2 className="text-xs font-dmmono uppercase tracking-widest font-bold text-zinc-500">
                Agent Behavior
              </h2>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 font-space">
                    Drafting Tone
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    Set the default personality for your auto-drafted responses.
                    The AI will match your past history, but use this as a
                    baseline.
                  </p>
                </div>
                <select className="px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-sm text-sm text-zinc-900 focus:outline-none min-w-[150px]">
                  <option>Professional</option>
                  <option>Casual</option>
                  <option>Direct & Concise</option>
                  <option>Friendly & Enthusiastic</option>
                </select>
              </div>

              <div className="h-px bg-zinc-100 w-full"></div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 font-space">
                    Silent Execution
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    Allow Shram to send high-confidence replies automatically
                    without requiring manual approval in the dashboard.
                  </p>
                </div>
                {/* Custom Toggle */}
                <button className="w-10 h-6 rounded-full bg-zinc-200 relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2">
                  <div className="w-4 h-4 rounded-full bg-white absolute top-1 left-1 shadow-sm transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </section>

          {/* Section: Connected Accounts */}
          <section className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-100 bg-[#FAFAFA]">
              <h2 className="text-xs font-dmmono uppercase tracking-widest font-bold text-zinc-500">
                Connected Sources
              </h2>
            </div>

            <div className="p-0">
              <div className="flex items-center justify-between p-6 border-b border-zinc-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg border border-zinc-200 flex items-center justify-center bg-zinc-50 text-zinc-700">
                    <MailIcon />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900">
                      Google Workspace
                    </h3>
                    <p className="text-xs text-zinc-500">
                      alex@agency.com connected
                    </p>
                  </div>
                </div>
                <button className="text-xs font-medium text-zinc-500 border border-zinc-200 px-3 py-1.5 rounded-sm hover:bg-zinc-50 transition-colors">
                  Disconnect
                </button>
              </div>

              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg border border-zinc-200 flex items-center justify-center bg-zinc-50 text-zinc-700">
                    <SlackIcon />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900">Slack</h3>
                    <p className="text-xs text-zinc-400">Not connected</p>
                  </div>
                </div>
                <button className="text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-sm hover:bg-zinc-800 transition-colors shadow-sm">
                  Connect
                </button>
              </div>
            </div>
          </section>

          {/* Danger Zone */}
          <section className="pt-6">
            <button className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
              Delete account and all memory data
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Profile;
