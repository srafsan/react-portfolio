import React from "react";
import "./Header.css";
import CTA from "./CTA.js";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Syed Rafsan Raiyan</h1>
        <h5 className="text-light">React Developer</h5>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
