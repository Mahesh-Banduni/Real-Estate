import React from "react";

import {
  AreaInputField,
  Heading,
  ListPropertyInput,
  ListPropertySelectInput,
  Paragraph,
} from "../index";

const ExchangeFlatForm = () => {
  return (
    <div className="flex flex-col gap-2">
      {/*  From City */}
      <div className="mt-5">
        <Heading className="text-xl" text="Property location" />
        <div className="flex flex-col gap-5 w-2/5">
          <ListPropertyInput
            type={"text"}
            placeholder="From City"
            label={"From City"}
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
      {/* To City */}
      <div className="flex flex-col gap-5 w-2/5 mt-5">
        <ListPropertyInput
          type={"text"}
          placeholder="To City"
          label={"To City"}
          className={
            "rounded-md  border border-primary-color py-0 outline-none  "
          }
        />
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
        </div>
      </div>
      {/* Area */}
      <div className="mt-5">
        <Heading className="text-xl " text="Area" />
        <div className="flex flex-col gap-2 mt-1">
          <AreaInputField type={"number"} label={"Carpet Area"} />
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
        </div>
      </div>
      {/* property description */}
      <div className="mt-5">
        <Heading
          text="What makes your property unique"
          className="text-xl font-interRegular  "
        />
        <Paragraph
          text={"Adding details will increase your listing visibility"}
          className={"text-[1rem]"}
        />
        <textarea
          className="border-2 rounded-md border-border-color p-2 w-2/5 outline-primary-color"
          placeholder="Write your properties unique features like garden etc"
          name=""
          id=""
          cols="30"
          rows="6"
        ></textarea>
      </div>
    </div>
  );
};

export default ExchangeFlatForm;
