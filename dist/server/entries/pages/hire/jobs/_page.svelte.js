import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
const Jobs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let price;
  let priceLabel;
  let jobDescription;
  let selectedJob;
  let mailMe;
  return `<main><div style="text-align: left"><h1>Hire me as a <br> <span style="color: #0070f3">${escape(selectedJob)}</span></h1> <p class="title" data-svelte-h="svelte-1i50d8p"><span class="circle"></span>
			Pricing:</p> ${escape(" ")} <code class="geist-mono">${escape(price)} ${escape(priceLabel)}</code> <p class="title" data-svelte-h="svelte-rfng78"><span class="circle"></span>
			Job Description:</p> ${escape(" ")} <code class="geist-mono">${escape(jobDescription)}</code> <p class="title" data-svelte-h="svelte-1ab6x30"><span class="circle"></span>
			Hire me as a:</p> ${escape(" ")} <code class="geist-mono">${escape(selectedJob)}</code> <br> <div style="display: flex; justifyContent: center; align-items: center " data-svelte-h="svelte-pbac0q"><p class="line"></p></div> <div style="text-align: center"><br> <br> <h2 data-svelte-h="svelte-1x916c8">Email me</h2> <a${add_attribute("href", mailMe, 0)}>${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Send me your request`;
    }
  })}</a></div></div></main>`;
});
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Jobs, "Page").$$render($$result, {}, {}, {})}`;
});
export {
  Page_1 as default
};
