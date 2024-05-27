import { useState } from "react";
import navbarLogo from "../../assets/navbar.png";
import myself from "../../assets/myself.png";
import resume from "../../assets/resume.pdf";

function Header() {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <nav className="flex items-center justify-between mb-40">
            <img src={navbarLogo} className="logo" alt="Logo" />
            <a href={resume} download className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
              Get my CV
            </a>
          </nav>

          <div className="text-center">
            <div className="flex justify-center mb-16">
              <img src={myself} className="logo rounded-full border-4 border-white object-cover" alt="Image" />
            </div>

            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
              Nazmus Sakib
            </h6>

            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
              Senior Software Engineer
            </h1>

            <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
              I take pleasure in developing strong solutions that simplify life for people.
            </p>

            <a
              href="mailto:takhi44@gmail.com"
              className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
            >
              Hire me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
