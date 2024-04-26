import React from "react";
import SignupView from './SignupView'
import { useForm } from "react-hook-form";

const SignupContainer = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
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
      watch={watch}
    />
  );
};

export default SignupContainer;

