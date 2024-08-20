import { c as create_ssr_component } from "./ssr.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="button" id="button-primary">${slots.default ? slots.default({}) : ``} <span class="button-arrow" data-svelte-h="svelte-5q5ner">→</span></button>`;
});
export {
  Button as B
};
