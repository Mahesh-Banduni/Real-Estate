import axiosInstance from "../utils/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import { handelFetchRecommendedProperty } from "../store/slice";
import { useDispatch } from "react-redux";
import axios from "axios";

const useRecommended = () => {
  const dispatch = useDispatch();
  const [recommendedProperties, setRecommendedProperties] = useState([]);
  const [property, setProperty] = useState("Sale");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedFilter, setRecommendedFilter] = useState({
    propertyPurpose: "",
    propertyType: "",
    city: "",
  });
  const [searchCity, setSearchCity] = useState({
    city: "",
  });
  const [cities, setCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(true);

  const handelChangePropertyType = (name) => {
    setProperty(name);
  };

  //--------------------------change input field----------------------
  const handelChangeInputFields = (event) => {
    const { name, value } = event.target;
    setRecommendedFilter((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  // -----------------------fetch recommended properties ----------------
  const fetchProperties = useCallback(async () => {
    setMessage("");
    try {
      setIsLoading(true);
      let response = await axiosInstance.get(
        `http://localhost:8080/recommended-properties?propertyPurpose=${recommendedFilter.propertyPurpose}&propertyType=${recommendedFilter.propertyType}&city=${recommendedFilter.city}`
      );

      if (response?.statusText === "OK") {
        setRecommendedProperties(response?.data?.data);
        dispatch(handelFetchRecommendedProperty(response?.data?.data));
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      if (error.status === 404) {
        setMessage(error?.response?.data?.error);
      }
    }
  }, [recommendedFilter]);

  useEffect(() => {
    fetchProperties();
  }, [recommendedFilter]);

  // -----------------throttling functionality on cites search-------------------------------

  const handelSearchCity = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/cities-localities?city=${searchCity.city}`
      );

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
    setRecommendedFilter((preValue) => {
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
    recommendedProperties,
    message,
    isLoading,
    handelChangeInputFields,
    cities,
    showDropdown,
    handelSelectCity,
    recommendedFilter,
    handelChangePropertyType,
    property,
    handelChangeCity,
    searchCity,
  };
};

export default useRecommended;
