import React from "react";
import { Form, Button } from "../../../components";
import Header from "../../../components/Header/";
import Footer from "../../../components/Footer";

import {
  validateRequiredField,
} from "../../../utils/formValidations";

import {
  ContainerFluid,
  StyledAddUserSectionContainer,
  StyledInputWrapper,
  StyledTitle,
  StyledWrapper,
  StyledFormContainer,
} from "../Authentication.styled";

const LoginView = ({ onLoginSubmit, control, errors }) => {

  return (
    <div>
      <Header />
      <ContainerFluid>
        <StyledFormContainer>
          <Form onSubmit={onLoginSubmit}>
            <StyledAddUserSectionContainer>
              <StyledTitle>Login</StyledTitle>
              <StyledWrapper>
                <StyledInputWrapper>
                  <Form.Label
                    label="Email Address"
                    margin="0 0 10px 0"
                    fill="#828282"
                  />
                  <Form.Input
                    control={control}
                    errors={errors}
                    name="email"
                    type="Input"
                    placeholder="Enter Email Address"
                    size="medium"
                    rules={{
                      validate: {
                        required: validateRequiredField("Email Address"),
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
              </StyledWrapper>
              <Button text="Login"/>
            </StyledAddUserSectionContainer>
          </Form>
        </StyledFormContainer>
      </ContainerFluid>
      <Footer />
    </div>
  );
};

export default LoginView;
