import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { handleFetchAllSearchProperties } from "../store/slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const useSalePropertyForm = () => {
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLoading, setFormLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = async (filters) => {
    setFormErrorMessage("");
    try {
      const response = await axios.get(
        `http://localhost:8080/search-properties?propertyPurpose=Sale&propertyType=${filters.propertyType}&city=${filters.city}`,
        data
      );

      if (response.statusText === "OK") {
        dispatch(handleFetchAllSearchProperties(response?.data?.data));
        navigate("/properties");
      }
    } catch (message) {
      console.log(`register form error ${message.message}`);
      setFormErrorMessage(message.message);
    }
  };
  return {
    submitForm,
    formLoading,
    formErrorMessage,
    handleSubmit,
    register,
    errors,
  };
};

export default useSalePropertyForm;
