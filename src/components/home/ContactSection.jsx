import React from "react";

import { contactBg, office } from "../../utils/icons";
import { Button } from "../index";

const ContactSection = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div
        className="bg-cover bg-center bg-no-repeat px-10 flex items-center max-sm:flex-col-reverse max-sm:px-2 "
        style={{ background: `url(${contactBg})` }}
      >
        <div className="p-10 w-1/2 flex flex-col gap-5 max-sm:py-2 max-sm:px-0 max-sm:w-full max-sm:items-center ">
          <h1 className="capitalize text-[#110229] text-5xl font-semibold max-sm:text-center ">
            Find your best Real Estate
          </h1>
          <p className="text-[#585981] font-interRegular max-sm:text-center">
            We provide a complete service for the sale, purchase or rental of
            real estate.
          </p>
          <Button
            text="contact us"
            className="uppercase px-5 py-2 text-white bg-primary-color w-fit max-sm:w-full max-sm:text-sm"
          />
        </div>
        <div className=" w-1/2 max-sm:py-2 max-sm:px-0 max-sm:w-full flex justify-end  ">
          <img src={office} alt="office building" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
