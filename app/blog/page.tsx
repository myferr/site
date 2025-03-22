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
            href={"/blog"}
            className="text-blue-600 font-medium underline"
          >
            blog
          </Link>{" "}
        </div>
        <div className="mt-8 max-w-2xl">
          blogs
          <br />
          all of my compiled posts and articles are here, i write about
          programming, web development, and other topics that interest me.
          <br />
          all of my posts are listed below.
          <div className="gap-8 flex flex-col mt-8">
            <p className="text-2xl font-bold">
              there&apos;s not much here yet, but i will be adding more posts
              soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
