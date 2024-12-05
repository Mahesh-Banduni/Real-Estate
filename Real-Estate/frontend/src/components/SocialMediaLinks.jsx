import React from "react";
import { Link } from "react-router-dom";

const SocialMediaLinks = ({ to, pic, className }) => {
  return (
    <Link to={to}>
      <img
        className={`${className} p-2 border border-black rounded-full`}
        src={pic}
        alt="social media link"
      />
    </Link>
  );
};

export default SocialMediaLinks;
