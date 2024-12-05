import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { handelAddHandPickedProperty } from "../store/slice";
import axiosInstance from "../utils/axiosInstance";

const useLandingPageApi = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const fetchHandPickedProperty = async () => {
    setMessage("");
    setLoading(true);
    try {
      const response = await axiosInstance.get("/handpicked-properties");
      if (response?.statusText) {
        dispatch(handelAddHandPickedProperty(response?.data));
      }
      setLoading(false);
    } catch (message) {
      console.log(`error in hand picked property ${message.message}`);
      setMessage(message.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHandPickedProperty();
  }, []);
  return {
    fetchHandPickedProperty,
    loading,
    message,
  };
};

export default useLandingPageApi;
