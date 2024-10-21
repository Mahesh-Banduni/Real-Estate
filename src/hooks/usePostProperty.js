import { useEffect, useState } from "react";

import axios from "axios";

const usePostProperty = () => {
  const initialState = {
    propertyPurpose: "sale",
    propertyType: "Residential Flat/Appartment",
    numberOfFlatsInSociety: "",
    city: "",
    projectSocietyName: "",
    projectMarketName: "",
    buildingComplexName: "",
    locality: [],
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
  //  ======================stats========================
  const [throttling, setThrottling] = useState({
    city: "",
    locality: "",
  });
  const [cities, setCities] = useState([]);
  const [localities, setLocalities] = useState([]);
  const [showCities, setShowCities] = useState(false);
  const [showLocalities, setShowLocalities] = useState(false);
  const [formInputValue, setFormInputValue] = useState(initialState);

  //==================filled the form input field handler ==================

  const handelChangeFormInputFields = (event) => {
    const { name, value } = event.target;

    if (name === "images") {
      setFormInputValue((preValue) => {
        return {
          ...preValue,
          [name]: [...event.target.files],
        };
      });
    } else {
      setFormInputValue((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    }
  };

  //===========================post property handler===========================

  const handelPostProperty = async (e) => {
    e.preventDefault();
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
      possessionStatus,
      superArea,
    } = formInputValue;

    if (formInputValue?.propertyPurpose === "sale") {
      // Basic field validation
      if (
        !address ||
        !balconies ||
        !bathrooms ||
        !bedrooms ||
        !bookingAmount ||
        !carpetArea ||
        !city ||
        !expectedPrice ||
        !floorNumber ||
        !furnished ||
        !locality ||
        !superArea ||
        !possessionStatus
      ) {
        alert("Please enter all the required fields.");
        return;
      }

      try {
        // Create FormData object
        const formData = new FormData();

        // Append each field to the FormData object
        for (const key in formInputValue) {
          if (key === "images") {
            // If the field is images, append each file separately
            formInputValue?.images?.forEach((file) => {
              formData.append("images", file);
            });
          } else if (Array.isArray(formInputValue[key])) {
            // For array fields, handle them appropriately (e.g., 'locality' and 'amenities')
            formData.append(key, JSON.stringify(formInputValue[key]));
          } else {
            // For regular fields, just append the value
            formData.append(key, formInputValue[key]);
          }
        }

        // Send FormData using Axios
        let token = localStorage.getItem("token");
        const response = await axios.post(
          "http://localhost:8080/properties",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);
      } catch (error) {
        console.log(error);

        console.log(`Error on posting property: ${error.message}`);
      }
    }
  };

  //================throttling functionality on cites search============================

  const handelSearchCity = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/cities-localities?city=${formInputValue?.city}`
      );
      console.log(response);

      if (response?.statusText === "Created") {
        let cities = response?.data?.data.map((item) => {
          return item.name;
        });
        setCities(cities);
      }
    } catch (error) {
      console.log(`city search error: ${error?.message}`);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handelSearchCity();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [formInputValue.city]);

  //===============throttling functionality on locality search===============================

  const handelSearchLocality = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/cities-localities?city=${formInputValue?.city}&locality=${formInputValue.locality}`
      );

      if (response?.statusText === "Created") {
        let localities = response?.data?.data[0]?.localities?.map((item) => {
          return item.name;
        });
        setLocalities(localities);
      }
    } catch (error) {
      console.log(`locality search error: ${error?.message}`);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handelSearchLocality();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [formInputValue.locality]);

  //===========================handel Toggle cities dropdown==================

  const handelToggleCityDropdown = () => {
    setShowCities(!showCities);
  };

  const handelToggleLocalityDropdown = () => {
    setShowLocalities(!showLocalities);
  };

  return {
    handelChangeFormInputFields,
    formInputValue,
    cities,
    localities,
    setFormInputValue,
    showCities,
    showLocalities,
    setShowLocalities,
    handelToggleCityDropdown,
    handelToggleLocalityDropdown,
    handelPostProperty,
  };
};

export default usePostProperty;
