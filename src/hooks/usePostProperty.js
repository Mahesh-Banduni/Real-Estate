import { useState } from "react";

import axios from "axios";

const usePostProperty = () => {
  const initialState = {
    propertyDetail: "sale",
    propertyType: "Residential Flat/Apartment",
    numberOfFlatsInSociety: "",
    city: "",
    projectSocietyName: "",
    projectMarketName: "",
    buildingComplexName: "",
    locality: "",
    address: "",
    landZone: "",
    idealForBusinesses: [],
    nearbyBusinesses: [],
    floorsAllowed: "",
    facingRoadWidth: "",
    facingRoadWidthUnit: "Meters",
    personalWashroom: false,
    pantryCafeteria: "",
    cornerShop: false,
    mainRoadFacing: false,
    anyConstructionDone: false,
    BHKType: "",
    bedrooms: "",
    balconies: "",
    floorNumber: "",
    totalFloor: "",
    furnished: "",
    bathrooms: "",
    openSides: "",
    plotArea: "",
    plotAreaUnit: "",
    carpetArea: "",
    carpetAreaUnit: "",
    superArea: "",
    superAreaUnit: "",
    coveredArea: "",
    coveredAreaUnit: "",
    lengthDimension: "",
    widthDimension: "",
    dimensionUnit: "ft",
    cornerPlot: false,
    entranceWidth: "",
    entranceWidthUnit: "",
    ownership: "",
    transactionType: "",
    possessionStatus: "",
    currentlyLeasedOut: false,
    bookingAmount: "",
    priceNegotiable: false,
    boundaryWall: false,
    gatedColony: false,
    expectedPrice: "",
    residentialAmenities: [],
    commercialAmenities: [],
    landAmenities: [],
    locationAdvantages: [],
    overlooking: [],
    facing: "",
    description: "",
    images: [],
  };

  const [formInputValue, setFormInputValue] = useState(initialState);

  const handelChangeFormInputFields = (event) => {
    const { name, value } = event.target;

    setFormInputValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  console.log(formInputValue);

  const handelPostProperty = () => {
    const {
      address,
      balconies,
      bathrooms,
      bedrooms,
      bookingAmount,
      carpetArea,
      city,
      expectedPrice,
      floorNumber,
      furnished,
      locality,
      plotArea,
      possessionStatus,
      residentialAmenities,
    } = formInputValue;

    if (propertyTypeState === "Sale") {
      if (
        !address &&
        !balconies &&
        !bathrooms &&
        !bedrooms &&
        !bookingAmount &&
        !carpetArea &&
        !city &&
        !expectedPrice &&
        !floorNumber &&
        !furnished &&
        !locality &&
        !plotArea &&
        !possessionStatus
      ) {
        alert("please enter all the fields");
      } else {
        try {
          const response = axios.post("", formInputValue);
        } catch (error) {
          console.log(`error on posting property ${error.message} `);
        }
      }
    }
  };

  const onChange = () => {};

  return {
    handelChangeFormInputFields,
    formInputValue,
    onChange,
  };
};

export default usePostProperty;
