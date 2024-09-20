import React from "react";

import Property from "./Property";

const ListProperty = () => {
  return (
    <div className="flex flex-col gap-10 my-5">
      <Property />
      <Property />
      <Property />
      <Property />
      <Property />
    </div>
  );
};

export default ListProperty;
