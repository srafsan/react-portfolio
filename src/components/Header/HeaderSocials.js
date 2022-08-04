import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/syed-rafsan-raiyan-71138b227/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/srafsan" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100010136431166"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
