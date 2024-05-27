import { useState } from "react";
import IconCloud from "../magicui/icon-cloud.jsx";

function Skills() {
  const slugs = [
    "typescript",
    "javascript",
    "micropython",
    "python",
    "php",
    "phpstorm",
    "laravel",
    "lumen",
    "django",
    "vuetify",
    "react",
    "flutter",
    "fastapi",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "wordpress",
    "woocommerce",
    "shopify",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  return (
    <>
      <section className="py-10 md:py-16">
        <div
          style={{ backgroundColor: "#FFF" }}
          className="container max-w-screen-xl mx-auto px-4 text-center"
        >
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl pt-10 mb-5">
            Skills
          </h1>
          <div
            style={{ maxWidth: "100%", margin: "0 auto" }}
            className="relative flex h-full w-full max-w-[32rem] flex items-center justify-center overflow-hidden rounded-lg bg-background pb-10 "
          >
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
