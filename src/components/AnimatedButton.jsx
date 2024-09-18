import React from "react";

const AnimatedButton = React.memo(({ className, text }) => {
  return (
    <div
      className={`${className} px-[0.6rem] max-[350px]:px-[0.4rem] py-[2px] uppercase relative w-fit overflow-hidden text-xs text-white flex items-center justify-center`}
    >
      <div className="bg-[rgba(225,225,225,0.8)] -top-[15px] right-[18px] translate-y-1/2 w-20 -rotate-45 h-3 absolute animate-slider "></div>
      {text}
    </div>
  );
});

export default AnimatedButton;
