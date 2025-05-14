"use client";

import { Button } from "@/components/ui/button";
import * as Fa from "react-icons/fa6";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="flex justify-between w-full max-w-md items-center">
        <div>
          <Link href={"/"} className="font-mono hover:underline">
            /home
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href={"/vinyls"} className="font-mono hover:underline">
            /vinyls
          </Link>
          <Link href={"/:3"} className="font-mono hover:underline">
            /:3
          </Link>
        </div>
        <div>
          <Link href="https://github.com/myferr" target="_blank">
            <Button
              variant={"secondary"}
              className="rounded-xl hover:cursor-pointer"
              size={"icon"}
            >
              <Fa.FaGithub />
            </Button>
          </Link>
        </div>
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-xl">My vinyl collection.</h1>
        <div className="space-y-0.5 flex flex-col font-mono text-amber-100">
          I like vinyls. Here are some I own :D
        </div>
        <Separator />
        <div className="flex flex-col gap-8">
          <div>
            <Image
              src={"/vinyls/mmtbs.png"}
              width={320}
              height={270}
              alt="Mr. Morale & The Big Steppers - Exclusive Metalic Gold Vinyl"
              aria-label="Mr. Morale & The Big Steppers - Exclusive Metalic Gold Vinyl"
            ></Image>
            <p className="font-mono opacity-30 text-xs mt-2">
              Mr. Morale & The Big Steppers - Exclusive Metalic Gold Vinyl
            </p>
            <p className="text-sm max-w-sm mt-1">
              My first vinyl and it&apos;s a deep lyrical masterpiece with deep
              themes.
            </p>
          </div>
          <div>
            <Image
              src={"/vinyls/hutcollectors.png"}
              width={320}
              height={270}
              alt="Hurry Up Tomorrow - The Weeknd x Basquiat 'Hurry Up Tomorrow' Collector's Edition Vinyl"
              aria-label="Hurry Up Tomorrow - The Weeknd x Basquiat 'Hurry Up Tomorrow' Collector's Edition Vinyl"
            ></Image>
            <p className="font-mono opacity-30 text-xs mt-2">
              Hurry Up Tomorrow - The Weeknd x Basquiat &apos;Hurry Up
              Tomorrow&apos; Collector&apos;s Edition Vinyl{" "}
            </p>
            <p className="text-sm max-w-sm mt-1">
              My second vinyl. Just wow. Absolutely love this album. XOTWOD{" "}
              {"<3"}
            </p>
          </div>
          <div>
            <Image
              src={"/vinyls/dondadeluxe.png"}
              width={320}
              height={270}
              alt="Donda - Deluxe 4LP Vinyl"
              aria-label="Donda - Deluxe 4LP Vinyl"
            ></Image>
            <p className="font-mono opacity-30 text-xs mt-2">
              Donda - Deluxe 4LP Vinyl
            </p>
            <p className="text-sm max-w-sm mt-1">
              My third vinyl and it&apos;s a great album, one of my favorite
              Kanye albums. It&apos;s sad to see how much he&apos;s changed over
              the years.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
// 320 270
