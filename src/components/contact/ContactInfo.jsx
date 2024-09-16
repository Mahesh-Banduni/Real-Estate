import React from "react";

import { Button, Heading } from "../index";

const ContactInfo = () => {
  return (
    <div className="bg-[#F5F5F5] py-10 ">
      <div className="w-11/12 m-auto grid grid-rows-1 grid-cols-2  ">
        <div className="flex justify-center gap-5 flex-col">
          <p className="capitalize font-interMedium text-lg text-[#000000]">
            contact info
          </p>
          <Heading
            text="We are always happy to assist you"
            className="text-4xl text-balance leading-[3.6rem]"
          />
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-2">
            <div className="flex gap-5 flex-col">
              <h2 className="text-[#000000] capitalize font-interMedium ">
                Email address
              </h2>
              <div className="border-2 border-black h-[1px] w-10"></div>
              <h3 className="text-[#000000] capitalize font-interMedium ">
                help@info@.com
              </h3>
            </div>
            <p className="leading-8 tracking-normal font-interRegular text-lg text-slate-800 text-balance">
              Assistance hours: Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-5 flex-col">
              <h2 className="text-[#000000] capitalize font-interMedium ">
                Number
              </h2>
              <div className="border-2 border-black h-[1px] w-10"></div>
              <h3 className="text-[#000000] capitalize font-interMedium ">
                (808) 998-34256
              </h3>
            </div>
            <p className="leading-8 tracking-normal font-interRegular text-lg text-slate-800 text-balance">
              Assistance hours: Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
