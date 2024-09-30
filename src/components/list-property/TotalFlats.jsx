import React from "react";

import ListPropertySelectInput from "../ListPropertySelectInput";
import { NumberOfFlat } from "../../utils/constant";

const TotalFlats = ({ handelChangeFormInputFields, formInputValue, name }) => {
  return (
    <React.Fragment>
      <ListPropertySelectInput
        handelChangeFormInputFields={handelChangeFormInputFields}
        formInputValue={formInputValue}
        name={name}
        label={"Total No. of Flats in Your Society:-"}
        options={NumberOfFlat}
      />
    </React.Fragment>
  );
};

export default TotalFlats;
