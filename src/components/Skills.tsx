function Skills() {
  return (
    <section
      className="flex flex-col items-center h-[40vh] justify-center"
      id="skills"
    >
      <h1 className="text-2xl font-semibold my-3">Skills</h1>
      <section>
        <article className="border-x-[1px] border-y-[1px] border-green-400 rounded-xl p-3">
          <header className="flex items-center gap-2 border-b-[1px] border-green-400 p-[4px]">
            <section className="flex gap-1">
              <div className="bg-red-400 w-[10px] h-[10px] rounded-3xl"></div>
              <div className="bg-yellow-400 w-[10px] h-[10px] rounded-3xl"></div>
              <div className="bg-green-400 w-[10px] h-[10px] rounded-3xl"></div>
            </section>
            <p className="opacity-50 ">skills.sh</p>
          </header>
          <section>
            <ul className="grid grid-cols-3 p-3">
              <li>
                <span className="text-green-500">$ </span>
                <span>JavaScript</span>
              </li>
              <li>
                <span className="text-green-500">$ </span>
                <span>C/C++</span>
              </li>
              <li>
                <span className="text-green-500">$ </span>
                <span>Assembly (learning)</span>
              </li>
              <li>
                <span className="text-green-500">$ </span>
                <span>React.js</span>
              </li>
              <li>
                <span className="text-green-500">$ </span>
                <span>Svelte</span>
              </li>
              <li>
                <span className="text-green-500">$ </span>
                <span>TailwindCSS</span>
              </li>
              <li>
                <span className="text-green-500">$ </span>
                <span>Python</span>
              </li>
              <li>
                <span className="text-green-500">$ </span>
                <span>TypeScript</span>
              </li>
              <li>
                <span className="text-green-500">$ </span>
                <span>Astro.js</span>
              </li>
            </ul>
          </section>
        </article>
      </section>
    </section>
  );
}

export default Skills;
