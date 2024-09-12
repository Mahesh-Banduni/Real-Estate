import React, { useState } from "react";

import AnimationButton from "../AnimatedButton";
import { arrow, logo } from "../../utils/icons";
import DropdownButton from "./DropdownButton";

const Dropdowns = () => {
  const initialState = {
    buy: false,
    sell: false,
    "share property": false,
    "exchange property": false,
  };

  const [dropdown, setDropdown] = useState(initialState);

  const handelOpenDropdown = (name) => {
    setDropdown(() => {
      return {
        ...initialState,
        [name]: !initialState[name],
      };
    });
  };
  const handelCloseDropdown = () => {
    setDropdown(() => {
      return {
        ...initialState,
      };
    });
  };

  return (
    <React.Fragment>
      <div className=" w-11/12 m-auto flex items-center gap-2 justify-start h-[12vh] ">
        <DropdownButton
          handelOpenDropdown={handelOpenDropdown}
          handelCloseDropdown={handelCloseDropdown}
          text="buy"
          dropdown={dropdown.buy}
          arrow={arrow}
        />

        <DropdownButton
          handelOpenDropdown={handelOpenDropdown}
          handelCloseDropdown={handelCloseDropdown}
          text="sell"
          dropdown={dropdown.sell}
          arrow={arrow}
        />
        <DropdownButton
          handelOpenDropdown={handelOpenDropdown}
          handelCloseDropdown={handelCloseDropdown}
          text="share property"
          dropdown={dropdown["share property"]}
          arrow={arrow}
        />
        <div className=" uppercase text-lg flex items-center">
          <DropdownButton
            handelOpenDropdown={handelOpenDropdown}
            handelCloseDropdown={handelCloseDropdown}
            text="exchange property"
            dropdown={dropdown["exchange property"]}
            arrow={arrow}
          />
          <AnimationButton className="bg-[#FFAB86]" text="NEW" />
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Dropdowns;
