"use client";

import { Circle, MapPin, Quote, UserPen } from "lucide-react";

import Header from "../components/Header";

import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function App() {
  return (
    <div>
      <Header />
      <section className="flex flex-col justify-center items-center">
        <div className="m-20 text-left min-w p-8 w-[45em]">
          <div className="p-8 border-2 border-white/5 rounded-[15px]">
            <div className="flex items-center gap-6">
              <h1 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Dennis K.
              </h1>
              <div className="flex gap-4">
                <a
                  href="https://github.com/myferr/"
                  className="hover:bg-white/10 p-2 rounded-[5px] transition-all duration-300"
                  target="_blank"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  >
                    <img src="github.svg" width={25} height={25} alt="Github" />
                  </motion.div>
                </a>
                <a
                  href="https://instagram.com/notmyfer/"
                  className="hover:bg-white/10 p-2 rounded-[5px] transition-all duration-300"
                  target="_blank"
                >
                  {" "}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  >
                    <img
                      src="instagram.svg"
                      width={25}
                      height={25}
                      alt="Instagram"
                    />
                  </motion.div>
                </a>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 gap-1 flex">
              <MapPin className="size-4 mt-[4px]" />
              Florida, United States
            </p>
            I'm a 14 year old Frontend Web Developer. I have been programming
            for more than 4 years. I create beautiful websites and experiences.
          </div>
          <div className="mt-10">
            <h1 className="mb-8 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Tech Stack
            </h1>
            <div className="flex flex-wrap gap-2 underline underline-offset-2 group overflow-hidden flex-row relative max-w-[400px]">
              <div className="flex gap-10 justify-around animate-marquee flex-row">
                <div className="justify-center items-center flex gap-2">
                  <img src="react.svg" className="size-6" />
                  <p>React</p>
                </div>
                <div className="justify-center items-center flex gap-2">
                  <img src="javascript.svg" className="size-6" />
                  <p>JavaScript</p>
                </div>
                <div className="justify-center items-center flex gap-2">
                  <img src="typescript.svg" className="size-6" />
                  <p>TypeScript</p>
                </div>
                <div className="justify-center items-center flex gap-2">
                  <img src="astro-icon.svg" className="h-6" />
                  <p>Astro</p>
                </div>
                <div className="justify-center items-center flex gap-2">
                  <img src="go.svg" className="size-6" />
                  <p>Golang</p>
                </div>
                <div className="justify-center items-center flex gap-2">
                  <img src="tailwindcss-icon.svg" className="size-6" />
                  <p>Tailwind</p>
                </div>
                <div className="justify-center items-center flex gap-2">
                  <img src="sass.svg" className="size-6" />
                  <p>Sass</p>
                </div>
              </div>
              <div className="flex gap-10 justify-around animate-marquee flex-row">
                <div className="flex gap-1">
                  <img src="html.svg" className="size-6" />
                  <p>HTML</p>
                </div>
                <div className="flex gap-1">
                  <img src="css.svg" className="size-6" />
                  <p>CSS</p>
                </div>
                <div className="flex gap-1">
                  <img src="python.svg" className="size-6" />
                  <p>Python</p>
                </div>
                <div className="flex gap-1">
                  <img src="bash-icon.svg" className="size-6" />
                  <p>Bash</p>
                </div>
                <div className="flex gap-1">
                  <img src="vitejs.svg" className="size-6" />
                  <p>Vite</p>
                </div>
                <div className="flex gap-1">
                  <img src="vue.svg" className="size-6" />
                  <p>Vue</p>
                </div>
                <div className="flex gap-1">
                  <img src="svelte-icon.svg" className="size-6" />
                  <p>Svelte</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background"></div>
            </div>
          </div>
          <div className="mt-24">
            <h1 className="text-4xl font-bold mb-8">Experience</h1>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-gray-700">
                <Circle
                  className="absolute -left-[9px] top-1 w-4 h-4 text-teal-500"
                  fill="currentColor"
                />
                <h2 className="text-teal-500 text-xl">HeckerGang</h2>
                <h3 className="text-2xl font-semibold">
                  Front-End Web Developer
                </h3>
                <p className="mt-2 text-gray-500">
                  <a
                    href="https://theheckergang.pages.dev"
                    className="text-teal-500 hover:underline"
                    target="_blank"
                  >
                    Website
                  </a>{" "}
                  for popular Discord server known as HeckerGang
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-700">
                <Circle
                  className="absolute -left-[9px] top-1 w-4 h-4 text-teal-500"
                  fill="currentColor"
                />
                <h2 className="text-2xl font-semibold">OpenSource</h2>
                <p className="mt-2 text-gray-500">
                  I actively try to contribute to Open Source on my GitHub.
                  <br />
                  <a
                    href="https://github.com/myferr"
                    target="_blank"
                    className="text-teal-500 hover:underline"
                  >
                    github.com/myferr
                  </a>
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-700">
                <Circle
                  className="absolute -left-[9px] top-1 w-4 h-4 text-teal-500"
                  fill="currentColor"
                />
                <h2 className="text-teal-500 text-xl">VerifyME</h2>
                <h3 className="text-2xl font-semibold">
                  Front-End Web Developer
                </h3>
                <p className="mt-2 text-gray-500">
                  Made a{" "}
                  <a
                    href="https://github.com/myferr/verifyme-website"
                    className="text-teal-500 hover:underline"
                    target="_blank"
                  >
                    website
                  </a>{" "}
                  for a popular Discord bot.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-48">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <Quote className="justify-center items-center flex my-8 size-12" />
                      <div>
                        <p>
                          Myfer is a very enthusiastic programmer. He is always
                          ready to learn something, and committed to projects.
                          He constantly improves his skill, and is eager to
                          share it. I highly recommend him.
                        </p>
                      </div>
                      <Separator className="max-w-[500px] my-8" />
                      <div>
                        <div className="flex gap-2 mb-8">
                          <Avatar className="size12">
                            <AvatarImage src="https://github.com/gustycube.png" />
                            <AvatarFallback>
                              <UserPen />
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-col">
                            <p className="text-lg font-semibold relative top-2 mb-2">
                              GustyCube
                            </p>
                            <p className="text-sm flex">
                              Founder, Dragon Studios & Founder, Gusfer
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <Quote className="justify-center items-center flex my-8 size-12" />
                      <div>
                        <p>
                          Myfer is really dedicated to his work and puts mass
                          amounts of effort into his work. He is really a great
                          programmer and of course a great guy, he does his work
                          really well and I highly recommend him.
                        </p>
                      </div>
                      <Separator className="max-w-[500px] my-8" />
                      <div>
                        <div className="flex gap-2 mb-8">
                          <Avatar className="size12">
                            <AvatarImage src="/Head.avatar.webp" />
                            <AvatarFallback>
                              <UserPen />
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-col">
                            <p className="text-lg font-semibold relative top-2 mb-2">
                              Head
                            </p>
                            <p className="text-sm flex">Co-Founder, VerifyME</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="justify-center items-center text-center flex">
            <a
              href="mailto:contactme.myfer@protonmail.com?subject=My%20testimonial.&body=%7Btestimonial%20here%7D%0A%0A-%7Bname%7D%0A-%7Broles%2Femployments%7D"
              target="_blank"
            >
              {" "}
              <Button variant={"ghost"} className="mt-2">
                Register a testimonial
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
