import React from "react";

import { contactBg, office } from "../../utils/icons";
import { Button } from "../index";

const ContactSection = () => {
  return (
    <div className="m-10">
      <div
        className="bg-cover bg-center bg-no-repeat px-10 flex items-center "
        style={{ background: `url(${contactBg})` }}
      >
        <div className="p-10 w-1/2 flex flex-col gap-5 ">
          <h1 className="capitalize text-[#110229] text-5xl font-semibold ">
            Find your best Real Estate
          </h1>
          <p className="text-[#585981] font-interRegular">
            We provide a complete service for the sale, purchase or rental of
            real estate.
          </p>
          <Button
            text="contact us"
            className="uppercase px-5 py-2 text-white bg-primary-color w-fit"
          />
        </div>
        <div className=" w-1/2 ">
          <img src={office} alt="office building" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
