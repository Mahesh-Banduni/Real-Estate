import React from "react";
import { Link } from "react-router-dom";

import { frame3 } from "../../utils/icons";
import { contactSideImage } from "../../utils/icons";

const ContactSection = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div
        className="bg-cover bg-center bg-no-repeat p-5 flex items-center justify-between max-md:flex-col-reverse max-sm:px-2 max-lg:px-10 max-lg:py-5 "
        style={{ background: `url(${frame3})` }}
      >
        <div className="p-10 max-lg:p-5 w-1/2 flex flex-col gap-5 max-md:py-2 max-md:px-0 max-md:w-full max-md:items-center ">
          <h1 className="capitalize text-[#110229] text-5xl font-semibold max-md:text-center max-sm:text-xl ">
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
        <div className="w-1/2 flex items-center justify-center">
          <img
            className="w-1/2 max-lg:w-2/3"
            src={contactSideImage}
            alt="building"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
