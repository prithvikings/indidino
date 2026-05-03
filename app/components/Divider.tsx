import React from "react";

const Divider = ({ height }: { height?: number }) => {
  // Fixes the Tailwind dynamic class compilation bug
  const containerHeight = height ? `${height * 0.25}rem` : "6rem";

  return (
    <div
      className="w-full border-y border-dashed border-zinc-300"
      style={{ height: containerHeight }}
    >
      <div
        className="max-w-6xl mx-auto h-full border-x border-dashed border-zinc-300 max-lg:mx-6 max-md:mx-0 max-md:border-x-0"
        style={{
          backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Divider;
