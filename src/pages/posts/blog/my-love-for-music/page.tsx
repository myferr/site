import {
  Layout,
  Banner,
  Title,
  Tag,
  TagGroup,
  End,
  Link,
  SectionTitle,
} from "../components/BlogComponents";

import Cover from "@/assets/037793a56dcb0c321b0e55101aa400af.jpg";

function Content() {
  return (
    <div>
      <p className="text-lg tracking-wide">
        Hmm, where to start? Well, I guess this is my first post. Let's talk
        about my love for music!
      </p>
      <br />
      <br />
      <SectionTitle>Rap music.</SectionTitle>
      <p>
        I have always been a fan of rap, and I have listened to it for many
        years, and I love it! My playlist contains over 30 albums from all the
        following artists combined; <b>{"(ranked in order of appearance)"}</b>{" "}
        <u>
          Kendrick Lamar, Kanye West, A$AP Rocky, J. Cole, Childish Gambino,
          Metro Boomin, Travis Scott, JAY-Z, XXXTENTACION, André 3000, Outkast,
          Baby Keem, Killer Mike, Playboi Carti, Future, Tyler The Creator,
          Juice WRLD, The Weeknd, MF DOOM, and Denzel Curry
        </u>
        .
      </p>
      <br />
      <br />
      <SectionTitle>The reason I love the rap genre of music.</SectionTitle>
      <p>
        I love the genre because it's artists are more authentic than pop stars
        because they can express their true feelings and thoughts on a topic or
        situation, a good rapper can tell a beautiful story about their own or
        others' experience{"(s)"} and opinion{"(s)"}. Rap music is beautiful
        because it combines melodic and rhythmic content to satisfy our desire
        for harmony.
      </p>
      <br />
      <br />
      <Link href="https://open.spotify.com/playlist/1nHp4ZNzeQIxPw4Hdeoeom?si=5f74cf55dcf545ad">
        Go check out my playlist. (over 300 tracks)
      </Link>
    </div>
  );
}
export default function HelloWorld_Post() {
  return (
    <Layout>
      <div>
        <section id="post_details">
          <div>
            <Banner src={Cover} />
            <Title>My love for music.</Title>
            <p className="text-muted-foreground max-w-[450px]">
              All about my love for the rap genre{" "}
            </p>
            <TagGroup>
              <Tag>personal</Tag>
              <Tag>music</Tag>
            </TagGroup>
          </div>
          <End />
        </section>
        <section id="post_content">
          <div className="max-w-[500px]">
            <Content />
          </div>
        </section>
      </div>
    </Layout>
  );
}
