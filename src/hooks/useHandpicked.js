import axios from "axios";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const useHandpicked = () => {
  const [handpickedProperties, setHandpickedProperties] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [handpickedFilter, setHandpickedFilter] = useState({
    propertyPurpose: "",
    propertyType: "",
    city: "",
  });

  const fetchProperties = async () => {
    setMessage("");
    try {
      setIsLoading(true);
      let response = await axiosInstance.get(
        `http://localhost:8080/handpicked-properties?propertyPurpose=${handpickedFilter.propertyPurpose}&propertyType=${handpickedFilter.propertyType}&city=${handpickedFilter.city}`
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
    handpickedProperties,
    message,
    isLoading,
  };
};

export default useHandpicked;
