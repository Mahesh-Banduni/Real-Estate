import React from "react";

import { facebook, instagram, youtube, twitter } from "../utils/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#F5F5F5] mt-20 relative py-10 max-sm:mt-10">
      <div className="w-11/12 grid grid-rows-1 grid-cols-3 max-sm:grid-rows-2 max-sm:grid-cols-1 place-content-center">
        <div className="flex flex-col items-center justify-center gap-3 pr-5 max-sm:pr-0 max-sm:items-center mt-4">
          <h1 className="text-primary-color font-interMedium uppercase text-xl">
            Property dealer
          </h1>
          <p className="text-[#1F2744] text-base font-interRegular capitalize max-sm:text-center text-balance text-center">
            We have built our reputation as true local area experts.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 pr-5 max-sm:pr-0 max-sm:items-center mt-4">
          <h1 className="capitalize font-interMedium text-xl ">Service</h1>
          <ul className="flex flex-col gap-3 max-sm:items-center text-center">
            <li className="font-interRegular text-[#575757] text-base ">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="font-interRegular text-[#575757] text-base ">
              <Link to={"/disclaimer"}>Disclaimer</Link>
            </li>
            <li className="font-interRegular text-[#575757] text-base ">
              <Link to="/termsandconditions">Terms & Condition</Link>
            </li>
            <li className="font-interRegular text-[#575757] text-base ">
              <Link to={"/privacy"}>Privacy & Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 pr-5 max-sm:pr-0 max-sm:items-center mt-4">
          <h1 className="capitalize font-interMedium text-xl ">Follow Us On</h1>
          <div className="flex items-center gap-2 max-sm:flex-col">
            <button className="p-2 bg-white rounded-full">
              <Link to="https://www.instagram.com/goyal_property_mela/?hl=en">
                <img src={instagram} alt="instagram" />
              </Link>
            </button>
            {/* <button className="p-2 bg-white rounded-full">
              <Link to="">
                <img src={facebook} alt="facebook" />
              </Link>
            </button> */}
            <button className="p-2 bg-white rounded-full">
              <Link to="https://x.com/PropertyMela_">
                <img src={twitter} alt="twitter" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
