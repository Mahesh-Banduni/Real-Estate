import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { phoneNumber } from "../store/slice";
import { useDispatch } from "react-redux";
import { handelSetToken } from "../store/slice";

const useRegister = () => {
  const dispatch = useDispatch();
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
      console.log(response);

      // if (response?.statusText === "Created") {
      //   console.log(data);

      //   //dispatch(phoneNumber(data?.phone));
      //   navigate("/");
      // }
      if (response?.statusText === "Created") {
        // dispatch(handelSetToken(response?.data?.data?.user));
        // localStorage.setItem(
        //   "token",
        //   JSON.stringify(response?.data?.data?.token)
        // );
        dispatch(phoneNumber(data?.phone));
        alert("User Register successfully");
        navigate("/otp");
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
