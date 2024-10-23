import Header from "@/components/Header";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <Header />
      <section className="flex flex-col justify-center items-center">
        <div className="m-20 text-left overflow-hidden">
          <div className="flex">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="overflow-x-hidden"
            >
              <img
                src="https://github.com/myferr.png"
                alt="Profile"
                className="rounded-xl w-64 transition-all duration-300 hover:scale-95 hover:cursor-pointer hover:rotate-12"
              />
            </motion.div>
            <h1 className="mt-10 ml-6 scroll-m-20 text-5xl font-semibold tracking-tight transition-colors first:mt-0 underline decoration-wavy">
              About me
            </h1>
            <p className="mt-6 border-l-2 pl-6 max-w-[450px]">
              I have been creating web experiences for the past 4 years. I
              create beautifully-crafted experiences for the web with a
              minimalistic look.
              <br />
              <br />
              Even though I am I enjoy React and frontend frameworks, I will
              forever stand by the fact that{" "}
              <span className="underline">
                it is very much possible to make a beautiful website without
                JavaScript
              </span>
              .
              <br />
              <br />
              Growing up I was always passionate about programming and
              technology, it all fascinated me.
              <br />
              With enough dedication by the age of ten I had learned HTML & CSS
              as well as Batchfile, and I was hooked. Now, years later, I know
              various programming languages and frameworks, I am proud of
              myself.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
