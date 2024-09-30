import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useSalePropertyForm = () => {
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = async (data) => {
    setFormErrorMessage("");
    try {
      const response = await axios.get(
        `http://localhost:8080/search-properties/Sale?propertyType=${data.propertyType}&city=${data.city}`,
        data
      );
      console.log(response);

      if (response.data?.isSuccess) {
      } else if (!response.data?.isSuccess) {
        alert(`${response.data?.message}`);
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
