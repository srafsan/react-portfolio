import React from "react";
import Header from "./components/Header/Header.js";
import Nav from "./components/Nav/Nav.js";
import About from "./components/About/About.js";
import Experience from "./components/Experience/Experience.js";
import Services from "./components/Services/Services.js";
import Portfolio from "./components/Portfolio/Portfolio.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
