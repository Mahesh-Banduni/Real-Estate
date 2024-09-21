import React from "react";

import { logo } from "../utils/icons";
import { NavLinks, AnimatedButton, Dropdowns } from "./index";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col relative">
      <div className="navbar bg-base-100 w-11/12 m-auto h-[12vh] max-sm:h-[8vh] flex items-center justify-between">
        <div className="navbar-start w-fit">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[60vw] flex flex-col gap-2  p-2 shadow "
            >
              <li className="bg-transparent">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? " border-b-2 text-xl border-none text-primary-color "
                      : " text-black text-xl border-none hover:border-b-2 hover:text-primary-color "
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="bg-transparent">
                <NavLink
                  to={"/properties"}
                  className={({ isActive }) =>
                    isActive
                      ? " border-b-2 text-xl border-none text-primary-color "
                      : " text-black text-xl border-none hover:border-b-2 hover:text-primary-color "
                  }
                >
                  Property
                </NavLink>
              </li>
              <li className="bg-transparent">
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive
                      ? " border-b-2 text-xl border-none text-primary-color "
                      : " text-black text-xl border-none hover:border-b-2 hover:text-primary-color "
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="bg-transparent">
                <NavLink
                  to={"/properties"}
                  className={({ isActive }) =>
                    isActive
                      ? " border-b-2 text-xl text-primary-color border-none "
                      : " text-black text-xl hover:border-b-2 hover:text-primary-color border-none "
                  }
                >
                  List Property
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to={"#"}>
            <img
              className="w-16 h-16 max-sm:w-12 max-sm:h-12"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex items-center gap-5  menu-horizontal px-1">
            <li className="bg-transparent">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 border-primary-color text-primary-color text-lg uppercase cursor-pointer font-interSemiBold  "
                    : "font-interSemiBold text-black hover:border-b-2 hover:border-primary-color hover:text-primary-color text-lg uppercase cursor-pointer "
                }
              >
                Home
              </NavLink>
            </li>
            <li className="bg-transparent">
              <NavLink
                to={"/properties"}
                className={({ isActive }) =>
                  isActive
                    ? "font-interSemiBold border-b-2 border-primary-color text-primary-color text-lg uppercase cursor-pointer  "
                    : "font-interSemiBold text-black hover:border-b-2 hover:border-primary-color hover:text-primary-color text-lg uppercase cursor-pointer  "
                }
              >
                Properties
              </NavLink>
            </li>
            <li className="bg-transparent">
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "font-interSemiBold border-b-2 border-primary-color text-primary-color text-lg uppercase cursor-pointer  "
                    : "font-interSemiBold text-black hover:border-b-2 hover:border-primary-color hover:text-primary-color text-lg uppercase cursor-pointer  "
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="bg-transparent">
              <NavLink
                to={"/list-property"}
                className={({ isActive }) =>
                  isActive
                    ? "font-interSemiBold border-b-2 border-primary-color text-primary-color text-lg uppercase cursor-pointer  "
                    : "font-interSemiBold text-black hover:border-b-2 hover:border-primary-color hover:text-primary-color text-lg uppercase cursor-pointer  "
                }
              >
                List Property
              </NavLink>
            </li>
            <li>
              <AnimatedButton text="FREE" className="bg-free-btn-color" />
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-8 w-fit flex items-center justify-end max-sm:gap-2">
          <div className=" flex items-center gap-3 max-[320px]:gap-[0.35rem] ">
            <NavLinks to="/signup" text="Register" />
            <NavLinks to="/signin" text="Login" />
          </div>
        </div>
      </div>
      <hr />
      <Dropdowns />
    </div>
  );
};

export default Header;
