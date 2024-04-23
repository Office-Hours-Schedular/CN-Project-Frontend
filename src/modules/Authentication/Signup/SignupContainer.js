import React from "react";
import SignupView from './SignupView'
import { useForm } from "react-hook-form";

const SignupContainer = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const handleSignupSubmit = (formdata) => {
    console.log(formdata);
    //api call
  };
  return (
    <SignupView
      onSignupSubmit={handleSubmit(handleSignupSubmit)}
      control={control}
      errors={errors}
    />
  );
};

export default SignupContainer;

