import React from "react";

import { logo } from "../utils/icons";
import { NavLinks, AnimatedButton } from "../components/index";

const Navbar = () => {
  return (
    <>
      <div className="w-11/12 m-auto flex items-center justify-between h-[20vh] ">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-5">
            <li className="text-lg uppercase cursor-pointer ">Home</li>
            {/*<li className="text-lg uppercase cursor-pointer ">About</li>*/}
            <li className="text-lg uppercase cursor-pointer ">Properties</li>
            <li className="text-lg uppercase cursor-pointer ">Contact Us</li>
            <li className="text-lg uppercase cursor-pointer flex items-center gap-2 ">
              List property
              <AnimatedButton text="FREE" className="bg-free-btn-color" />
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <NavLinks to="/signup" text="Register" />
            <NavLinks to="/" text="Login" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
