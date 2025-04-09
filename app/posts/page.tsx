import Link from "next/link";
import { postsMap } from "@/lib/data/posts";
import { socials } from "@/lib/data/socials";

export default function Home() {
  return (
    <main className="min-h-screen p-20 md:p-24 lg:p-28 text-md bg-neutral-950 text-neutral-200">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-start mb-10 ">
          <div>
            <Link className="text-2xl md:text-3xl font-serif italic" href={"/"}>
              Dennis.
            </Link>
            <p className="text-neutral-500 mt-1 pointer-events-none">
              Full-stack developer
            </p>
          </div>
          <div className="flex items-center gap-4 text-neutral-500">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                className="hover:text-white transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon />
              </Link>
            ))}
          </div>
        </header>

        {/* Writing Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif italic mb-2">Writing</h2>
          {postsMap.map((post) => (
            <div key={post.title} className="border-b border-neutral-800 py-4">
              <h3 className="text-xl">
                <Link
                  href={post.link}
                  className="hover:text-white transition-colors duration-300"
                >
                  {post.title}
                </Link>
              </h3>
              <div className="text-neutral-500 text-sm">{post.date}</div>
            </div>
          ))}
        </section>
      </div>

      <footer className="mt-20 text-center text-neutral-500 justify-center items-center flex flex-col space-y-2">
        <p>Thanks for checking out my website!</p>
        <div className="flex items-center gap-4 text-neutral-500">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              className="hover:text-white transition-colors duration-300"
              aria-label={social.name}
            >
              <social.icon />
            </Link>
          ))}
        </div>
      </footer>
    </main>
  );
}
