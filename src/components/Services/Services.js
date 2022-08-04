import React from "react";
import "./Services.css";
// import { BiCheck } from 'react-icons/bi'
import { services } from "../Data/data";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map(({ icon, title, desc }) => (
          <div className="box" data-aos="flip-left">
            <i>{icon}</i>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
