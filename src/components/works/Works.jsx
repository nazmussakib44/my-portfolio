const projects = [
  {
    id: "01",
    title: "Exsited",
    subtitle: "Microservice-Based Operations Platform",
    description:
      "A scalable operations platform built with Java Spring, Python, and Vue.js, designed to connect business systems, automate workflows, and support features like branded PDF generation, audit-ready processes, and interactive business tools.",
    image: "1.webp",
    tech: [
      "Java Spring",
      "Python",
      "Django",
      "Stripe",
      "PayPal",
      "Vue.js",
      "Microservices",
    ],
    live: "https://exsited.com/",
    github: "",
  },
  {
    id: "02",
    title: "EventBookings",
    subtitle: "Event Ticketing and Reserved Seating Platform",
    description:
      "A scalable event ticketing platform developed with PHP Laravel, React.js, and AWS S3, featuring reserved seating, registration workflows, and IdentityServer-based authentication for secure access across services.",
    image: "2.webp",
    tech: ["PHP Laravel", "React.js", "AWS S3", "IdentityServer"],
    live: "https://eventbookings.com/",
    github: "",
  },
  {
    id: "03",
    title: "Email Template & PDF Invoice Builder",
    subtitle: "Exsited Platform",
    description:
      "A template builder developed with Vue.js, Vuex, Draggable.js, and OpenAI API for creating custom email templates and PDF invoices, supporting configurable layouts, dynamic content, and workflow-driven document generation inside the Exsited platform.",
    image: "3.webp",
    tech: ["Vue.js", "Vuex", "Draggable.js", "OpenAI API"],
    live: "https://exsited.com/",
    github: "",
  },
  {
    id: "04",
    title: "Seating Allocation Builder",
    subtitle: "EventBookings Platform",
    description:
      "A custom seating allocation builder built with React.js, Redux, Konva.js, and React Draggable to help event organizers design seating plans, assign ticket categories, and provide attendees with an interactive seat selection experience.",
    image: "4.webp",
    tech: ["React.js", "Redux", "Konva.js", "React Draggable"],
    live: "https://eventbookings.com/",
    github: "",
  },
  {
    id: "05",
    title: "Traffic Sign Detection and Recognition",
    subtitle: "Computer Vision System with OpenCV and Random Forest",
    description:
      "A traffic sign detection and recognition system developed with Python, OpenCV, Pandas, and Matplotlib, using Mean Shift clustering for localization and a Random Forest classifier for sign recognition from moving vehicle imagery.",
    image: "5.webp",
    tech: [
      "Python",
      "OpenCV",
      "Pandas",
      "Matplotlib",
      "Mean Shift",
      "Random Forest",
    ],
    live: "https://www.youtube.com/watch?v=kktKTlVDicA",
    github: "",
  },
  {
    id: "06",
    title: "Voice Clone Service Back-End",
    subtitle: "FastAPI Service with OAuth 2.0 Authentication",
    description:
      "A Python FastAPI backend built for voice cloning workflows with OAuth 2.0 authentication, integrating Resemble AI for voice generation and supporting techniques such as speaker encoding, speaker adaptation, and neural speech synthesis.",
    image: "no.webp",
    tech: ["Python", "FastAPI", "OAuth 2.0", "Resemble AI"],
    live: "",
    github: "",
  },
  {
    id: "07",
    title: "AWS Rekognition Real-Time Face Detection",
    subtitle: "Attendance and Live Event Gallery System",
    description:
      "A Python Django-based system built with AWS Rekognition API and AWS S3 to detect faces from live event video, support attendance tracking, and generate dynamic photo galleries from captured media.",
    image: "no.webp",
    tech: ["Python", "Django", "AWS Rekognition", "AWS S3"],
    live: "",
    github: "",
  },
  {
    id: "08",
    title: "CodeRex",
    subtitle: "Headless WordPress Site with Next.js and GraphQL",
    description:
      "A modern headless WordPress website developed with Next.js and GraphQL, combining WordPress content management with a performant frontend architecture for flexible page rendering and scalable content delivery.",
    image: "8.webp",
    tech: ["Next.js", "WordPress", "GraphQL", "WPGraphQL"],
    live: "https://coderex.co/",
    github: "",
  },
  {
    id: "09",
    title: "WordPress Media Storage to Cloud",
    subtitle: "Cloud Media Offload Plugin for WordPress",
    description:
      "A WordPress plugin developed with PHP and TypeScript to offload media files to cloud storage providers such as Amazon S3 and Google Cloud Storage, with authenticated provider integration and cloud-based media delivery.",
    image: "6.webp",
    tech: ["PHP", "TypeScript", "AWS S3 SDK", "Google Cloud Storage SDK"],
    live: "",
    github: "",
  },
  {
    id: "10",
    title: "WP VR 360 Panorama and Virtual Tour Creator",
    subtitle: "Interactive Virtual Tour Plugin for WordPress",
    description:
      "A WordPress virtual tour plugin developed with TypeScript, Pannellum, Video.js, and PHP, enabling clients to explore 360 images and videos with interactive hotspots, custom hotspot controls, and immersive tour experiences.",
    image: "7.webp",
    tech: ["TypeScript", "Pannellum", "Video.js", "PHP", "WordPress"],
    live: "https://wordpress.org/plugins/wpvr/",
    github: "",
  },
];

function Works() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mb-12">
          <div className="lg:max-w-xs">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Projects
            </h1>

            <p className="font-normal text-gray-500 text-xs md:text-base">
              Behold my most significant <br /> and cherished professional
              works.
            </p>
          </div>

          <div className="flex-1">
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm">
                        {project.id}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <h2 className="font-medium text-gray-700 text-xl md:text-2xl leading-snug mb-2">
                      {project.title}
                    </h2>

                    <p className="font-normal text-gray-400 text-sm md:text-base mb-4">
                      {project.subtitle}
                    </p>

                    <p className="font-normal text-gray-500 text-sm md:text-base leading-7">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-5">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-gray-500 transition-colors border-b border-gray-300 pb-1 hover:text-gray-700 hover:border-gray-700"
                        >
                          Live
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-gray-500 transition-colors border-b border-gray-300 pb-1 hover:text-gray-700 hover:border-gray-700 hover:text-gray-700"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
