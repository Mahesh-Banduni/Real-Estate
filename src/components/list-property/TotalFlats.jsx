import React from "react";

import ListPropertySelectInput from "../ListPropertySelectInput";
import { NumberOfFlat } from "../../utils/constant";

const TotalFlats = () => {
  return (
    <React.Fragment>
      <ListPropertySelectInput
        label={"Total No. of Flats in Your Society:-"}
        options={NumberOfFlat}
      />
    </React.Fragment>
  );
};

export default TotalFlats;
