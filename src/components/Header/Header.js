import React from "react";
import { HeaderStyle } from "./Header.styled";
import AppLogo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div>
      <HeaderStyle>
        <a href="https://www.sdsu.edu/">
          <img
            src="https://ou-resources.sdsu.edu/images/_sdsu/logo-2022/logo.png"
            alt="San Diego State University"
            height="40"
            width="176"
          />
        </a>

        <img src={AppLogo} alt="logo" height="50" />
      </HeaderStyle>
    </div>
  );
};

export default Header;
