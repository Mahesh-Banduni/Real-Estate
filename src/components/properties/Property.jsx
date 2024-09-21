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
    <div className=" border-2 border-primary-color max-lg:grid-flow-col grid grid-cols-list-card grid-rows-1 gap-5 max-lg:gap-2 max-lg:grid-cols-2 max-lg:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-property-card ">
      <div className=" relative w-full p-2 h-full max-lg:row-span-2 max-sm:row-span-1">
        <div className="w-full max-lg:h-full">
          <img className="h-full w-full " src={propertyImage} alt="" />
          <span className="absolute z-10 text-xs top-[0.8rem] left-[0.8rem] bg-[#42423E] px-3 py-[0.4rem] text-white max-lg:hidden">
            8+ Images
          </span>
        </div>
        <div className="flex flex-col gap-[0.15rem] max-lg:hidden text-[#8F90A6] font-interRegular">
          <span>Owner : Mahesh baduni</span>
          <span className="text-sm">Updated 3 days ago.</span>
        </div>
      </div>
      <div className=" w-full h-[90%] my-auto flex flex-col gap-5 max-lg:justify-center max-sm:hidden max-xl:gap-1">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between max-lg:justify-center max-lg:gap-2">
            <Heading
              text=" 4 BHK House for sale in Rajpura, Dehradun "
              className="normal-case text-xl max-lg:w-3/5 max-md:text-base"
            />
            <div className="flex items-center justify-center gap-2">
              <img src={heart} alt="wishlist" />
              <img src={share} alt="share" />
            </div>
          </div>
          <p className="font-interRegular text-[#8F90A6] text-sm max-lg:hidden max-xl:text-xs">
            4 BHK, Residential House is available for Sale in Mohkampur,
            Dehradun for 1.9 Crore(s)
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 bg-[#F5F5F5] gap-3 px-5 py-2 max-lg:hidden max-xl:gap-1">
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
            <div className="flex flex-col ">
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
      </div>
      <div className=" w-full bg-price-card flex flex-col justify-between p-2 max-xl:mb-2 box-border max-lg:justify-start max-lg:h-fit max-lg:gap-5 ">
        <div className="text-center">
          <span className="text-2xl font-interSemiBold capitalize">
            Rs 1.95cr
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
