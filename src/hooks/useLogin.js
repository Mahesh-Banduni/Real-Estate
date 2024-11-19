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
        "http://localhost:8080/userauth/login",
        data
      );
      console.log(response);

      // Extracting data according to the response structure
      const responseData = response?.data?.data;
      const user = responseData?.user;
      //const token = responseData?.token;

      // Logging the user and response data
      console.log(user);
      console.log(responseData);
      if (response?.data?.success) {
        console.log(data);

        dispatch(phoneNumber(data?.phone));
        navigate("/otp");
      }

      // Checking for success instead of relying solely on statusText
      // if (response?.data?.success) {
      //   dispatch(handelSetToken(user));
      //   localStorage.setItem("token", JSON.stringify(token));
      //   alert("User login successfully");
      //   navigate("/");
      // }
      // console.log(response?.data?.data?.user);
      // console.log(response?.data?.data);

      // if (response?.statusText === "OK") {
      //   dispatch(handelSetToken(response?.data?.data?.user));
      //   localStorage.setItem(
      //     "token",
      //     JSON.stringify(response?.data?.data?.token)
      //   );
      //   alert("User login successfully");
      //   navigate("/");
      // }
      // if (response?.statusText === "Created") {
      //   console.log(data);

      //   dispatch(phoneNumber(data?.phone));
      //   navigate("/otp");
      // }
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
