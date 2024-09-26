import React, { useState } from "react";
import Select from "react-select";

import {
  AreaInputField,
  Heading,
  ListPropertyInput,
  ListPropertySelectInput,
} from "../index";

const CommercialOfficeSpaceForm = () => {
  const [localAdvantage, setLocalAdvantage] = useState([]);
  const [overLooking, setOverLooking] = useState([]);
  const locationAdvantage = [
    { value: "Reserved Parking", label: "Reserved Parking" },
    { value: "Visitor Parking", label: "Visitor Parking" },
    { value: "Lift", label: "Lift" },
    { value: "Power Backup", label: "Power Backup" },
    { value: "Gas Pipeline", label: "Gas Pipeline" },
    { value: "Park", label: "Park" },
    { value: "Kids Play Area", label: "Kids Play Area" },
    { value: "Gymnasium", label: "Gymnasium" },
    { value: "Swimming Pool", label: "Swimming Pool" },
    { value: "Club House", label: "Club House" },
    { value: "Air Conditioned", label: "Air Conditioned" },
    { value: "Vaastu Compliance", label: "Vaastu Compliance" },
    { value: "Internet/Wi-Fi", label: "Internet/Wi-Fi" },
    {
      value: "Security Personnel",
      label: "Security Personnel",
    },
    { value: "CCTV Camera", label: "CCTV Camera" },
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
  const overLookingValue = [
    { value: "Pool", label: "Pool" },
    { value: "Garden", label: "Garden" },
    { value: "Main Road", label: "Main Road" },
  ];

  const handleChange = (localAdvantage) => {
    setLocalAdvantage(localAdvantage || []);
  };

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
            label={"Ideal For Businesses"}
            options={[
              "Private Company",
              "Individual Business",
              "Self Employed Business",
              "Boutique",
              "Departmental Clinic",
              "Cake Shop",
              "Mobile Service Center",
              "R&D center",
              "Research Center",
              "High Security Setup",
              "Sales/Marketing Office",
              "Back office",
              "Front Office",
              "24X7",
              "Tuition",
              "Education",
              "Lounge",
              "Cafe",
              "IT Training Center",
              "Non IT training center",
              "Logistics Back Office",
              "Banks",
              "Shipment",
              "Packaging Back office",
              "Advertising",
              "Travel Agency",
              "Backend Office",
              "Advocate",
              "Frontend Office",
              "Advocate Office",
              "Architect Office",
              "Small Office Purpose",
              "ATM",
              "Bank branch",
              "Banking",
              "Finance",
              "Banks and NBFC",
              "Insurance and Mutual Fund Companies",
              "Share Brokers",
              "Banquet Hall",
              "Bar and Restaurant",
              "Boutique Office",
              "Events and Promotions",
              "Builders and Architects",
              "Builders and Developers",
              "CA Office",
              "Traders Office",
              "Self Employed Professionals",
              "Start Ups",
              "Lawyers",
              "Tax Consultants",
              "Law Chamber",
              "Company Head Office",
              "Company Regional Office",
              "Company Marketing Office",
              "Educational Registration Office",
              "Area Sales Office",
              "Chartered Accountant",
              "Law Company",
              "Online Marketing Office",
              "Digital Marketing Office",
              "Recruitments Company",
              "Business Operations Office",
              "Job Consulting",
              "Computer Training",
              "Construction Office",
              "E-Commerce",
              "Gym/Fitness Centre",
              "Hospital",
              "Hotel",
              "Showroom",
              "Guest House",
              "Insurance Company",
              "Multi Specialty Hospital",
              "Training Institute",
              "Call Center/BPO",
              "Coaching Center",
              "Private Consulting",
              "Doctor Clinic",
              "Pathology",
              "IT/ITES and Related",
              "Studio/Production house",
              "Private Office",
              "Health Care",
              "Corporate Office Setup",
              "Women Safety",
            ]}
          />
        </div>
      </div>
      {/* Property Area */}
      <div className="mt-5">
        <Heading className="text-xl " text="Area" />
        <div className="flex flex-col gap-2 mt-1">
          <AreaInputField type={"number"} label={"Carpet Area"} />
          <AreaInputField type={"number"} label={"Super Area"} />
        </div>
      </div>

      {/* property availability */}
      <div className="flex flex-col gap-5 ">
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
        <div className="">
          <div className="mt-1">
            <h2 className="capitalize font-interRegular">Amenities:-</h2>
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
    </div>
  );
};

export default CommercialOfficeSpaceForm;
