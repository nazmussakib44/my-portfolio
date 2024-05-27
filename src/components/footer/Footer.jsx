import { useState } from "react";
import { Linkedin } from "react-feather";
import { Facebook } from "react-feather";
import { Instagram } from "react-feather";
import { GitHub } from "react-feather";

function Footer() {
  return (
    <>
      <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">
              Testimonial
            </h1>

            <p className="font-normal text-gray-400 text-md md:text-lg mb-20">
              I’m not currently taking on new client work but feel free to
              contact me for any <br /> technical suggestions.
            </p>

            <div className="flex items-center justify-center space-x-8">
              <a
                href="https://www.linkedin.com/in/nazmus-sakib-94518882/"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <Linkedin className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61559572002557"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <Facebook className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500" />
              </a>

              <a
                href="https://www.instagram.com/nazmus_sakib44"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <Instagram className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500" />
              </a>

              <a
                href="https://github.com/nazmussakib44"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <GitHub className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
