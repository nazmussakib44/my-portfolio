import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Skills from "./components/skills/Skills.jsx";
import Overview from "./components/overview/Overview.jsx";
import Works from "./components/works/Works.jsx";
import Education from "./components/education/Education.jsx";
import Mysite from "./components/mysite/Mysite.jsx";
import Experience from "./components/experience/Experience.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Footer from "./components/footer/Footer.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Overview />
      <Works />
      <Education />
      <Mysite />
      <Experience />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
