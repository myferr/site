import Link from "next/link";

export default function PlayBlockiro() {
  return (
    <div>
      <div className="p-4 pb-10 gap-8 sm:p-10">
        <div className="flex gap-1">
          <Link href={"/"} className="text-blue-600 font-medium underline">
            home
          </Link>
          <p>/</p>
          <Link
            href={"https://github.com/myferr/"}
            className="text-blue-600 font-medium underline"
          >
            github
          </Link>
          <p>/</p>
          <Link
            href={"https://x.com/myferdoescoding/"}
            className="text-blue-600 font-medium underline"
          >
            twitter
          </Link>
          <p>/</p>
          <Link
            href={"https://github.com/myferr/"}
            className="text-blue-600 font-medium underline"
          >
            blog
          </Link>{" "}
        </div>
        <div className="mt-8 max-w-2xl">
          playblockiro
          <br />
          <div>
            blockiro/playblockiro is a game introduced by{" "}
            <Link
              href={"https://blockiro.net/"}
              className="text-blue-600 font-medium underline"
            >
              blockiro llc
            </Link>
            , it&apos;s a desktop rpg and sandbox game, with the story line and
            familiar battle system of a game like{" "}
            <Link
              href={"https://toontownrewritten.com/"}
              className="text-blue-600 font-medium underline"
            >
              toontown
            </Link>{" "}
            with the creativity and capabilities of{" "}
            <Link
              href={"https://gmod.facepunch.com/"}
              className="text-blue-600 font-medium underline"
            >
              gary&apos;s mod
            </Link>
            <br />i am currently working on their website as a web developer and
            frontend engineer.
          </div>
          <br />
          <br />
          <br />
          <p className="underline">
            All opinions and content, on my socials and on this web page are my
            own and aren&apos;t statements made by{" "}
            <Link
              href={"https://blockiro.net/"}
              className="text-blue-600 font-medium underline"
            >
              Blockiro LLC.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
