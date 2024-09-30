import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useContact = () => {
  const [message, setMessage] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = async (data) => {
    setMessage("");
    try {
      const response = await axios.post(
        "http://localhost:8080/contact-forms",
        data
      );

      if (response?.statusText === "Created") {
        alert(`Your contact form is submitted out team will connect you soon`);
        reset();
      } else if (!response.data?.isSuccess) {
        alert(`${response.data?.message}`);
        navigate("/login");
      }
    } catch (message) {
      console.log(`register form error ${message.message}`);
      setMessage(message.message);
      reset();
    }
  };

  return {
    handleSubmit,
    register,
    submitForm,
    message,
    errors,
  };
};

export default useContact;
