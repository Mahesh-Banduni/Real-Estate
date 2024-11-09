import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";

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
        "http://localhost:8080/users/login",
        data
      );
      console.log(response);

      if (response?.statusText === "OK") {
        dispatch(handelSetToken(response?.data?.data?.token));
        localStorage.setItem("token", response?.data?.data?.token);
        alert("User login successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error?.status === 400) {
        alert(error?.response?.data?.error);
      }
      // reset();
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