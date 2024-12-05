import React from "react";

import { facebook, instagram, youtube, twitter } from "../utils/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-700 mt-20 relative py-10 max-sm:mt-10 text-white">
      <div className="w-11/12 grid grid-rows-1 grid-cols-3 max-sm:grid-rows-footer-small-screen max-sm:grid-cols-1">
        <div className="flex flex-col gap-3 pr-5 max-sm:pr-0 max-sm:items-center mt-4">
          <h1 className="capitalize text-2xl font-interSemiBold">
            Real Estate Firm
          </h1>
          <p className="font-interRegular capitalize max-sm:text-center text-balance  text-gray-300">
            We have built our reputation as true local area experts.
          </p>
        </div>
        <div className="flex flex-col gap-3 pr-5 max-sm:pr-0 max-sm:items-center mt-4">
          <h1 className="capitalize text-2xl font-interSemiBold"> Company </h1>
          <ul className="flex flex-col gap-3 max-sm:items-center max-sm:ml-0 text-gray-300 ">
            <li className="font-interRegular text-base ">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="font-interRegular text-base ">
              <Link to={"/disclaimer"}>Disclaimer</Link>
            </li>
            <li className="font-interRegular text-base ">
              <Link to="/termsandconditions">Terms & Condition</Link>
            </li>
            <li className="font-interRegular text-base ">
              <Link to={"/privacy"}>Privacy & Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 pr-5 max-sm:pr-0 max-sm:items-center mt-4">
          <h1 className="capitalize text-2xl font-interSemiBold">
            Connect Us On
          </h1>
          <div className="flex flex-col gap-5 max-sm:flex-col max-sm:items-center max-sm:justify-center text-gray-300">
            <div className="flex flex-col gap-2 max-sm:items-center ">
              <div className="flex flex-col max-sm:items-center">
                <p className="max-[400px]:text-xs">
                  <span className="font-interMedium "> Phone Number :- </span>{" "}
                  (+91) 8595740966
                </p>
                <p className="text-xs">Monday - Saturday 6 am to 8 pm</p>
              </div>
              <p className="max-[400px]:text-xs">
                <span className="font-interMedium"> Email :- </span>
                pgoyal_realestate@propertymela.in
              </p>
            </div>
            <div className="flex flex-col gap-2 max-sm:items-center">
              <h1 className="font-interSemiBold capitalize text-white">
                {" "}
                Connect with us{" "}
              </h1>
              <div className="flex items-center gap-5">
                <button className="p-2 bg-white rounded-full">
                  <Link to="https://www.instagram.com/goyal_property_mela/?hl=en">
                    <img src={instagram} alt="instagram" />
                  </Link>
                </button>
                <button className="p-2 bg-white rounded-full">
                  <Link to="https://x.com/PropertyMela_">
                    <img src={twitter} alt="twitter" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
