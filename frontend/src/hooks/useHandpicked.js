import axios from "axios";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState, useCallback } from "react";
import { handelFetchHandpickedProperties } from "../store/slice";
import { useDispatch } from "react-redux";

const useHandpicked = () => {
  const dispatch = useDispatch();
  const [property, setProperty] = useState("Sale");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [handpickedFilter, setHandpickedFilter] = useState({
    propertyPurpose: "",
    propertyType: "",
    city: "",
  });
  const [searchCity, setSearchCity] = useState({
    city: "",
  });
  const [cities, setCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(true);

  //-------------------------property type-----------------------
  const handelChangePropertyType = (name) => {
    setProperty(name);
  };

  //--------------------------change input field----------------------
  const handelChangeInputFields = (event) => {
    const { name, value } = event.target;
    setHandpickedFilter((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  // -----------------------fetch handpicked properties ----------------
  const fetchProperties = async () => {
    setMessage("");
    try {
      setIsLoading(true);
      let response = await axiosInstance.get(
        `http://localhost:8080/handpicked-properties?propertyPurpose=${handpickedFilter.propertyPurpose}&propertyType=${handpickedFilter.propertyType}&city=${handpickedFilter.city}`
      );
      console.log(response);
      if (response?.statusText === "OK") {
        dispatch(handelFetchHandpickedProperties(response?.data?.data));
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      if (error.status === 404) {
        setMessage(error?.response?.data?.error);
      }
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [handpickedFilter]);

  // -----------------throttling functionality on cites search-------------------------------

  const handelSearchCity = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/cities-localities?city=${searchCity.city}`
      );
      console.log(response);

      if (response?.statusText === "Created") {
        setCities(response?.data?.data);
      }
    } catch (error) {
      console.log(`city search error: ${error?.message}`);
    }
  }, [searchCity]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handelSearchCity();
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [searchCity]);

  //------------------------handel change city--------------------
  const handelChangeCity = (event) => {
    setShowDropdown(true);
    const { value } = event.target;
    setSearchCity((preValue) => {
      return {
        ...preValue,
        city: value,
      };
    });
  };

  //-----------------------------handel select city---------------------------------------
  const handelSelectCity = (city) => {
    setHandpickedFilter((preValue) => {
      return {
        ...preValue,
        city: city.name,
      };
    });
    setSearchCity((preValue) => {
      return {
        ...preValue,
        city: city.name,
      };
    });
    setShowDropdown(false);
    setCities([]);
  };

  return {
    message,
    isLoading,
    handelChangeInputFields,
    cities,
    showDropdown,
    handelSelectCity,
    handelChangePropertyType,
    property,
    handelChangeCity,
    searchCity,
    handpickedFilter,
  };
};

export default useHandpicked;