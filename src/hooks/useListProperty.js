import React, { useState } from "react";

const useListProperty = () => {
  const initialState = {
    propertyType: "Residential Flat/Apartment",
  };
  const [propertyTypeState, setPropertyTypeState] = useState(initialState);

  const onPropertyTypeChange = (e) => {
    setPropertyTypeState(() => {
      return {
        ...initialState,
        propertyType: e.target.value,
      };
    });
  };

  return {
    propertyTypeState,
    onPropertyTypeChange,
  };
};

export default useListProperty;
