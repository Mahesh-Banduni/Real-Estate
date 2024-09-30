import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";

import { handelAddHandPickedProperty } from "../store/slice";

const useLandingPageApi = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const fetchHandPickedProperty = async () => {
    setMessage("");
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8080/handpicked-properties"
      );
      console.log(response);
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
