import axios from "axios";
import { useEffect, useState } from "react";
import { handelFetchAllProperties } from "../store/slice";
import { useDispatch } from "react-redux";

const useProperties = () => {
  const dispatch = useDispatch();
  const [property, setProperty] = useState("Sale");
  const [allProperty, setAllProperty] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handelChangePropertyType = (name) => {
    setProperty(name);
  };

  const fetchProperty = async () => {
    setMessage("");
    try {
      setIsLoading(true);
      let response = await axios.get(
        `http://localhost:8080/search-properties?propertyPurpose=${property}`
      );
      if (response.statusText === "OK") {
        setAllProperty(response?.data?.data);
        dispatch(handelFetchAllProperties(response?.data?.data));
      }
      setIsLoading(false);
      console.log(response);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchProperty();
  }, [property]);
  return {
    handelChangePropertyType,
    property,
    isLoading,
    allProperty,
  };
};

export default useProperties;
