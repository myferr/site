import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { ArrowLeft } from "lucide-react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  src?: any;
  href?: string;
  imgSize?: string;
}

export function Layout({ children, className }: Props) {
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <div className="mx-20 mt-4 text-left">
        <div>{children}</div>
      </div>
    </div>
  );
}

export function Banner({ src, imgSize }: Props) {
  return (
    <section>
      <div className="mx-20 my-12 border-2 border-white/5 rounded-[25px] max-w-[45em] overflow-hidden">
        <div className="justify-center items-center flex h-[200px]">
          <img className={`size-[${imgSize}]`} src={src} alt="Banner" />
        </div>
      </div>
    </section>
  );
}

export function Title({ children, className }: Props) {
  const classes = `scroll-m-20 my-2 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`;
  return (
    <div>
      <a
        href="/posts/blog"
        className="text-muted hover:text-[#4c4c4c] transition-all duration-200"
      >
        <div className="flex">
          <ArrowLeft className="mr-2 inline-block" />
          <span>Back</span>
        </div>
      </a>
      <div>
        <h1 className={classes}>{children}</h1>
      </div>
    </div>
  );
}

export function TagGroup({ children }: Props) {
  return (
    <div>
      <div className="flex gap-2 my-2">{children}</div>
    </div>
  );
}

export function Tag({ children, className }: Props) {
  const classes = `rounded-full ${className}`;
  return (
    <Badge variant={"secondary"} id="tag" className={classes}>
      <span>{children}</span>
    </Badge>
  );
}

export function End() {
  return <Separator className="max-w-[500px] my-8" />;
}

export function SectionTitle({ children, className }: Props) {
  const classes = `scroll-m-20 text-2xl font-semibold tracking-tight ${className}`;
  return <h3 className={classes}>{children}</h3>;
}

export function Link({ children, className, href }: Props) {
  const classes = `underline underline-offset-2 font-semibold ${className}`;
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
