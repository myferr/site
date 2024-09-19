import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon } from "lucide-react";

export default function Component(props: any) {
  const title: string = props.title;
  const authorName: string = props.authorName;
  const date: any = props.date;
  const excerpt: string = props.excerpt;
  const coverImage: any = props.coverImage;

  const post = {
    title: title,
    id: "/blog/posts/" + title,
    author: {
      name: authorName,
      avatar:
        "https://github.com/shuding/nextra/blob/main/examples/blog/avatar.jpg?raw=true",
    },
    date: date,
    excerpt: excerpt,
    coverImage: coverImage,
  };

  return (
    <div className="my-12">
      <Card className="max-w-md mx-auto overflow-hidden hover:cursor-pointer">
        <img
          src={post.coverImage}
          alt=""
          className="w-full h-48 object-cover"
        />
        <CardHeader>
          <h2 className="text-2xl font-bold">{post.title}</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback className="text-slate-500">
                {post.author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <a
            href={post.id
              .replaceAll(" ", "-")
              .replaceAll("!", "")
              .toLowerCase()}
            className="w-full"
          >
            <Button className="w-full">Read More</Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
