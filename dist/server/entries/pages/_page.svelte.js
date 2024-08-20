import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Button.js";
const Discord = "/_app/immutable/assets/Discord.CM7tF8JW.png";
const X = "/_app/immutable/assets/X.BIVm9hpF.png";
const GitHub = "/_app/immutable/assets/GitHub.B3LxWxcL.png";
const Twitch = "/_app/immutable/assets/Twitch.1GneqgyZ.png";
const SecondaryButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="button" id="button-secondary" style="margin-right:20px">${slots.default ? slots.default({}) : ``}</button>`;
});
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { description } = $$props;
  let { title } = $$props;
  let { href } = $$props;
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  return `<div class="ProjectCard"><a${add_attribute("href", href, 0)} target="_blank" style="text-decoration: none; color: #0070f3"><span class="title">${escape(title)}</span></a> <p class="description">${escape(description)}</p></div>`;
});
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div><h1 data-svelte-h="svelte-1wp848f">Myfer</h1> <p data-svelte-h="svelte-1j7644o">Based in United States, Florida.</p> <div class="social-icon-wrapper" data-svelte-h="svelte-rphnyb"><div class="social-icon-container"><a href="https://x.com/myferisadev" target="_blank"><img${add_attribute("src", X, 0)}${add_attribute("width", 20, 0)}${add_attribute("height", 20, 0)} alt="X" class="social-icon with-push"></a> <a href="https://discord.com/users/1157526846229991544" target="_blank"><img${add_attribute("src", Discord, 0)}${add_attribute("width", 25, 0)}${add_attribute("height", 20, 0)} alt="Discord" class="social-icon with-push"></a> <a href="https://github.com/myferr/" target="_blank"><img${add_attribute("src", GitHub, 0)}${add_attribute("width", 20, 0)}${add_attribute("height", 20, 0)} alt="GitHub" class="social-icon with-push"></a> <a href="https://twitch.tv/myferontwitch" target="_blank"><img${add_attribute("src", Twitch, 0)}${add_attribute("height", 20, 0)} alt="Twitch" class="social-icon with-push"></a></div></div> <br> <a href="/#about-me">${validate_component(SecondaryButton, "SecondaryButton").$$render($$result, {}, {}, {
    default: () => {
      return `About me`;
    }
  })}</a> <a href="/#projects">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `See my projects`;
    }
  })}</a> <section id="about-me"><div><h2 data-svelte-h="svelte-1f3na55">About me.</h2> <p>I am 14 years old and I have been programming for 4.5 years.
					<br> I am a web developer, web designer, typography designer,
					<br>
					graphic designer, app developer, Python developer,
					<br>
					command line interface developer, etc.
					<br> <br> <a href="/hire">${validate_component(SecondaryButton, "SecondaryButton").$$render($$result, {}, {}, {
    default: () => {
      return `Hire me`;
    }
  })}</a></p></div></section> <section id="projects"><div><h2 data-svelte-h="svelte-dx9gg6">Project catalog.</h2>
				All projects are sourced from my GitHub.
				<br> <p class="line"></p> <br> <section id="cards">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "am-i-paid",
      description: "An API built with SvelteKit and TypeScript to test if clients have paid me for my work.",
      href: "https://am-i-paid.vercel.app/"
    },
    {},
    {}
  )} ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "verifyme-website",
      description: "An official website for the VerifyME bot on Discord. (outdated)",
      href: "https://github.com/myferr/verifyme-website/"
    },
    {},
    {}
  )}</section> <br> <section id="cards">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "icecream-js",
      description: "A JavaScript library to render HTML with ease.",
      href: "https://icecream.js.org/"
    },
    {},
    {}
  )} ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "guilded-light-mode",
      description: "A light mode for Guilded.gg built with CSS. (this took me a year to complete)",
      href: "https://guilded-light.pages.dev"
    },
    {},
    {}
  )}</section> <br> <section id="cards">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "my-tab",
      description: "A beautiful website that serves as a custom new tab for your browser.",
      href: "https://github.com/myferr/my-tab"
    },
    {},
    {}
  )} ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "spammer-gui",
      description: "A message-sending macro. Built with CustomTkinter and Tkinter.",
      href: "https://spammer-gui.pages.dev"
    },
    {},
    {}
  )}</section> <br> <section id="cards">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "yoink",
      description: "A simple JavaScript CLI to clone GitHub repositories",
      href: "https://github.com/myferr/yoink-js"
    },
    {},
    {}
  )} ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      title: "spammer-gui",
      description: "A message-sending macro. Built with CustomTkinter and Tkinter.",
      href: "https://spammer-gui.pages.dev"
    },
    {},
    {}
  )}</section></div> <a href="https://github.com/myferr" target="_blank">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `See more`;
    }
  })}</a></section></div></main>`;
});
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(App, "Page").$$render($$result, {}, {}, {})}`;
});
export {
  Page_1 as default
};
