import { FaHashtag } from "react-icons/fa";
import { posts } from "../../../lib/data/posts";
import { Metadata } from "next";
import Link from "next/link";
import { socials } from "@/lib/data/socials";

interface Post {
  header: string;
  date: string;
  sections: { title: string; content: string }[];
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | undefined = posts[slug as keyof typeof posts];
  if (!post) {
    return { title: "Post not found" };
  }
  return { title: post.header };
}
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  // Simulate asynchronous data fetching
  const post: Post | null = await new Promise((resolve) =>
    setTimeout(() => resolve(posts[slug as keyof typeof posts] || null), 100)
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="justify-center items-center flex flex-col p-20">
      <div className="bg-white/5 p-4 rounded-xl">
        <span className="text-neutral-500">
          /{" "}
          <Link href={"/"} className="hover:text-white">
            Home
          </Link>{" "}
          /{" "}
          <Link href={"/posts"} className="hover:text-white">
            Writing
          </Link>{" "}
          /
        </span>{" "}
        {post.header}
      </div>
      <div className="text-center border-b py-4">
        <h1 className="font-serif italic text-5xl max-w-lg">{post.header}</h1>
        <p className="text-xl text-neutral-500 mt-3">{post.date}</p>
      </div>
      <div className="content">
        {post.sections.map(
          (section: { title: string; content: string }, index: number) => (
            <div key={index} className="mt-12 mx-auto w-full px-6">
              <div
                className="flex gap-1 items-center"
                id={section.title.replaceAll(" ", "-").toLowerCase()}
              >
                <Link
                  href={`#${section.title.replaceAll(" ", "-").toLowerCase()}`}
                >
                  <FaHashtag
                    size={28}
                    className="text-neutral-500 hover:text-neutral-400 hover:bg-white/5 rounded-sm  p-1"
                  />
                </Link>
                <h2 className="text-3xl font-serif italic">{section.title}</h2>
              </div>
              <p className="max-w-2xl text-lg">{section.content}</p>
            </div>
          )
        )}
      </div>
      <footer className="mt-20 text-center text-neutral-500 justify-center items-center flex flex-col space-y-2">
        <p>Thanks for checking out my post!</p>
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
    </div>
  );
}
