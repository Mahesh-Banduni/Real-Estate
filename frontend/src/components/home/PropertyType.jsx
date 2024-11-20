import React from "react";

import NormalProperty from "./NormalProperty";
import ExchangePropertyForm from "./ExchangePropertyForm";
import PartnershipPropertyForm from "./PartnershipPropertyForm";

const PropertyType = React.memo(({ property }) => {
  return (
    <React.Fragment>
      {property === "buy" && <NormalProperty />}
      {property === "exchange property" && <ExchangePropertyForm />}
      {property === "partnership property" && <PartnershipPropertyForm />}
    </React.Fragment>
  );
});

export default PropertyType;
