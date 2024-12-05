import React from "react";

import ListPropertySelectInput from "../ListPropertySelectInput";
import { NumberOfFlat } from "../../utils/constant";

const TotalFlats = ({ handelChangeFormInputFields, formInputValue, name }) => {
  return (
    <div className="w-1/3">
      <ListPropertySelectInput
        handelChangeFormInputFields={handelChangeFormInputFields}
        formInputValue={formInputValue}
        name={name}
        label={"Total No. of Flats in Your Society:-"}
        options={NumberOfFlat}
      />
    </div>
  );
};

export default TotalFlats;
