import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { phoneNumber } from "../store/slice";

import { handelSetToken } from "../store/slice";
import axiosInstance from "../utils/axiosInstance";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const submitForm = async (data) => {
    try {
      const response = await axiosInstance.post("/userauth/login", data);

      if (response?.statusText === "OK") {
        alert("OTP sent successfully. Please check you email");
        navigate("/otp");
      }
    } catch (error) {
      console.log(error);
      if (error?.status === 400) {
        alert(error?.response?.data?.error);
      }
      if (error?.status === 404) {
        alert(error?.response?.data?.error);
      }
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
    watch,
  };
};

export default useLogin;
