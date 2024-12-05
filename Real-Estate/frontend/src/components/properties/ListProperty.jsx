import React from "react";

import Property from "./Property";

const ListProperty = ({ propertiesList, wishlistProperties }) => {
  return (
    <div className="flex flex-col gap-10 my-5">
      {propertiesList?.map((item) => {
        return (
          <Property
            key={item._id}
            item={item}
            wishlistProperties={wishlistProperties}
          />
        );
      })}
    </div>
  );
};

export default ListProperty;
