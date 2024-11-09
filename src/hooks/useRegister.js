import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { handelSetToken } from "../store/slice";
import { useDispatch } from "react-redux";

const useRegister = () => {
  const dispatch = useDispatch;
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = async (data) => {
    setMessage("");
    console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:8080/users/register",
        data
      );

      if (response?.statusText === "Created") {
        dispatch(handelSetToken(response?.data?.token));
        alert("User Register successfully");
        navigate("/");
      }
    } catch (message) {
      console.log(`register form error ${message.message}`);
      setMessage(message.message);
      alert(message.message);
      reset();
    }
  };

  const minUppercasePattern = /[A-Z]+/;
  const minLowercasePattern = /[a-z]+/;
  const minNumberPattern = /[0-9]+/;
  const minSpecialCharPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  return {
    handleSubmit,
    register,
    submitForm,
    message,
    minUppercasePattern,
    minLowercasePattern,
    minNumberPattern,
    minSpecialCharPattern,
    errors,
  };
};

export default useRegister;