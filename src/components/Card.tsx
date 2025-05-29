
function Card({
  image,
  title,
  desc,
  language,
}: {
  image: string;
  title: string;
  desc: string;
  language: string[];
}) {
  return (
    <article className="w-[450px] border-x-[0.1px] border-gray-700 border-y-[0.1px] p-2 rounded-lg">
      <img src={image} alt={title} />
      <section>
        <h1 className="text-xl p-2">{title}</h1>
        <p className="p-1 opacity-50">{desc}</p>
        <footer className="flex justify-center gap-2 ">
          {language.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-800 w-fit rounded-lg pl-2 pr-2 text-center mt-3 mb-0"
            >
              {item}
            </div>
          ))}
        </footer>
      </section>
    </article>
  );
}

export default Card;
