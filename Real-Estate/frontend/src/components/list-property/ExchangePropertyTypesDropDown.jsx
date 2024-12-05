import React from "react";

import ListPropertySelectInput from "../ListPropertySelectInput";

const ExchangePropertyTypesDropDown = () => {
  return (
    <React.Fragment>
      <ListPropertySelectInput
        label="Property Type"
        options={["Flat/Apartment", "Land", "House"]}
      />
    </React.Fragment>
  );
};

export default ExchangePropertyTypesDropDown;
