import { useState } from "react";

function Education() {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Education
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
            Below is a summary of the places where I studied.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2013 – 2017
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Completed my graduation from Brac University in Computer Science & Engineering.
              </p>

            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                2010 – 2012
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Received my Higher Secondary Certificate from Ashuganj Fertilizer School & College.  
              </p>

            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Training 
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                Agile hands-on with scrum practiced - BITM 
              </p>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
