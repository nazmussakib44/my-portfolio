import { useState } from "react";

function Mysite() {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-20 md:mb-32 lg:mb-48">
              Please do not measure your skills in <br /> percentages!
            </h1>

            <p className="font-medium text-gray-700 text-xs md:text-base">
              In my many years of experience, I use @laravel for backend
              projects and @vuejs for <br /> front-end projects. I’m an avid
              programmer, so I create designs based on the <br /> weekend
              @figmadesign.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mysite;
