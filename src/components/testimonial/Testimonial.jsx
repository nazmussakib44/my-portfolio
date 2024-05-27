import { useState } from "react";

function Testimonial() {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Testimonial
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
            Here are some words from my bosses
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-center">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Sakib, when you win, I win.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                Ashiq Rahman{" "}
                <span className="font-medium text-gray-300 text-sm">
                  - MD at WebAlive
                </span>
              </h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Our young, unstoppable.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                Lincoln Islam{" "}
                <span className="font-medium text-gray-300 text-sm">
                  - Owner at Code Rex
                </span>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
