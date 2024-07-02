import { useState } from "react";
import Snowfall from "react-snowfall";
import Header from "./components/header/Header.jsx";
import Skills from "./components/skills/Skills.jsx";
import Overview from "./components/overview/Overview.jsx";
import Works from "./components/works/Works.jsx";
import Education from "./components/education/Education.jsx";
import Mysite from "./components/mysite/Mysite.jsx";
import Experience from "./components/experience/Experience.jsx";
import Album from "./components/album/Album.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Footer from "./components/footer/Footer.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Snowfall
        color="red"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
      <Header />
      <Skills />
      <Overview />
      <Works />
      <Education />
      <Mysite />
      <Experience />
      <Album />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
