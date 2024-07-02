import { useState } from "react";
import Snowfall from "react-snowfall";
import AnimatedCursor from "react-animated-cursor";
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
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="128, 128, 128"
        outerAlpha={0}
        innerScale={0.7}
        outerScale={2}
        outerStyle={{
          border: "2px solid grey",
        }}
        innerStyle={{
          backgroundColor: "rgba(128, 128, 128, 1)",
          borderRadius: "50%",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Snowfall
        color="grey"
        snowflakeCount={50}
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
