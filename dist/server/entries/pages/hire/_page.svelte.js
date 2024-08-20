import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
const JobCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { available } = $$props;
  let { description } = $$props;
  let { title } = $$props;
  let status;
  let statusClass;
  let statusCircle;
  let jobLink;
  if (available == true) {
    status = `
      Available for hire
      `;
    statusClass = `
      available
      `;
    statusCircle = `
      circle
      `;
    jobLink = `/hire/jobs?job=${title.replace(" ", "_")}`;
  } else {
    status = `
      Unavailable for hire
      `;
    statusClass = `
      not-available
      `;
    statusCircle = `
      red-circle
      `;
    jobLink = "/hire/jobs?job=not-available";
  }
  if ($$props.available === void 0 && $$bindings.available && available !== void 0) $$bindings.available(available);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  return `<a${add_attribute("href", jobLink, 0)} style="text-decoration: none; color: inherit"><div class="JobCard-container"><div class="JobCard"><p class="job-title">${escape(title)}</p> <p${add_attribute("class", statusClass, 0)}><span${add_attribute("class", statusCircle, 0)}></span> ${escape(status)}</p> <p class="description">${escape(description)}</p></div></div></a>`;
});
const Hire = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div style="text-align:left;"><h1 data-svelte-h="svelte-4yb8py">Hire me.</h1> <p class="title" data-svelte-h="svelte-qx9qo3"><span class="circle"></span>
			Contact Email:</p> ${escape(" ")} <code class="geist-mono" data-svelte-h="svelte-vzat0c">contactme.myfer@protonmail.com</code> <p class="title" data-svelte-h="svelte-ysvvtr"><span class="circle"></span>
			Timezone &amp; Location:</p> ${escape(" ")} <code class="geist-mono" data-svelte-h="svelte-o7ykyl">CDT (UTC-05:00) &amp; United States, Florida</code> <br> <a href="#jobs">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `View available jobs`;
    }
  })}</a></div> <br> <div id="jobs"><br> <p class="line"></p> <section><h1 data-svelte-h="svelte-ynqb9w">Jobs</h1> <br> <div class="cards" style="display: flex; justify-content: center; align-items: center">${validate_component(JobCard, "JobCard").$$render(
    $$result,
    {
      title: "Web Developer",
      description: "Request me to create you a website.",
      available: false
    },
    {},
    {}
  )} ${validate_component(JobCard, "JobCard").$$render(
    $$result,
    {
      title: "Web Designer",
      description: "Request me to design your website.",
      available: true
    },
    {},
    {}
  )} ${validate_component(JobCard, "JobCard").$$render(
    $$result,
    {
      title: "Graphic Designer",
      description: "Request me to design you a logo, banner, etc.",
      available: true
    },
    {},
    {}
  )}</div></section></div></main>`;
});
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hire, "Page").$$render($$result, {}, {}, {})}`;
});
export {
  Page_1 as default
};
