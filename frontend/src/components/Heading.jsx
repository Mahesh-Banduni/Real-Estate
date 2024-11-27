import React from "react";

const Heading = React.memo(({ text, className }) => {
  return (
    <>
      <h1
        className={`text-5xl text-heading-color capitalize font-interSemiBold ${className}`}
      >
        {text}
      </h1>
    </>
  );
});

export default Heading;
