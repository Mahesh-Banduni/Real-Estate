import { useState } from "react";

const useListProperty = () => {
  const initialState = {
    propertyDetail: "sell",
    propertyType: "Residential Flat/Apartment",
  };
  const [propertyTypeState, setPropertyTypeState] = useState(initialState);

  const onPropertyTypeChange = (e) => {
    setPropertyTypeState((preValue) => {
      return {
        ...preValue,
        propertyType: e.target.value,
      };
    });
  };

  const handelChangePropertyDetail = (e) => {
    setPropertyTypeState(() => {
      return {
        ...initialState,
        propertyDetail: e.target.value,
      };
    });
  };

  return {
    propertyTypeState,
    onPropertyTypeChange,
    handelChangePropertyDetail,
  };
};

export default useListProperty;
