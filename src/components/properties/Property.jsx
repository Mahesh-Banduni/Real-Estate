import React from "react";

import {
  propertyImage,
  superArea,
  transaction,
  status,
  furnishing,
  floor,
  facing,
  heart,
  share,
} from "../../utils/icons";
import { Button, Heading } from "../index";

const Property = () => {
  return (
    <div className=" border-2 border-primary-color grid grid-cols-list-card grid-rows-1 gap-5">
      <div className="w-full m-2">
        <div className="relative">
          <img src={propertyImage} alt="" />
          <span className="absolute text-xs top-[0.3rem] left-[0.3rem] bg-[#42423E] px-3 py-[0.4rem] text-white">
            8+ Images
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Owner : Mahesh baduni</span>
          <span>Updated 3 days ago.</span>
        </div>
      </div>
      <div className=" w-full m-2 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <Heading
            text=" 4 BHK House for sale in Rajpura, Dehradun"
            className="normal-case text-xl"
          />
          <div className="flex items-center justify-center gap-2">
            <img src={heart} alt="wishlist" />
            <img src={share} alt="share" />
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 bg-[#F5F5F5] gap-3 px-5 py-2">
          <div className="flex items-center gap-3 justify-start border-r border-border-color">
            <div>
              <img src={superArea} alt={"super area"} />
            </div>
            <div className=" flex flex-col">
              <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                Super Area
              </span>
              <span className="text-sm text-[#110229] font-interMedium">
                {" "}
                5500 sqft
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-start border-r border-border-color">
            <div>
              <img src={status} alt={"super area"} />
            </div>
            <div className="flex flex-col">
              <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                status
              </span>
              <span className="capitalize text-sm text-[#110229] font-interMedium">
                ready to move
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-start border-border-color">
            <div>
              <img src={floor} alt={"super area"} />
            </div>
            <div className="flex flex-col">
              <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                floor
              </span>
              <span className="capitalize text-sm text-[#110229] font-interMedium">
                3 out of 3
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-start border-r border-border-color">
            <div>
              <img src={transaction} alt={"super area"} />
            </div>
            <div className="flex flex-col">
              <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                transaction
              </span>
              <span className="text-sm capitalize text-[#110229] font-interMedium">
                resale
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-start border-r border-border-color">
            <div>
              <img src={furnishing} alt={"super area"} />
            </div>
            <div className="flex flex-col">
              <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                furnishing
              </span>
              <span className="capitalize text-sm text-[#110229] font-interMedium">
                furnished
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-start border-border-color">
            <div>
              <img src={facing} alt={"super area"} />
            </div>
            <div className="flex flex-col">
              <span className="uppercase text-sm text-[#8F90A6] font-interRegular">
                facing
              </span>
              <span className="capitalize text-sm text-[#110229] font-interMedium">
                South-East
              </span>
            </div>
          </div>
        </div>
        <p className="font-interRegular text-[#8F90A6] text-sm">
          4 BHK, Residential House is available for Sale in Mohkampur, Dehradun
          for 1.9 Crore(s)
        </p>
      </div>
      <div className=" w-full bg-price-card flex flex-col justify-between p-2 ">
        <div className="text-center">
          <span className="text-2xl font-interSemiBold capitalize">
            {" "}
            Rs 1.95cr{" "}
          </span>
          <p className="text-[#8F90A6] font-interMedium">Rs 3,545 per sqft</p>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            text="send enquiry"
            className="w-full py-1 bg-primary-color text-white capitalize border border-primary-color font-interMedium text-lg"
          />
          <Button
            text="contact us"
            className="w-full py-1 bg-white text-primary-color capitalize border border-primary-color font-interMedium text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Property;
