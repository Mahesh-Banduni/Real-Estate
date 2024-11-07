import React from "react";

import useProperties from "../../hooks/useProperties";
import Property from "./Property";

const ListProperty = () => {
  const { allProperty } = useProperties();
  return (
    <div className="flex flex-col gap-10 my-5">
      {allProperty?.map((item) => {
        return <Property key={item._id} item={item} />;
      })}
    </div>
  );
};

export default ListProperty;
