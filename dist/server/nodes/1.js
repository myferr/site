

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Cvo_vuZQ.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BRLiKY2P.js","_app/immutable/chunks/entry.CcoYY5uJ.js"];
export const stylesheets = [];
export const fonts = [];
