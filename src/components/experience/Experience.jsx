import { useEffect, useState } from "react";

const experiences = [
  {
    period: "2024 - Present",
    company: "Code Rex",
    location: "Dhaka",
    role: "Innovation Engineer",
    description:
      "Driving product innovation, building scalable web solutions, and collaborating with teams to improve user experience and technical delivery.",
  },
  {
    period: "2023",
    company: "WebAlive",
    location: "Melbourne",
    role: "Senior Software Engineer",
    description:
      "Built responsive interfaces, improved reusable components, and delivered polished client-facing features across modern web applications.",
  },
  {
    period: "2021",
    company: "Bit Mascot",
    location: "Dhaka",
    role: "Software Engineer",
    description:
      "Worked on scalable features, production fixes, and cross-functional development to support stable product releases.",
  },
  {
    period: "2019",
    company: "Code Rex",
    location: "Dhaka",
    role: "Software Engineer",
    description:
      "Contributed to frontend and backend development, helped ship product improvements, and supported core engineering work.",
  },
  {
    period: "2017",
    company: "Code Rex",
    location: "Dhaka",
    role: "Junior Software Developer",
    description:
      "Started my professional journey by supporting feature development, fixing issues, and learning team-based software delivery.",
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
          Experience
        </h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-12 md:mb-16 max-w-2xl">
          A timeline of the places where I worked and the roles I held.
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