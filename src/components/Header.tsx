
function Header() {
  return (
    <header className="top-0 sticky text-xl">
      <nav>
        <ul className="flex justify-around py-3 bg-black">
          <section>
            <li>
              <a href="/">NIETO</a>
            </li>
          </section>
          <section className="flex gap-4">
            <li>
              <a href="#home">
                <span className="text-green-300">$</span>
                <span> home</span>
              </a>
            </li>
            <li>
              <a href="#prj">
                <span className="text-green-300">$</span>
                <span> projects</span>
              </a>
            </li>
            <li>
              <a href="#skills">
                <span className="text-green-300">$</span>
                <span> skills</span>
              </a>
            </li>
          </section>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
