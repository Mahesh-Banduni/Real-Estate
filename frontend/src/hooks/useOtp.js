import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { handelSetToken } from "../store/slice";
import { useDispatch, useSelector } from "react-redux";
import useRegister from "./useRegister";

const useOtp = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const Phone = useSelector((store) => store?.authReducer?.phoneNumber);
  console.log(Phone);
  const submitForm = async (data) => {
    setMessage("");
    try {
      const response = await axios.post(
        "http://localhost:8080/userauth/verify-otp",
        {
          phoneNumber: `${Phone}`,
          otp: data.otp,
        }
      );
      console.log(response);

      /*if (response?.data?.success) {
        const token = response?.data?.data?.token;
        dispatch(handelSetToken(token));
        alert("User registered Successfully");
        navigate("/");
      }*/

      if (response?.statusText === "OK") {
        //dispatch(handelSetToken(response?.data?.token));
        dispatch(handelSetToken(response?.data?.data?.user));
        localStorage.setItem(
          "token",
          JSON.stringify(response?.data?.data?.token)
        );
        alert("User Signin successfully");
        const redirectPath = location.state?.from || "/";
        navigate(redirectPath);
      }
    } catch (message) {
      console.log(`register form error ${message.message}`);
      setMessage(message.message);
      alert(message.message);
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

export default useOtp;