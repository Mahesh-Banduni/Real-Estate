import React, { useState } from "react";
import Select from "react-select";

import {
  AreaInputField,
  Heading,
  ListPropertyInput,
  ListPropertySelectInput,
} from "../index";

const CommercialPlotForm = () => {
  const [overLooking, setOverLooking] = useState([]);
  const overLookingValue = [
    { value: "Pool", label: "Pool" },
    { value: "Garden/Park", label: "Garden/Park" },
    { value: "Main Road", label: "Main Road" },
  ];
  const facingValue = [
    "North",
    "South",
    "West",
    "East",
    "North-East",
    "North-West",
    "South-West",
    "South-East",
  ];

  const handleOverlookingChange = (localAdvantage) => {
    setOverLooking(localAdvantage || []);
  };
  return (
    <div>
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
              "rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
          <ListPropertyInput
            type={"text"}
            placeholder="Enter Complex Name"
            label={"Complex Name"}
            className={
              "rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
          <ListPropertyInput
            type={"text"}
            placeholder="Enter Office Space address"
            label={"Address"}
            className={
              "rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
          <ListPropertySelectInput
            label={"Land Zone"}
            options={[
              "Industrial",
              "Commercial",
              "Residential",
              "Transport and Communication",
              "Public Utilities",
              "Public and Semi Public Use",
              "Open Spaces",
              "Agriculture Zone",
              "Special Economic Zone",
              "Natural Conservation Zone",
              "Government Use",
            ]}
          />
        </div>
      </div>

      {/* property features */}
      <div className="mt-5">
        <Heading className="text-xl " text="Property features" />
        <div className="grid grid-cols-1 grid-rows-2 w-[20rem]">
          <ListPropertyInput
            type={"number"}
            placeholder="Enter Open Side"
            label={"Open Sides"}
            className={
              "rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
          <div className="flex items-center gap-2 mt-2">
            <p>Boundary Wall:-</p>
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="yesBoundaryWall">yes</label>
                <input
                  type="radio"
                  id="yesBoundaryWall"
                  name="boundaryWall"
                  className="radio radio-accent"
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <label htmlFor="noBoundaryWall">No</label>
                <input
                  id="noBoundaryWall "
                  type="radio"
                  name="boundaryWall"
                  className="radio radio-accent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Area */}
      <div className="mt-5">
        <Heading className="text-xl " text="Area" />
        <div className="flex flex-col gap-2 mt-1">
          <AreaInputField type={"number"} label={"Plot Area"} />
          <div className=" border-b border-border-color w-fit flex flex-col gap-[0.15rem]">
            <label htmlFor={""}>Length:-</label>
            <div className="flex items-center gap-5">
              <input
                type={"number"}
                placeholder={"Enter length dimension"}
                className={`capitalize py-1 outline-none`}
              />
              <input
                defaultValue={"Yard"}
                type={"text"}
                placeholder={"Yard"}
                disabled
                className={`capitalize py-1 w-10 outline-none border-none `}
              />
            </div>
          </div>
          <div className=" border-b border-border-color w-fit flex flex-col gap-[0.15rem]">
            <label>Width:-</label>
            <div className="flex items-center gap-5">
              <input
                type={"number"}
                placeholder={"Enter Width dimension"}
                className={`capitalize py-1 outline-none`}
              />

              <input
                defaultValue={"Yard"}
                type={"text"}
                placeholder={"Yard"}
                disabled
                className={`capitalize py-1 w-10 outline-none border-none `}
              />
            </div>
          </div>
        </div>
      </div>

      {/* property availability */}
      <div className="flex flex-col gap-5 mt-5">
        <ListPropertySelectInput
          label={"Possession Status:-"}
          options={["under construction", "ready to move"]}
        />
        <div className="flex items-center gap-5">
          <h1>Currently Leased Out:-</h1>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <label htmlFor="yes-Currently-Leased-Out">Yes</label>
              <input
                id="yes-Currently-Leased-Out"
                name="Currently Leased Out"
                type="radio"
                className="radio radio-success"
              />
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="No-Currently-Leased-Out">No</label>
              <input
                id="No-Currently-Leased-Out"
                name="Currently Leased Out"
                type="radio"
                className="radio radio-success"
              />
            </div>
          </div>
        </div>
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

      {/* amenities */}
      <div className="mt-5">
        <Heading className="text-xl " text="Amenities" />
        <div className=" flex flex-col gap-2">
          <div className="mt-1 flex flex-col gap-1">
            <h2 className="capitalize font-interRegular">Overlooking:-</h2>
            <Select
              className="w-1/3"
              options={overLookingValue}
              onChange={handleOverlookingChange}
              value={overLooking}
              isMulti
            />
          </div>
          <ListPropertySelectInput label={"facing:-"} options={facingValue} />
        </div>
      </div>
    </div>
  );
};

export default CommercialPlotForm;
