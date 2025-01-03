import React from "react";

import { Button, Heading } from "../index";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="bg-[#F5F5F5] py-10 ">
      <div className="w-11/12 m-auto grid grid-rows-1 grid-cols-2 max-xl:grid-rows-2 max-xl:grid-cols-1 ">
        <div className="flex justify-center max-xl:items-center max-xl:justify-center gap-5 flex-col max-md:items-center">
          <p className="capitalize font-interMedium text-lg text-[#000000]">
            contact info
          </p>
          <Heading
            text="We are always happy to assist you"
            className="text-4xl text-balance leading-[3.6rem] max-md:text-center max-sm:text-2xl"
          />
        </div>
        <div className="flex items-center max-xl:items-center max-xl:justify-center gap-2 max-xl:gap-5 max-md:justify-center max-sm:flex-col max-sm:gap-10">
          <div className="flex flex-col gap-2 max-xl:items-center">
            <div className="flex gap-5 flex-col max-sm:gap-1 max-xl:items-center">
              <h2 className="text-[#000000] capitalize font-interMedium max-sm:font-interRegular">
                Email address
              </h2>
              <div className="border-2 border-black h-[1px] w-10 max-md:hidden"></div>
              <Link className="font-interMedium text-blue-500 ">
                pgoyal_realestate@propertymela.in
              </Link>
            </div>
            <p className="leading-8 tracking-normal font-interRegular text-lg text-slate-800 text-balance max-md:text-center">
              Assistance hours: Monday - Saturday 6 am to 8 pm EST
            </p>
          </div>
          <div className="flex flex-col gap-2 max-xl:items-center">
            <div className="flex gap-5 flex-col max-md:items-center max-sm:gap-1">
              <h2 className="text-[#000000] capitalize font-interMedium ">
                Number
              </h2>
              <div className="border-2 border-black h-[1px] w-10 max-md:hidden"></div>
              <h3 className="text-[#000000] capitalize font-interMedium ">
                (+91) 8595740966
              </h3>
            </div>
            <p className="leading-8 tracking-normal font-interRegular text-lg text-slate-800 text-balance max-md:text-center">
              Assistance hours: Monday - Saturday 6 am to 8 pm EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
