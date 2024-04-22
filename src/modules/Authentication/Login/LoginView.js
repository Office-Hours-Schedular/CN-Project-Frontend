import React from "react";
import Form from "../../../components/form";
import Header from "../../../components/Header/";
import Footer from "../../../components/Footer";

import {
  validateRequiredField,
  isMobileNumber,
  isOnlyNumbers,
} from "../../../utils/formValidations";

import { CardTitle, ContainerFluid } from "../Authentication.styled";

const LoginView = () => {
  return (
    <div>
      <Header />
      <ContainerFluid>
        {/* <div class="login-container">
          <div class="card">
            <div class="card-body">
              <Form>
                <CardTitle>
                  <p>Office Hours Scheduler Login</p>
                </CardTitle>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" id="username" />
                </div>
                <div class="form-group">
                  <label for="passwordField">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="passwordField"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div> */}
      </ContainerFluid>
      <Footer />
    </div>
  );
};

export default LoginView;
