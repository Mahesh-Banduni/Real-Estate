import React from "react";

import NormalProperty from "./NormalProperty";

const PropertyType = React.memo(({ property }) => {
  return (
    <React.Fragment>
      <NormalProperty property={property} />
    </React.Fragment>
  );
});

export default PropertyType;
