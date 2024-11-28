import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";

import { phoneNumber } from "../store/slice";

import { handelSetToken } from "../store/slice";

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
      const response = await axios.post(
        "http://localhost:8080/userauth/login",
        //data
        {
          phoneNumber: data.phone,
          password: data.password,
        }
      );

      if (response?.statusText === "OK") {
        dispatch(phoneNumber(data?.phone));
        navigate("/otp");
      }
    } catch (error) {
      console.log(error);
      if (error?.status === 400) {
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
