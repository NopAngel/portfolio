
import Card from "./Card";

function Projects() {
  const projects = {
    project1: {
      image: "/bearos.png",
      title: "Bear OS x86-64",
      desc: "An operating system (x86-64) created with C and Assembly, with its respective file system and some basic commands",
      language: ["C", "Assembly"],
    },
    project2: {
      image: "https://github.com/NopAngel/axisql/blob/main/assets/icon.png?raw=true",
      title: "AxiSQL",
      desc: "This is a database (created by me) inspired by SQL. It allows you to perform basic functions and runs like PlayGround.",
      language: ["C", "C++"],
    },
    project3: {
      image: "/emojix.png",
      title: "Emojix",
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
          image={projects.project1.image}
          language={projects.project1.language}
          title={projects.project1.title}
        />

        <Card
          desc={projects.project2.desc}
          image={projects.project2.image}
          language={projects.project2.language}
          title={projects.project2.title}
        />

        <Card
          desc={projects.project3.desc}
          image={projects.project3.image}
          language={projects.project3.language}
          title={projects.project3.title}
        />
      </section>
    </section>
  );
}

export default Projects;
