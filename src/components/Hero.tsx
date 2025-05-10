function Hero() {
  return (
    <section
      className="flex flex-col items-center h-[40vh] justify-center"
      id="home"
    >
      <section>
        <article className="border-x-[1px] border-y-[1px] border-green-400 rounded-xl p-3 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:w[100%]">
          <header className="flex items-center gap-2 border-b-[1px] border-green-400 p-[4px]">
            <section className="flex gap-1">
              <div className="bg-red-400 w-[10px] h-[10px] rounded-3xl"></div>
              <div className="bg-yellow-400 w-[10px] h-[10px] rounded-3xl"></div>
              <div className="bg-green-400 w-[10px] h-[10px] rounded-3xl"></div>
            </section>
            <p className="opacity-50 ">terminal</p>
          </header>
          <h1 className="flex gap-2 pt-2">
            <p className="text-green-400">$</p> Hello, world!! I am Angel Nieto,
            Full-Stack developer. Welcome to my digital realm.
          </h1>
        </article>
      </section>
      <button className="mt-7 p-2 border-x-[1px] border-y-[1px] border-green-500 rounded-lg bg-[#001a11] text-green-500 pl-3 pr-3">
        Learn more about me
      </button>
    </section>
  );
}

export default Hero;
