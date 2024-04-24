import React from "react";
import Form from "../../../components/form";
import Header from "../../../components/Header/";
import Footer from "../../../components/Footer";

import {
  validateRequiredField,
} from "../../../utils/formValidations";

import {
  ContainerFluid,
  StyledAddUserSectionContainer,
  StyledButton,
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
              </StyledWrapper>
              <StyledButton type="primary" htmlType="submit">
                Submit
              </StyledButton>
            </StyledAddUserSectionContainer>
          </Form>
        </StyledFormContainer>
      </ContainerFluid>
      <Footer />
    </div>
  );
};

export default LoginView;
