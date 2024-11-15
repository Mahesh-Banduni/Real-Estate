import axios from "axios";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const useRecommended = () => {
  const [recommendedProperties, setRecommendedProperties] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedFilter, setRecommendedFilter] = useState({
    propertyPurpose: "",
    propertyType: "",
    city: "",
  });

  const fetchProperties = async () => {
    setMessage("");
    try {
      setIsLoading(true);
      let response = await axiosInstance.get(
        `http://localhost:8080/recommended-properties?propertyPurpose=${recommendedFilter.propertyPurpose}&propertyType=${recommendedFilter.propertyType}&city=${recommendedFilter.city}`
      );
      console.log(response);
      if (response?.statusText === "OK") {
        setRecommendedProperties(response?.data?.data);
        // dispatch(handelFetchAllProperties(response?.data?.data));
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
  }, [recommendedFilter]);

  return {
    recommendedProperties,
    message,
    isLoading,
  };
};

export default useRecommended;
