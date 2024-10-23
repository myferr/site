import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";

import blog from "./posts.json";

const blogPosts = blog.posts;

export default function Page() {
  return (
    <div>
      <Header />
      <section className="flex flex-col">
        <div className="m-20 text-left">
          <h1 className="mmt-10 scroll-m-20 text-5xl font-semibold tracking-tight transition-colors first:mt-0">
            Posts.
          </h1>
          <div className="flex flex-col">
            {blogPosts.map((post) => {
              return (
                <div className="my-5" id="post">
                  <a
                    href={`/posts/blog/${post.id}`}
                    className="text-lg font-semibold underline underline-offset-3 hover:text-muted-foreground transition-all duration-300"
                  >
                    {post.title}
                  </a>
                  <div className="flex gap-1">
                    <p className="text-[#5e6471]">{post.date}</p>•
                    <p className="text-[#fef9c3]">{post.author}</p>
                  </div>
                  <p className="text-[#9ca3af]">{post.description}</p>
                  <div id="tags">
                    {blogPosts.map((tags: { tags: any[] }) => {
                      return (
                        <div className="flex gap-2 my-2">
                          {tags.tags.map((tag) => {
                            return (
                              <Badge
                                variant={"secondary"}
                                key={tag}
                                className="rounded-full"
                              >
                                <span>{tag.toLowerCase()}</span>
                              </Badge>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
