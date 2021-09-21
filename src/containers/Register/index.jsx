import React, { useEffect } from "react";
import RegisterUI from "../../layout/Register";
import useForm from "./useForm";

const RegisterComponent = () => {
  useEffect(() => {}, []);

  return <RegisterUI form={useForm()} />;
};

export default RegisterComponent;
