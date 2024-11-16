import React from "react";
import { Link } from "react-router-dom";

import { rightArrow } from "../utils/icons";

const SecondaryButton = React.memo(({ text, link }) => {
  return (
    <React.Fragment>
      <Link
        to={link}
        className="text-primary-color font-interMedium text-lg capitalize flex items-center gap-2 max-sm:text-sm"
      >
        {text}
        <button>
          <img className="max-sm:h-3 max-sm:w-3" src={rightArrow} alt="arrow" />
        </button>
      </Link>
    </React.Fragment>
  );
});

export default SecondaryButton;
