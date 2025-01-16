import { useAsciiText, larry3D } from "react-ascii-text";
import Nav from "../../components/nav";

function Blog() {
  const posts = [
    {
      title: "Hello, World!",
      content: "Welcome to my blog :)",
      tags: ["react", "typescript", "tailwindcss"],
      date: "Wed Jan 15 2025",
    },
  ];
  const asciiTextRef = useAsciiText({
    animationCharacters: "_-",
    animationCharacterSpacing: 1,
    animationDelay: 2000,
    animationDirection: "down",
    animationInterval: 100,
    animationLoop: true,
    animationSpeed: 50,
    font: larry3D,
    text: ["Blog"],
  });

  return (
    <main className="h-screen bg-[#121212] text-white">
      <Nav />
      <div className="m-20">
        <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e5f] via-[#fffc00] to-[#feb47b]">
          {/* @ts-ignore */}
          <pre ref={asciiTextRef}></pre>
        </h1>
        <p className="my-4">This is my corner of the internet.</p>
        <section>
          {posts.map((post) => (
            <article
              key={post.title
                .replace(" ", "-")
                .replace("!", "")
                .replace(",", "")
                .toLowerCase()}
              className="my-10 "
            >
              <a
                className="font-extrabold text-xl underline"
                href={`/blog/${post.title
                  .replace(" ", "-")
                  .replace("!", "")
                  .replace(",", "")
                  .toLowerCase()}`}
              >
                {post.title}
              </a>
              <p className="italic text-slate-500">{post.date}</p>
              <p className="my-2">{post.content}</p>
              <ul className="flex gap-2">
                {post.tags.map((tag) => (
                  <li key={tag} className="bg-white/10 rounded px-1">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Blog;
