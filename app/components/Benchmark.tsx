"use client";

import React from "react";
import { motion, Variants } from "motion/react";

const Benchmark = () => {
  const CheckIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-zinc-800 dark:text-zinc-200 shrink-0 transition-colors duration-300"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const CrossIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-zinc-300 dark:text-zinc-700 shrink-0 transition-colors duration-300"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const PartialText = () => (
    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap transition-colors duration-300">
      Partial
    </span>
  );

  const tableData = [
    {
      feature: "Task Tracker",
      sm: <CheckIcon />,
      mem0: <PartialText />,
      zep: <CrossIcon />,
    },
    {
      feature: "User Memories",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <CheckIcon />,
    },
    {
      feature: "Message retrieving",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <CheckIcon />,
    },
    {
      feature: "Integrates",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <PartialText />,
    },
    {
      feature: "Reads WhatsApp text",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <CrossIcon />,
    },
    {
      feature: "Instant Responses",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <CheckIcon />,
    },
    {
      feature: "Customizable",
      sm: <CheckIcon />,
      mem0: <CheckIcon />,
      zep: <CheckIcon />,
    },
    {
      feature: "Context matching",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <CrossIcon />,
    },
    {
      feature: "Always running AI",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <CrossIcon />,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <>
      <div className="max-w-6xl mx-auto border border-y-0 bg-neutral-100 dark:bg-zinc-900/50 border-zinc-300 dark:border-zinc-800 flex flex-col items-center justify-center p-4 py-6 text-center max-md:border-x-0 max-md:py-4 transition-colors duration-300">
        <p className="text-md font-medium text-zinc-900 dark:text-zinc-100 max-md:text-sm transition-colors duration-300">
          100k+ chats monitored secretly · Zero missed leads
        </p>
      </div>

      <div className="max-w-6xl mx-auto border-x border-zinc-300 dark:border-zinc-800 bg-[#FAFAFA] dark:bg-zinc-950 font-sans relative max-md:border-x-0 transition-colors duration-300">
        {/* Header Bar */}
        <div className="sticky top-[64px] bg-[#FAFAFA] dark:bg-zinc-900/50 backdrop-blur-md z-40 flex justify-between items-center px-6 py-4 border-y border-zinc-300 dark:border-zinc-800 text-xs font-dmmono text-zinc-500 dark:text-zinc-400 tracking-wider max-md:px-4 max-md:py-3 transition-colors duration-300">
          <div>Value add</div>
          <div>
            [<span className="text-blue-500 dark:text-blue-400">2</span>/3]
          </div>
        </div>

        {/* 1. Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center px-6 pt-14 pb-20 max-w-4xl mx-auto flex flex-col items-center gap-2 max-md:pt-10 max-md:pb-12 max-md:px-4"
        >
          <motion.h2
            variants={itemVariants}
            className="max-w-[700px] font-heading text-[44px] font-medium tracking-[-0.04em] leading-[120%] text-zinc-900 dark:text-zinc-50 text-center max-lg:text-[36px] max-md:text-[28px] transition-colors duration-300"
          >
            We do not think reminders tell the full story.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-md text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto max-md:text-sm transition-colors duration-300"
          >
            But we beat every other app anyway. The state-of-the-art on Threads,
            Emails, and WhatsApp. We also built{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 transition-colors duration-300">
              MemoryLayer
            </span>
            , an auto pilot tracker for busy workflows.
          </motion.p>
        </motion.div>

        {/* 2. Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-zinc-200 dark:bg-zinc-800 border-y border-zinc-200 dark:border-zinc-800 font-space transition-colors duration-300"
        >
          {/* Row 1 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-8 text-center bg-[#FAFAFA] dark:bg-zinc-950 max-md:p-6 transition-colors duration-300"
          >
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 tracking-widest uppercase mb-3 transition-colors duration-300">
              FOLLOW UP %
            </p>
            <p className="text-4xl font-space font-medium text-zinc-900 dark:text-zinc-50 mb-2 transition-colors duration-300">
              99.9%
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium transition-colors duration-300">
              Automated follow-up success
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-8 text-center bg-[#FAFAFA] dark:bg-zinc-950 max-md:p-6 transition-colors duration-300"
          >
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 tracking-widest uppercase mb-3 transition-colors duration-300">
              MISSED
            </p>
            <p className="text-4xl font-medium text-zinc-900 dark:text-zinc-50 mb-2 transition-colors duration-300">
              0%
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium transition-colors duration-300">
              Cold or forgotten chains
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-8 text-center bg-[#FAFAFA] dark:bg-zinc-950 max-md:p-6 transition-colors duration-300"
          >
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 tracking-widest uppercase mb-3 transition-colors duration-300">
              DRAFTING
            </p>
            <p className="text-4xl font-medium text-zinc-900 dark:text-zinc-50 mb-2 transition-colors duration-300">
              #1
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium transition-colors duration-300">
              Context-aware writing
            </p>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 text-center bg-[#FAFAFA] dark:bg-zinc-950 max-md:p-6 transition-colors duration-300"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-medium text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
                0
              </span>
              <span className="text-lg font-medium text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
                manual actions
              </span>
            </div>
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
              Others need 5-10
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 text-center bg-[#FAFAFA] dark:bg-zinc-950 max-md:p-6 transition-colors duration-300"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-medium text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
                {"<10sec"}
              </span>
              <span className="text-lg font-medium text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
                draft delay
              </span>
            </div>
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
              Full context
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 text-center bg-[#FAFAFA] dark:bg-zinc-950 max-md:p-6 transition-colors duration-300"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-medium text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
                100k+
              </span>
              <span className="text-lg font-medium text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
                hours saved
              </span>
            </div>
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
              Constantly active
            </p>
          </motion.div>
        </motion.div>

        {/* 3. Comparison Table Section */}
        <div className="px-6 py-8 bg-white dark:bg-zinc-950 flex flex-col items-center max-md:px-4 max-md:py-6 transition-colors duration-300">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full max-w-5xl border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-x-auto overflow-y-hidden font-space bg-white dark:bg-zinc-950 custom-scrollbar transition-colors duration-300"
          >
            <div className="max-md:min-w-[600px]">
              {/* Table Header */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
              >
                <div className="p-5 text-sm font-medium text-zinc-600 dark:text-zinc-400 max-md:p-4 transition-colors duration-300">
                  Feature
                </div>
                <div className="p-5 text-sm font-semibold text-zinc-900 dark:text-zinc-100 text-center bg-zinc-50 dark:bg-zinc-800/80 border-x border-zinc-200 dark:border-zinc-700 max-md:p-4 transition-colors duration-300">
                  Shram Agent
                </div>
                <div className="p-5 text-sm font-medium text-zinc-600 dark:text-zinc-400 text-center max-md:p-4 transition-colors duration-300">
                  Task
                </div>
                <div className="p-5 text-sm font-medium text-zinc-600 dark:text-zinc-400 text-center max-md:p-4 transition-colors duration-300">
                  Bot
                </div>
              </motion.div>

              {/* Table Body */}
              {tableData.map((row, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`grid grid-cols-4 items-center hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-colors duration-300 ${
                    index !== tableData.length - 1
                      ? "border-b border-zinc-100 dark:border-zinc-800/50"
                      : ""
                  }`}
                >
                  <div className="p-5 py-3.5 text-sm text-zinc-700 dark:text-zinc-300 font-dmsans max-md:p-4 transition-colors duration-300">
                    {row.feature}
                  </div>
                  <div className="p-5 py-3.5 flex justify-center bg-zinc-50 dark:bg-zinc-800/50 border-x border-zinc-200 dark:border-zinc-700 h-full items-center max-md:p-4 transition-colors duration-300">
                    {row.sm}
                  </div>
                  <div className="p-5 py-3.5 flex justify-center h-full items-center max-md:p-4">
                    {row.mem0}
                  </div>
                  <div className="p-5 py-3.5 flex justify-center h-full items-center max-md:p-4">
                    {row.zep}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-6xl mx-auto text-center py-6 border border-zinc-300 dark:border-zinc-800 w-full flex items-center justify-center text-sm text-zinc-500 dark:text-zinc-400 max-md:border-x-0 max-md:text-xs max-md:py-4 max-md:px-4 transition-colors duration-300">
        <span>
          Request your early access key{" "}
          <span className="relative group inline-block text-zinc-900 dark:text-zinc-100 font-medium underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 cursor-pointer transition-colors duration-300">
            here
            {/* Tooltip Container */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[11px] font-sans font-medium rounded-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none whitespace-nowrap shadow-sm z-50">
              Get link
              {/* Tooltip little bottom arrow/triangle */}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></span>
            </span>
          </span>
          .
        </span>
      </div>
    </>
  );
};

export default Benchmark;
