import React from "react";
import Card from "./Card";

function Projects() {
  const projects = {
    project1: {
      image: "/bearos.png",
      title: "Bear OS x86-64",
      github: "github.com/NopAngel/bear",
      desc: "An operating system (x86-64) created with C and Assembly, with its respective file system and some basic commands",
      language: ["C", "Assembly"],
    },
    project2: {
      image: "/spotify.png",
      title: "Spotify Clone",
      github: "github.com/NopAngel/bear",
      desc: "This is a Spotify clone (completely aesthetic) with a clean and easy-to-see UI. Made with React.js components, but in Astro.js.",
      language: ["Astro.js", "TailwindCSS"],
    },
    project3: {
      image: "/emojix.png",
      title: "Emojix",
      github: "github.com/NopAngel/bear",
      desc: "This is a website that allows you to save emojis and copy them to use later, with their respective tag (identifier).",
      language: ["Svelte", "TailwindCSS"],
    },
  };
  return (
    <section className="flex items-center flex-col justify-center" id="prj">
      <h1 className="text-2xl text-left font-semibold mb-5">
        Featured Projects
      </h1>
      <section className="grid grid-cols-3 gap-5 md:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 justify-center">
        <Card
          desc={projects.project1.desc}
          github={projects.project1.github}
          image={projects.project1.image}
          language={projects.project1.language}
          title={projects.project1.title}
        />

        <Card
          desc={projects.project2.desc}
          github={projects.project2.github}
          image={projects.project2.image}
          language={projects.project2.language}
          title={projects.project2.title}
        />

        <Card
          desc={projects.project3.desc}
          github={projects.project3.github}
          image={projects.project3.image}
          language={projects.project3.language}
          title={projects.project3.title}
        />
      </section>
    </section>
  );
}

export default Projects;
