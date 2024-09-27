import { useState } from "react";
// import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
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
    setMessage("");
    try {
      const response = await axios.post(
        "http://192.168.0.130/questions/api/Auth/Register",
        data
      );
      console.log(response);

      //  if (response.data?.isSuccess) {

      //    localStorage.setItem("token", JSON.stringify(response?.data?.data));
      //    navigate("/");
      //  } else if (!response.data?.isSuccess) {
      //    alert(`${response.data?.message}`);
      //    navigate("/login");
      //  }
    } catch (message) {
      console.log(`register form error ${message.message}`);
      setMessage(message.message);
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
    watch,
  };
};

export default useRegister;
