import { ArrowLeft } from "lucide-react";
import Nav from "../../../components/nav";

function HelloWorldPost() {
  return (
    <main className="h-screen bg-[#121212] text-white">
      <Nav />
      <div className="bg-[#121212] h-screen">
        <div className="m-20">
          <header className="border-b border-white/15 border-dashed pb-10">
            <div className="flex items-center gap-2 text-neutral-600 my-16">
              <a href="/blog" className="flex items-center gap-2">
                <ArrowLeft />
                <span className="text-sm font-semibold">Back to blog</span>
              </a>
            </div>
            <h1 className="geist scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl">
              Hello, World!
            </h1>
            <p className="my-4 text-slate-500">Welcome to my blog :)</p>
          </header>
          <div className="mt-10 max-w-2xl">
            <span className="font-extrabold">Hey!</span> Sooooooooooooo. First
            of all, I believe introductions are in order. My name's Dennis,
            though I commonly refer to myself as Myfer online. I'm a developer,
            designer, and open-source enthusiast. I love creating things that
            are both functional and beautiful, and I'm always eager to learn new
            things and improve my skills. If you're looking for someone who can
            help you with your next project, I'm here to help. Anywho, enough of
            that. Let's get started!
            <br />
            <br />
            <span className="font-extrabold">What is this blog?</span> This blog
            is a place for me to share my thoughts, ideas, and experiences with
            the world. I write about a wide range of topics, from programming
            and design to personal development and life in general. I hope you
            find this blog informative, entertaining, and inspiring. If you have
            any questions, comments, or just want to say hi, don't hesitate to
            reach out!
          </div>
        </div>
      </div>
    </main>
  );
}

export default HelloWorldPost;
