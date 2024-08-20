

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ChYpvNxE.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BRLiKY2P.js"];
export const stylesheets = ["_app/immutable/assets/0.DBXuUzHS.css"];
export const fonts = ["_app/immutable/assets/GeistVF.p2GUc8qZ.woff2","_app/immutable/assets/GeistMonoVF.bOGSM49p.woff2"];
