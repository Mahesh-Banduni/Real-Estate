import React from "react";

import {
  AreaInputField,
  Heading,
  ListPropertyInput,
  ListPropertySelectInput,
} from "../index";

const ResidentialHouseForm = () => {
  return (
    <React.Fragment>
      {/* property location */}
      <div className="mt-5">
        <Heading className="text-xl" text="Property location" />
        <div className="flex flex-col gap-5 w-2/5">
          <ListPropertyInput
            type={"text"}
            placeholder="Enter City"
            label={"City"}
            className={
              "rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
          <ListPropertyInput
            type={"text"}
            placeholder="Name of Project/Society"
            label={"Name of Project/Society"}
            className={
              " rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
          <ListPropertyInput
            type={"text"}
            placeholder="Enter Locality"
            label={"Locality"}
            className={
              " rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
          <ListPropertyInput
            type={"text"}
            placeholder="Enter House No/Flat No"
            label={"Address"}
            className={
              " rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
        </div>
      </div>

      {/* property features */}
      <div className="mt-5">
        <Heading className="text-xl " text="Property features" />
        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          <ListPropertySelectInput
            label={"bedrooms:-"}
            className={"capitalize"}
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">10"]}
          />
          <ListPropertySelectInput
            label={"balconies:-"}
            className={"capitalize"}
            options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
          <ListPropertySelectInput
            label={"Floor no. :-"}
            className={"capitalize"}
            options={[
              "lower basement",
              "upper basement",
              "ground",
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
            ]}
          />
          <ListPropertySelectInput
            label={"furnished status:-"}
            className={"capitalize"}
            options={["furnished", "unfurnished", "semi-furnished"]}
          />
          <ListPropertySelectInput
            label={"bathrooms:-"}
            className={"capitalize"}
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
          <ListPropertySelectInput
            label={"Open Sides:-"}
            className={"capitalize"}
            options={[1, 2, 3, 4]}
          />
        </div>
      </div>

      {/* Area */}
      <div className="mt-5">
        <Heading className="text-xl " text="Area" />
        <div className="flex flex-col gap-2 mt-1">
          <AreaInputField type={"number"} label={"Plot Area"} />
          <AreaInputField type={"number"} label={"Super Area"} />
        </div>
      </div>

      {/* construction status */}
      <div>
        <ListPropertySelectInput
          label={"Possession Status:-"}
          options={["under construction", "ready to move"]}
        />
      </div>

      {/* price details */}
      <div className="mt-5">
        <Heading className="text-xl pb-1 " text="Price Details" />
        <div className="w-fit capitalize flex flex-col gap-2">
          <ListPropertyInput
            className={"border w-fit"}
            placeholder={"Enter Total Price"}
            type={"number"}
            label={"expected price"}
          />
          <ListPropertyInput
            className={"border w-fit"}
            placeholder={"Enter booking amount"}
            type={"number"}
            label={"booking amount"}
          />
          <div className="flex items-center gap-2 mt-2">
            <p>Price Negotiable:-</p>
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="yesNegotiable">yes</label>
                <input
                  type="radio"
                  id="yesNegotiable"
                  name="negotiablePrice"
                  className="radio radio-accent"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="noNegotiable">No</label>
                <input
                  id="noNegotiable "
                  type="radio"
                  name="negotiablePrice"
                  className="radio radio-accent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResidentialHouseForm;
