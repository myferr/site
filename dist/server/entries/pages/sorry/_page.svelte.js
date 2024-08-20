import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
const Sorry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div style="text-align: left"><h1 data-svelte-h="svelte-1daig4x">Sorry, I can not do that.</h1> <p class="title" data-svelte-h="svelte-qx9qo3"><span class="circle"></span>
			Contact Email:</p> ${escape(" ")} <code class="geist-mono" data-svelte-h="svelte-vzat0c">contactme.myfer@protonmail.com</code> <p class="title" data-svelte-h="svelte-ysvvtr"><span class="circle"></span>
			Timezone &amp; Location:</p> ${escape(" ")} <code class="geist-mono" data-svelte-h="svelte-o7ykyl">CDT (UTC-05:00) &amp; United States, Florida</code> <br> <a href="/hire">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Hire me`;
    }
  })}</a></div></main>`;
});
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Sorry, "Page").$$render($$result, {}, {}, {})}`;
});
export {
  Page_1 as default
};
