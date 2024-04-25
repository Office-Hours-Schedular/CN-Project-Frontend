import React from "react";
import LoginView from './LoginView'
import { useForm } from "react-hook-form";

const LoginContainer = () => {

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();


  const handleLoginSubmit = (formdata) => {
     console.log(formdata);
    //api call
  };
  return (
    <LoginView
      onLoginSubmit={handleSubmit(handleLoginSubmit)}
      errors={errors}
      control={control}
    />
  );
};

export default LoginContainer;

