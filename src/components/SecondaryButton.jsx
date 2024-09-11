import React from "react";
import { Link } from "react-router-dom";

import { rightArrow } from "../utils/icons";

const SecondaryButton = React.memo(({ text }) => {
  return (
    <React.Fragment>
      <Link className="text-primary-color font-interMedium text-lg capitalize flex items-center gap-2">
        {text}
        <button>
          <img src={rightArrow} alt="arrow" />
        </button>
      </Link>
    </React.Fragment>
  );
});

export default SecondaryButton;
