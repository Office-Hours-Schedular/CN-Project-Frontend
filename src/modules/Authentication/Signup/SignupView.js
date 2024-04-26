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
                    label="First Name"
                    margin="0 0 10px 0"
                    fill="#828282"
                  />
                  <Form.Input
                    control={control}
                    errors={errors}
                    name="firstName"
                    type="Input"
                    placeholder="Enter First Name"
                    size="medium"
                    rules={{
                      validate: {
                        required: validateRequiredField("First Name"),
                      },
                    }}
                  />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <Form.Label
                    label="Last Name"
                    margin="0 0 10px 0"
                    fill="#828282"
                  />
                  <Form.Input
                    control={control}
                    errors={errors}
                    name="lastName"
                    type="Input"
                    placeholder="Enter Last Name"
                    size="medium"
                    rules={{
                      validate: {
                        required: validateRequiredField("Last Name"),
                      },
                    }}
                  />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <Form.Label
                    label="Email"
                    margin="0 0 10px 0"
                    fill="#828282"
                  />
                  <Form.Input
                    control={control}
                    errors={errors}
                    name="email"
                    type="Input"
                    placeholder="Enter Email"
                    size="medium"
                    rules={{
                      validate: {
                        required: validateRequiredField("Email"),
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

