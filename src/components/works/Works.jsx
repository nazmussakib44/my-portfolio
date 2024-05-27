import { useState } from "react";

function Works() {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-0">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                Projects
              </h1>

              <p className="font-normal text-gray-500 text-xs md:text-base">
                Behold my most significant <br /> and cherished professional
                works.
              </p>
            </div>

            <div className="space-y-24">
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  01
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Traffic Sign Detection and Recognition <br />
                    using Mean Shift and Hog Descriptor <br /> (Python OpenCV)
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    A system to detect and recognize road signs from a moving vehicle.
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  02
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Seating allocation builder <br /> for Event Booking system
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    A complete builder where the event admin will draw tables
                    and seats and <br />
                    allocate categories. Attendees will pick seats based on
                    given categories.
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  03
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Email template & pdf invoice <br />
                    builder for Exsited app
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Exsited app supports designing email templates with this
                    drag-and-drop <br />
                    builder. This app also contains the feature to auto-generate
                    design <br />
                    through OpenAI API by asking basic questions.
                  </p>
                </div>
              </div>
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  04
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Voice clone app backend <br /> (Python Fast API, OAuth2, <br />
                    Middleware, OpenAPI for <br /> Swagger UI)
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    It was developed with Resemble AI integration to clone voices through AI <br />
                    for the university app.
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  05
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    AWS Rekognition real-time <br /> face detection from live stream
                    <br /> video (AWS rekognition <br /> Python SDK)
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    A system to detect and recognize student's attendance in <br />
                    university events and create a dynamic gallery.
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  06
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    WordPress Media Storage to Cloud <br /> for Amazon S3, <br /> Google
                    Cloud Storage, <br /> DigitalOcean and More
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    This plugin will help back up or host site media and assets through <br />
                    provided cloud storage services through the complete authentication <br />
                    process. 
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  07
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    WP VR 360 panorama and virtual <br /> tour creator for
                    WordPress
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    This plugin will help developers create <br /> virtual tours for their website.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Works;
