import { useState } from "react";

function Mysite() {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-10 md:mb-10 lg:mb-10">
              About This Website
            </h1>

            <p className="font-medium text-gray-700 text-xs md:text-base">
              In my extensive experience, I have utilized Laravel or Django for back-end projects and Vue.js or React.js for front-end projects. <br />
              This website is created and developed using React, Tailwind CSS, Framer Motion, and Magic UI.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mysite;
