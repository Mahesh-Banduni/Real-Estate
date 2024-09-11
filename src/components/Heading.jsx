import React from "react";

const Heading = React.memo(({ text }) => {
  return (
    <>
      <h1 className="text-5xl text-heading-color capitalize font-interSemiBold">
        {text}
      </h1>
    </>
  );
});

export default Heading;
