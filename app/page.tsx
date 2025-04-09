import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsStar, BsStarFill } from "react-icons/bs";
import { BiSolidStarHalf } from "react-icons/bi";
import { VscVerifiedFilled } from "react-icons/vsc";

import { testimonials } from "@/lib/data/testimonials";
import { skills } from "@/lib/data/skills";
import { work } from "@/lib/data/work";
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
            <p className="text-neutral-400 mt-1 pointer-events-none">
              Full-stack developer
            </p>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
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

        {/* Bio */}
        <section className="mb-12">
          <p className="flex gap-1 pointer-events-none">
            A <span className="italic font-serif">thirteen year-old</span>,
            software and web developer from <span></span>
            <span className="px-3 py-1 bg-neutral-900 rounded-md text-sm border hover:underline pointer-events-none font-serif italic">
              Florida, United States
            </span>
            .
          </p>
          <p className="mt-4 space-y-2">
            <span className="pointer-events-none">
              {" "}
              Building several open-source projects, and working on a few
              freelance projects occasionally with my{" "}
              <span className="italic font-serif">
                five years of programming experience
              </span>
              .
            </span>
            <br />
            <span className="pointer-events-none">Currently an intern at </span>
            <Link
              className="px-3 py-1 bg-neutral-900 rounded-md text-sm border hover:underline cursor-pointer duration-300 font-serif italic"
              href={"/blockiro"}
            >
              Blockiro LLC
              <FaExternalLinkAlt className="inline-block ml-3 size-3 text-neutral-400" />
            </Link>
            .
          </p>
        </section>

        {/* Skills */}
        <section className="flex flex-wrap gap-2 mb-16 border-dashed border border-neutral-800 rounded-xl p-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 bg-neutral-900 text-neutral-400 rounded-md text-sm border hover:underline pointer-events-none font-mono"
            >
              {skill}
            </span>
          ))}
        </section>

        {/* Work Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif italic mb-2">Work</h2>
          {work.map((job, index) => (
            <div
              key={index}
              className="border-t border-neutral-800 border-dashed pt-4 mb-12"
            >
              <h3 className="text-xl mt-1">{job.title}</h3>
              <ul className="list-disc list-inside mt-4 space-y-2 text-neutral-300">
                {job.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 text-neutral-400">@ {job.company}</p>
            </div>
          ))}
        </section>

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
              <div className="text-neutral-400 text-sm">{post.date}</div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-serif italic mb-4">Testimonials</h2>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-2 mb-2 border-dashed border border-neutral-800 rounded-xl p-8"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl">
                  {testimonial.name}{" "}
                  {testimonial.alias && (
                    <span className="text-neutral-400 text-sm">
                      (Anonymized alias)
                    </span>
                  )}
                </h3>
                <p className="text-neutral-400 text-sm flex gap-1 items-center">
                  {testimonial.title} of {testimonial.company}{" "}
                  <VscVerifiedFilled className="text-sky-600 size-4" />
                </p>
                <p className="text-neutral-300">{testimonial.content}</p>
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: 10 }).map((_, i) => {
                    if (i < Math.floor(testimonial.rating)) {
                      return <BsStarFill key={i} className="text-yellow-500" />;
                    } else if (
                      i < testimonial.rating &&
                      testimonial.rating % 1 !== 0
                    ) {
                      return (
                        <BiSolidStarHalf key={i} className="text-yellow-500" />
                      );
                    } else {
                      return <BsStar key={i} className="text-yellow-500" />;
                    }
                  })}
                  <div className="text-neutral-400 text-sm">
                    {testimonial.rating}/10
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif italic mb-2">Contact</h2>
          <div className="border-t border-neutral-800 border-dashed pt-4">
            <div className="text-sm flex gap-12 max-w-md flex-wrap">
              <Link
                className="border-b border-neutral-600 pb-2"
                href={"https://www.x.com/myferdoescoding"}
              >
                X / Twitter (@myferdoescoding)
              </Link>
              <Link
                className="border-b border-neutral-600 pb-2"
                href={"https://bsky.app/profile/myferr.bsky.social"}
              >
                Bluesky (@myferr.bsky.social)
              </Link>
              <Link
                className="border-b border-neutral-600 pb-2"
                href={"mailto:contactme.myfer@protonmail.com"}
              >
                Email (contactme.myfer@protonmail.com)
              </Link>
            </div>
          </div>
        </section>
      </div>
      <footer className="mt-20 text-center text-neutral-400 justify-center items-center flex flex-col space-y-2">
        <p>Thanks for checking out my website!</p>
        <div className="flex items-center gap-4 text-neutral-400">
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
