import { useState } from "react";
import { Activity } from "react-feather";
import { Codesandbox } from "react-feather";
import { Coffee } from "react-feather";

function Overview() {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <Activity />
              </div>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                High experience
              </h4>
              <p className="font-normal text-gray-500 text-md">
                An experienced developer who always focuses on quality development. 
              </p>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <Codesandbox />
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Reliability
              </h4>

              <p className="font-normal text-gray-500 text-md">
                The delivery always meets expectations on time. 
              </p>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <Coffee />
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Success
              </h4>

              <p className="font-normal text-gray-500 text-md">
                Success entails not just flawless delivery, but also delighted end users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
