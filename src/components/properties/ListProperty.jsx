import React from "react";

import Property from "./Property";

const ListProperty = ({ propertiesList }) => {
  return (
    <div className="flex flex-col gap-10 my-5">
      {propertiesList?.map((item) => {
        return <Property key={item._id} item={item} />;
      })}
    </div>
  );
};

export default ListProperty;
