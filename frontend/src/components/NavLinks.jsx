import React from "react";
import { Link } from "react-router-dom";

const NavLinks = React.memo(({ to, text }) => {
  return (
    <Link
      className="text-primary-color uppercase px-8 py-2 border border-primary-color hover:shadow-links-shadow transition-all max-md:px-5 max-md:py-1 max-[320px]:py-[0.15rem] max-md:text-sm max-sm:px-2 max-[380px]:text-xs"
      to={to}
    >
      {text}
    </Link>
  );
});

export default NavLinks;
