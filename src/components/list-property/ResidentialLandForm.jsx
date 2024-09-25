import React, { useState } from "react";
import Select from "react-select";

import {
  AreaInputField,
  Heading,
  ListPropertyInput,
  ListPropertySelectInput,
} from "../index";

const ResidentialLandForm = () => {
  const overLookingValue = [
    { value: "Pool", label: "Pool" },
    { value: "Garden", label: "Garden" },
    { value: "Main Road", label: "Main Road" },
    { value: "Club", label: "Club" },
    { value: "Others", label: "Others" },
    { value: "Hills", label: "Hills" },
    { value: "Lake", label: "Lake" },
    { value: "River", label: "River" },
    { value: "Open Land", label: "Open Land" },
    { value: "Forest", label: "Forest" },
    { value: "City", label: "City" },
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
  const locationAdvantage = [
    { value: "Close To Metro Station", label: "Close To Metro Station" },
    { value: "Close To School", label: "Close To School" },
    { value: "Close To Hospital", label: "Close To Hospital" },
    { value: "Close To Markit", label: "Close To Markit" },
    { value: "Close To Railway Station", label: "Close To Railway Station" },
    { value: "Close To Airport", label: "Close To Airport" },
    { value: "Close To Mall", label: "Close To Mall" },
    { value: "Close To Highway", label: "Close To Highway" },
    { value: "Close To Bus Stop", label: "Close To Bus Stop" },
    { value: "Close To IT Park", label: "Close To IT Park" },
    { value: "Close To Industrial Area", label: "Close To Industrial Area" },
    { value: "Close To University", label: "Close To University" },
    { value: "Close To Park", label: "Close To Park" },
    {
      value: "Close To Government Office",
      label: "Close To Government Office",
    },
    { value: "Close To Sport Complex", label: "Close To Sport Complex" },
    { value: "Close To Commercial Hub", label: "Close To Commercial Hub" },
    {
      value: "Close To Entertainment Zone",
      label: "Close To Entertainment Zone",
    },
  ];
  const [localAdvantage, setLocalAdvantage] = useState([]);
  const [overLooking, setOverLooking] = useState([]);

  const handleChange = (localAdvantage) => {
    setLocalAdvantage(localAdvantage || []);
  };
  const handleOverlookingChange = (localAdvantage) => {
    setOverLooking(localAdvantage || []);
  };

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
          <ListPropertyInput
            type={"number"}
            placeholder="Enter open sides"
            label={"Open Sides"}
            className={
              "rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
          <ListPropertyInput
            type={"number"}
            placeholder="Enter facing road width"
            label={"Facing Road Width"}
            className={
              "rounded-md  border border-primary-color py-0 outline-none  "
            }
          />
          <ListPropertySelectInput
            label={"boundary wall:-"}
            className={"capitalize"}
            options={["true", "false"]}
          />
          <ListPropertySelectInput
            label={"gated colony :-"}
            className={"capitalize"}
            options={["true", "false"]}
          />
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

      {/* construction status */}
      <div className="mt-5">
        <ListPropertySelectInput
          label={"Possession Status:-"}
          options={["under construction", "ready to move"]}
        />
      </div>

      {/* amenities */}
      <div className="mt-5">
        <Heading className="text-xl " text="Amenities" />
        <div className="">
          <div className="mt-1">
            <h2 className="capitalize font-interRegular">
              Location advantage:-
            </h2>
            <Select
              className="w-1/3"
              options={locationAdvantage}
              onChange={handleChange}
              value={localAdvantage}
              isMulti
            />
          </div>
          <div className="mt-1">
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
    </React.Fragment>
  );
};

export default ResidentialLandForm;
