import Link from "next/link";

export default function About() {
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
          about me
          <br />
          <div>
            i am a self-taught developer with over 5 year of experience in
            programming technologies. i love to learn new things and experiment
            with new technologies. i am currently working as a web developer @{" "}
            <Link
              href={"/about/playblockiro"}
              className="text-blue-600 font-medium underline"
            >
              playblockiro
            </Link>
            <br />
            if you have any questions or want to get in touch, feel free to{" "}
            <Link
              href={"mailto:contactme.myfer@protonmail.com"}
              className="text-blue-600 font-medium underline"
            >
              email me
            </Link>{" "}
            or reach out on{" "}
            <Link
              href={"https://x.com/myferdoescoding/"}
              className="text-blue-600 font-medium underline"
            >
              twitter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
