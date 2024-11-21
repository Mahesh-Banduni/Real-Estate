import React from "react";

const Heading = React.memo(({ text, className }) => {
  return (
    <>
      <h1
        className={`text-5xl text-heading-color capitalize font-interSemiBold ${className} max-sm:text-3xl`}
      >
        {text}
      </h1>
    </>
  );
});

export default Heading;
