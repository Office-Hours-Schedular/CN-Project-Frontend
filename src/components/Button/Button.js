import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({text}) => {
    return (
      <StyledButton type="primary" htmlType="submit">
        {text}
      </StyledButton>
    );
};

export default Button;


