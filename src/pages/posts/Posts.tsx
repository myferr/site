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
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
