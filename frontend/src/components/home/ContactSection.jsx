import React from "react";

import { frame3 } from "../../utils/icons";

import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div
        className="bg-cover bg-center bg-no-repeat p-10 flex items-center max-sm:flex-col-reverse max-sm:px-2 max-lg:px-10 max-lg:py-5 "
        style={{ background: `url(${frame3})` }}
      >
        <div className="p-10 w-1/2 flex flex-col gap-5 max-sm:py-2 max-sm:px-0 max-sm:w-full max-sm:items-center ">
          <h1 className="capitalize text-[#110229] text-5xl font-semibold max-sm:text-center max-sm:text-xl ">
            Find your best Properties.
          </h1>
          <p className="text-[#585981] font-interRegular max-sm:text-center">
            We provide complete service for the sale or purchase of Real Estate.
          </p>
          <Link
            to="/contact"
            className="uppercase text-center px-5 py-2 text-white bg-primary-color w-fit max-sm:w-full max-sm:text-sm"
          >
            contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
