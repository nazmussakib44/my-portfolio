import { useEffect, useState } from "react";

const experiences = [
  {
    period: "2024 - 2026",
    company: "Laurentian University",
    location: "Sudbury, Ontario",
    role: "M.Sc. in Computational Science",
    description:
      "Developed advanced knowledge in computational modeling, scientific computing, data analysis, and algorithm design through graduate-level study and research.",
  },
  {
    period: "2023 - 2024",
    company: "WebAlive",
    location: "Melbourne, Australia",
    role: "Senior Software Engineer",
    description:
      "Worked on web applications from planning to delivery, contributing to architecture, feature development, and technical decisions using PHP, Python, JavaScript, React, and Vue while collaborating with designers, developers, and stakeholders.",
  },
  {
    period: "2021 - 2023",
    company: "Bit Mascot",
    location: "Dhaka, Bangladesh",
    role: "Software Engineer",
    description:
      "Developed and enhanced web-based software systems with a focus on clean architecture, maintainability, performance, debugging, testing, and deployment support across multiple projects.",
  },
  {
    period: "2017 - 2021",
    company: "CodeRex",
    location: "Dhaka, Bangladesh",
    role: "Junior Software Engineer",
    description:
      "Developed custom WordPress plugins, themes, Shopify features, and third-party cloud integrations while maintaining and extending client products based on business and project requirements.",
  },
  {
    period: "2014 - 2017",
    company: "Brac University",
    location: "Dhaka",
    role: "B.Sc. in Computer Science & Engineering",
    description:
      "Gained foundational knowledge in software engineering, data structures, algorithms, database systems, and computer architecture through undergraduate study.",
  },
];

function Experience() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          My Timeline
        </h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-12 md:mb-16 max-w-2xl">
           A journey through my education, professional experience, and the milestones that have shaped my path.
        </p>

        <div className="relative ml-2 md:ml-4">
          <div className="absolute left-0 top-0 h-full w-px bg-gray-300"></div>

          <div className="space-y-6 md:space-y-7">
            {experiences.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <article
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`relative pl-8 md:pl-10 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                >
                  <span
                    className={`absolute left-[-7px] top-6 h-3.5 w-3.5 rounded-full border-2 transition-all duration-500 ease-out ${
                      isActive
                        ? "bg-gray-700 border-gray-700 scale-110 shadow-[0_0_0_8px_rgba(55,65,81,0.08)]"
                        : "bg-white border-gray-400 scale-100"
                    }`}
                  ></span>

                  <div
                    className={`rounded-2xl border p-5 md:p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? "bg-white border-gray-300 translate-x-2 shadow-[0_14px_34px_rgba(17,24,39,0.065)]"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <p className="text-sm text-gray-400 mb-2">{item.period}</p>

                    <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                      {item.role}
                    </h3>

                    <p className="text-sm md:text-base text-gray-500 mt-1">
                      {item.company}
                      <span className="text-gray-300"> / {item.location}</span>
                    </p>

                    <p className="mt-4 text-sm md:text-base text-gray-600 leading-7 max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
