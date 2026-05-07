import React from "react";

const Divider = ({ height }: { height?: number }) => {
  // Fixes the Tailwind dynamic class compilation bug
  const containerHeight = height ? `${height * 0.25}rem` : "6rem";

  return (
    <div
      className="w-full border-y border-dashed border-zinc-300 dark:border-zinc-800 transition-colors duration-300"
      style={{ height: containerHeight }}
    >
      <div className="max-w-6xl mx-auto h-full border-x border-dashed border-zinc-300 dark:border-zinc-800 transition-colors duration-300 max-lg:mx-6 max-md:mx-0 max-md:border-x-0 bg-[size:16px_16px] bg-[position:center] bg-[image:radial-gradient(#d4d4d8_1px,transparent_1px)] dark:bg-[image:radial-gradient(#3f3f46_1px,transparent_1px)]"></div>
    </div>
  );
};

export default Divider;
