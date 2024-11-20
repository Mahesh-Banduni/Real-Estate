import React from "react";

import { facebook, instagram, youtube } from "../utils/icons";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#F5F5F5] mt-20 relative py-10 max-sm:mt-10">
      <div className="w-11/12 grid grid-rows-1 grid-cols-4 max-sm:grid-rows-2 max-sm:grid-cols-2 max-sm:place-content-center">
        <div className="flex flex-col gap-3 pr-5 max-sm:pr-0 max-sm:items-center mt-4">
          <h1 className="text-primary-color font-interMedium uppercase text-xl">
            Property dealer
          </h1>
          <p className="text-[#1F2744] text-base font-interRegular capitalize max-sm:text-center">
            We have built our reputation as true local area experts.
          </p>
        </div>
        <div className="flex flex-col gap-3 pr-5 max-sm:pr-0 max-sm:items-center mt-4">
          <h1 className="capitalize font-interMedium text-xl ">Service</h1>
          <ul className="flex flex-col gap-3 max-sm:items-center">
            <li className="font-interRegular text-[#575757] text-base ">
              About
            </li>
            <li className="font-interRegular text-[#575757] text-base ">
              Careers
            </li>
            <li className="font-interRegular text-[#575757] text-base ">
              Terms & Condition
            </li>
            <li className="font-interRegular text-[#575757] text-base ">
              Privacy & Policy
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 pr-5 max-sm:pr-0 max-sm:items-center mt-4">
          <h1 className="capitalize font-interMedium text-xl ">Community</h1>
          <ul className="flex flex-col gap-3">
            <li className="font-interRegular text-[#575757] text-base ">
              Find Agent
            </li>
            <li className="font-interRegular text-[#575757] text-base ">
              Lifestyle
            </li>
            <li className="font-interRegular text-[#575757] text-base ">
              Legal Notice
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 pr-5 max-sm:pr-0 max-sm:items-center mt-4">
          <h1 className="capitalize font-interMedium text-xl ">Follow Us On</h1>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-white rounded-full">
              <img src={instagram} alt="instagram" />
            </button>
            <button className="p-2 bg-white rounded-full">
              <img src={facebook} alt="facebook" />
            </button>
            <button className="p-2 bg-white rounded-full">
              <img src={youtube} alt="youtube" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
