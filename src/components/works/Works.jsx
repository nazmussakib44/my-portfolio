const projects = [
  {
    id: "01",
    title: "Traffic Sign Detection and Recognition",
    subtitle: "Using Mean Shift and Hog Descriptor (Python OpenCV)",
    description:
      "A system to detect and recognize road signs from a moving vehicle.",
    image: "1.webp",
    tech: ["Python", "OpenCV", "Computer Vision"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project-1",
  },
  {
    id: "02",
    title: "Seating Allocation Builder",
    subtitle: "For Event Bookings App",
    description:
      "A complete builder where event admins draw tables and seats with categories, and attendees pick seats based on those categories.",
    image: "2.webp",
    tech: ["React", "JavaScript", "UI Builder"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project-2",
  },
  {
    id: "03",
    title: "Email Template & PDF Invoice Builder",
    subtitle: "For Existing App",
    description:
      "A drag-and-drop builder for email templates and PDF invoices with AI-assisted design generation through the OpenAI API.",
    image: "3.webp",
    tech: ["React", "OpenAI API", "Drag & Drop"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project-3",
  },
  {
    id: "04",
    title: "Voice Clone Service Back-End",
    subtitle: "FastAPI, OAuth2, Middleware, Swagger UI",
    description:
      "A backend integration service using Resemble AI to clone voices through AI-powered workflows.",
    image: "4.webp",
    tech: ["Python", "FastAPI", "OAuth2"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project-4",
  },
  {
    id: "05",
    title: "AWS Rekognition Real-Time Face Detection",
    subtitle: "From Live Stream Video",
    description:
      "A system to detect student attendance in university events and generate a dynamic gallery from live video streams.",
    image: "5.webp",
    tech: ["AWS", "Python", "Rekognition"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project-5",
  },
  {
    id: "06",
    title: "WordPress Media Storage to Cloud",
    subtitle: "Amazon S3, GCS, DigitalOcean and More",
    description:
      "A plugin to back up and host WordPress media through cloud storage providers with full authentication support.",
    image: "6.webp",
    tech: ["WordPress", "PHP", "Cloud Storage"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project-6",
  },
  {
    id: "07",
    title: "WP VR 360 Panorama and Virtual Tour Creator",
    subtitle: "For WordPress",
    description:
      "A WordPress plugin that helps users create immersive virtual tours for showcasing their business.",
    image: "7.webp",
    tech: ["WordPress", "PHP", "Virtual Tour"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project-7",
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
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                      >
                        Live Demo
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-700"
                      >
                        GitHub
                      </a>
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