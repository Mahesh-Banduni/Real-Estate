import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { handelSetToken } from "../store/slice";
import { useDispatch, useSelector } from "react-redux";
import useRegister from "./useRegister";
import axiosInstance from "../utils/axiosInstance";

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

  const submitForm = async (data) => {
    setMessage("");
    try {
      const response = await axiosInstance.post("/userauth/verify-otp", data);

      if (response?.data?.data?.response?.success === true) {
        const forgot = localStorage.getItem("forgot");
        if (forgot) {
          localStorage.setItem(
            "token",
            JSON.stringify(response?.data?.data?.token)
          );
          alert("OTP verify Successfully");
          navigate("/confirm");
        } else {
          dispatch(handelSetToken(response?.data?.data?.user));
          localStorage.setItem(
            "token",
            JSON.stringify(response?.data?.data?.token)
          );
          localStorage.setItem(
            "realEstateUser",
            JSON.stringify({
              name: response?.data?.data?.user?.name,
              email: response?.data?.data?.user?.email,
              password: response?.data?.data?.user?.password,
              id: response?.data?.data?.user?._id,
            })
          );
          alert("User Signin successfully");
          navigate("/");
          window.location.reload();
        }
      } else if (response?.data.data.response.success === false) {
        alert(response?.data?.data?.response?.message);
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
