import React from "react";

import NormalProperty from "./NormalProperty";
import ExchangePropertyForm from "./ExchangePropertyForm";
import PartnershipPropertyForm from "./PartnershipPropertyForm";

const PropertyType = React.memo(({ property }) => {
  return (
    <React.Fragment>
      <NormalProperty property={property} />
    </React.Fragment>
  );
});

export default PropertyType;
