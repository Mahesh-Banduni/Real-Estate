import React from "react";
import { Link } from "react-router-dom";

const NavLinks = React.memo(({ to, text }) => {
  return (
    <Link
      className="text-primary-color uppercase px-8 py-2 border border-primary-color hover:shadow-links-shadow transition-all "
      to={to}
    >
      {text}
    </Link>
  );
});

export default NavLinks;
