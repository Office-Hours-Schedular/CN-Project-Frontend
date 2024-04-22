import React from "react";
import { FooterStyle } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyle>
      <div class="footer__info-block">
        <div class="copyryght-block">
          <span class="copyright">© 2024 San Diego State University</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
