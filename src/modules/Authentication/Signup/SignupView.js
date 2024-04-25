import React from "react";
import {Form,Button} from "../../../components";
import Header from "../../../components/Header/";
import Footer from "../../../components/Footer";
import {
  ContainerFluid,
  StyledAddUserSectionContainer,
  StyledInputWrapper,
  StyledTitle,
  StyledWrapper,
  StyledFormContainer,
} from "../Authentication.styled";
import { validateRequiredField } from "../../../utils/formValidations";

const SignupView = ({ onSignupSubmit, control, errors }) => {
  return (
    <div>
      <Header />
      <ContainerFluid>
        <StyledFormContainer>
          <Form onSubmit={onSignupSubmit}>
            <StyledAddUserSectionContainer>
              <StyledTitle>Signup</StyledTitle>
              <StyledWrapper>
                <StyledInputWrapper>
                  <Form.Label
                    label="User Name"
                    margin="0 0 10px 0"
                    fill="#828282"
                  />
                  <Form.Input
                    control={control}
                    errors={errors}
                    name="userName"
                    type="Input"
                    placeholder="Enter User Name"
                    size="medium"
                    rules={{
                      validate: {
                        required: validateRequiredField("User Name"),
                      },
                    }}
                  />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <Form.Label
                    label="Password"
                    margin="0 0 10px 0"
                    fill="#828282"
                  />
                  <Form.Input
                    control={control}
                    errors={errors}
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    size="medium"
                    rules={{
                      validate: {
                        required: validateRequiredField("Password"),
                      },
                    }}
                  />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <Form.Label
                    label="Confirm Password"
                    margin="0 0 10px 0"
                    fill="#828282"
                  />
                  <Form.Input
                    control={control}
                    errors={errors}
                    name="confirmPassword"
                    type="password"
                    placeholder="Enter Password"
                    size="medium"
                    rules={{
                      validate: {
                        required: validateRequiredField("Password"),
                      },
                    }}
                  />
                </StyledInputWrapper>
              </StyledWrapper>
              <Button text="Signup"/>
            </StyledAddUserSectionContainer>
          </Form>
        </StyledFormContainer>
      </ContainerFluid>
      <Footer />
    </div>
  );
};

export default SignupView;

