import 'kleur/colors';
import { o as decodeKey } from './chunks/astro/server_B-FBJI0r.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DgGFR4vW.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/roujin/Workspace/portfolio-daryi/","cacheDir":"file:///home/roujin/Workspace/portfolio-daryi/node_modules/.astro/","outDir":"file:///home/roujin/Workspace/portfolio-daryi/dist/","srcDir":"file:///home/roujin/Workspace/portfolio-daryi/src/","publicDir":"file:///home/roujin/Workspace/portfolio-daryi/public/","buildClientDir":"file:///home/roujin/Workspace/portfolio-daryi/dist/client/","buildServerDir":"file:///home/roujin/Workspace/portfolio-daryi/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"en/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"es/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.CjxRTkJi.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://portfolio-daryi.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/roujin/Workspace/portfolio-daryi/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/roujin/Workspace/portfolio-daryi/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["/home/roujin/Workspace/portfolio-daryi/src/pages/es/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_k6raD5LW.mjs","/home/roujin/Workspace/portfolio-daryi/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C_pzFR-o.mjs","@astrojs/react/client.js":"_astro/client.Bx7k8SOM.js","/home/roujin/Workspace/portfolio-daryi/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BV7eQIjR.js","/home/roujin/Workspace/portfolio-daryi/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DYbwl19l.js","/home/roujin/Workspace/portfolio-daryi/src/components/Carousel.astro?astro&type=script&index=0&lang.ts":"_astro/Carousel.astro_astro_type_script_index_0_lang.fuMR92NP.js","/home/roujin/Workspace/portfolio-daryi/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.5eW6BZPc.js","/home/roujin/Workspace/portfolio-daryi/src/components/Projects.astro?astro&type=script&index=0&lang.ts":"_astro/Projects.astro_astro_type_script_index_0_lang.CsezrBTR.js","/home/roujin/Workspace/portfolio-daryi/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.ZC42_t-q.js","/home/roujin/Workspace/portfolio-daryi/src/components/SmokeParticles.astro?astro&type=script&index=0&lang.ts":"_astro/SmokeParticles.astro_astro_type_script_index_0_lang.DXNUMiZM.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.CjxRTkJi.css","/Danilo_Arenas_Yi_Resume.pdf","/favicon.svg","/google9cbdf30b6258200b.html","/robots.txt","/_astro/Carousel.astro_astro_type_script_index_0_lang.fuMR92NP.js","/_astro/Footer.astro_astro_type_script_index_0_lang.5eW6BZPc.js","/_astro/Header.astro_astro_type_script_index_0_lang.ZC42_t-q.js","/_astro/Layout.astro_astro_type_script_index_0_lang.DYbwl19l.js","/_astro/Projects.astro_astro_type_script_index_0_lang.CsezrBTR.js","/_astro/ScrollTrigger.BWsqEc1I.js","/_astro/SmokeParticles.astro_astro_type_script_index_0_lang.DXNUMiZM.js","/_astro/client.Bx7k8SOM.js","/_astro/index.DKtf60Sy.js","/_astro/index.astro_astro_type_script_index_0_lang.BV7eQIjR.js","/images/danilo-360-turn/ezgif-frame-001.jpg","/images/danilo-360-turn/ezgif-frame-002.jpg","/images/danilo-360-turn/ezgif-frame-003.jpg","/images/danilo-360-turn/ezgif-frame-004.jpg","/images/danilo-360-turn/ezgif-frame-005.jpg","/images/danilo-360-turn/ezgif-frame-006.jpg","/images/danilo-360-turn/ezgif-frame-007.jpg","/images/danilo-360-turn/ezgif-frame-008.jpg","/images/danilo-360-turn/ezgif-frame-009.jpg","/images/danilo-360-turn/ezgif-frame-010.jpg","/images/danilo-360-turn/ezgif-frame-011.jpg","/images/danilo-360-turn/ezgif-frame-012.jpg","/images/danilo-360-turn/ezgif-frame-013.jpg","/images/danilo-360-turn/ezgif-frame-014.jpg","/images/danilo-360-turn/ezgif-frame-015.jpg","/images/danilo-360-turn/ezgif-frame-016.jpg","/images/danilo-360-turn/ezgif-frame-017.jpg","/images/danilo-360-turn/ezgif-frame-018.jpg","/images/danilo-360-turn/ezgif-frame-019.jpg","/images/danilo-360-turn/ezgif-frame-020.jpg","/images/danilo-360-turn/ezgif-frame-021.jpg","/images/danilo-360-turn/ezgif-frame-022.jpg","/images/danilo-360-turn/ezgif-frame-023.jpg","/images/danilo-360-turn/ezgif-frame-024.jpg","/images/danilo-360-turn/ezgif-frame-025.jpg","/images/danilo-360-turn/ezgif-frame-026.jpg","/images/danilo-360-turn/ezgif-frame-027.jpg","/images/danilo-360-turn/ezgif-frame-028.jpg","/images/danilo-360-turn/ezgif-frame-029.jpg","/images/danilo-360-turn/ezgif-frame-030.jpg","/images/danilo-360-turn/ezgif-frame-031.jpg","/images/danilo-360-turn/ezgif-frame-032.jpg","/images/danilo-360-turn/ezgif-frame-033.jpg","/images/danilo-360-turn/ezgif-frame-034.jpg","/images/danilo-360-turn/ezgif-frame-035.jpg","/images/danilo-360-turn/ezgif-frame-036.jpg","/images/danilo-360-turn/ezgif-frame-037.jpg","/images/danilo-360-turn/ezgif-frame-038.jpg","/images/danilo-360-turn/ezgif-frame-039.jpg","/images/danilo-360-turn/ezgif-frame-040.jpg","/images/danilo-360-turn/ezgif-frame-041.jpg","/images/danilo-360-turn/ezgif-frame-042.jpg","/images/danilo-360-turn/ezgif-frame-043.jpg","/images/danilo-360-turn/ezgif-frame-044.jpg","/images/danilo-360-turn/ezgif-frame-045.jpg","/images/danilo-360-turn/ezgif-frame-046.jpg","/images/danilo-360-turn/ezgif-frame-047.jpg","/images/danilo-360-turn/ezgif-frame-048.jpg","/images/danilo-360-turn/ezgif-frame-049.jpg","/images/danilo-360-turn/ezgif-frame-050.jpg","/images/danilo-360-turn/ezgif-frame-051.jpg","/images/danilo-360-turn/ezgif-frame-052.jpg","/images/danilo-360-turn/ezgif-frame-053.jpg","/images/danilo-360-turn/ezgif-frame-054.jpg","/images/danilo-360-turn/ezgif-frame-055.jpg","/images/danilo-360-turn/ezgif-frame-056.jpg","/images/danilo-360-turn/ezgif-frame-057.jpg","/images/danilo-360-turn/ezgif-frame-058.jpg","/images/danilo-360-turn/ezgif-frame-059.jpg","/images/danilo-360-turn/ezgif-frame-060.jpg","/images/danilo-360-turn/ezgif-frame-061.jpg","/images/danilo-360-turn/ezgif-frame-062.jpg","/images/danilo-360-turn/ezgif-frame-063.jpg","/images/danilo-360-turn/ezgif-frame-064.jpg","/images/danilo-360-turn/ezgif-frame-065.jpg","/images/danilo-360-turn/ezgif-frame-066.jpg","/images/danilo-360-turn/ezgif-frame-067.jpg","/images/danilo-360-turn/ezgif-frame-068.jpg","/images/danilo-360-turn/ezgif-frame-069.jpg","/images/danilo-360-turn/ezgif-frame-070.jpg","/images/danilo-360-turn/ezgif-frame-071.jpg","/images/danilo-360-turn/ezgif-frame-072.jpg","/images/danilo-360-turn/ezgif-frame-073.jpg","/images/danilo-360-turn/ezgif-frame-074.jpg","/images/danilo-360-turn/ezgif-frame-075.jpg","/images/danilo-360-turn/ezgif-frame-076.jpg","/images/danilo-360-turn/ezgif-frame-077.jpg","/images/danilo-360-turn/ezgif-frame-078.jpg","/images/danilo-360-turn/ezgif-frame-079.jpg","/images/danilo-360-turn/ezgif-frame-080.jpg","/images/danilo-360-turn/ezgif-frame-081.jpg","/images/danilo-360-turn/ezgif-frame-082.jpg","/images/danilo-360-turn/ezgif-frame-083.jpg","/images/danilo-360-turn/ezgif-frame-084.jpg","/images/danilo-360-turn/ezgif-frame-085.jpg","/images/danilo-360-turn/ezgif-frame-086.jpg","/images/danilo-360-turn/ezgif-frame-087.jpg","/images/danilo-360-turn/ezgif-frame-088.jpg","/images/danilo-360-turn/ezgif-frame-089.jpg","/images/danilo-360-turn/ezgif-frame-090.jpg","/images/danilo-360-turn/ezgif-frame-091.jpg","/images/danilo-360-turn/ezgif-frame-092.jpg","/images/danilo-360-turn/ezgif-frame-093.jpg","/images/danilo-360-turn/ezgif-frame-094.jpg","/images/danilo-360-turn/ezgif-frame-095.jpg","/images/danilo-360-turn/ezgif-frame-096.jpg","/images/danilo-360-turn/ezgif-frame-097.jpg","/images/danilo-360-turn/ezgif-frame-098.jpg","/images/danilo-360-turn/ezgif-frame-099.jpg","/images/danilo-360-turn/ezgif-frame-100.jpg","/images/danilo-360-turn/ezgif-frame-101.jpg","/images/danilo-360-turn/ezgif-frame-102.jpg","/images/danilo-360-turn/ezgif-frame-103.jpg","/images/danilo-360-turn/ezgif-frame-104.jpg","/images/danilo-360-turn/ezgif-frame-105.jpg","/images/danilo-360-turn/ezgif-frame-106.jpg","/images/danilo-360-turn/ezgif-frame-107.jpg","/images/danilo-360-turn/ezgif-frame-108.jpg","/images/danilo-360-turn/ezgif-frame-109.jpg","/images/danilo-360-turn/ezgif-frame-110.jpg","/images/danilo-360-turn/ezgif-frame-111.jpg","/images/danilo-360-turn/ezgif-frame-112.jpg","/images/danilo-360-turn/ezgif-frame-113.jpg","/images/danilo-360-turn/ezgif-frame-114.jpg","/images/danilo-360-turn/ezgif-frame-115.jpg","/images/danilo-360-turn/ezgif-frame-116.jpg","/images/danilo-360-turn/ezgif-frame-117.jpg","/images/danilo-360-turn/ezgif-frame-118.jpg","/images/danilo-360-turn/ezgif-frame-119.jpg","/images/danilo-360-turn/ezgif-frame-120.jpg","/images/danilo-360-turn/ezgif-frame-121.jpg","/images/danilo-360-turn/ezgif-frame-122.jpg","/images/danilo-360-turn/ezgif-frame-123.jpg","/images/danilo-360-turn/ezgif-frame-124.jpg","/images/danilo-360-turn/ezgif-frame-125.jpg","/images/danilo-360-turn/ezgif-frame-126.jpg","/images/danilo-360-turn/ezgif-frame-127.jpg","/images/danilo-360-turn/ezgif-frame-128.jpg","/images/danilo-360-turn/ezgif-frame-129.jpg","/images/danilo-360-turn/ezgif-frame-130.jpg","/images/danilo-360-turn/ezgif-frame-131.jpg","/images/danilo-360-turn/ezgif-frame-132.jpg","/images/danilo-360-turn/ezgif-frame-133.jpg","/images/danilo-360-turn/ezgif-frame-134.jpg","/images/danilo-360-turn/ezgif-frame-135.jpg","/images/danilo-360-turn/ezgif-frame-136.jpg","/images/danilo-360-turn/ezgif-frame-137.jpg","/images/danilo-360-turn/ezgif-frame-138.jpg","/images/danilo-360-turn/ezgif-frame-139.jpg","/images/danilo-360-turn/ezgif-frame-140.jpg","/images/danilo-360-turn/ezgif-frame-141.jpg","/images/danilo-360-turn/ezgif-frame-142.jpg","/images/danilo-360-turn/ezgif-frame-143.jpg","/images/danilo-360-turn/ezgif-frame-144.jpg","/images/danilo-360-turn/ezgif-frame-145.jpg","/images/danilo-360-turn/ezgif-frame-146.jpg","/images/danilo-360-turn/ezgif-frame-147.jpg","/images/danilo-360-turn/ezgif-frame-148.jpg","/images/danilo-360-turn/ezgif-frame-149.jpg","/images/danilo-360-turn/ezgif-frame-150.jpg","/images/danilo-360-turn/ezgif-frame-151.jpg","/images/danilo-360-turn/ezgif-frame-152.jpg","/images/danilo-360-turn/ezgif-frame-153.jpg","/images/danilo-360-turn/ezgif-frame-154.jpg","/images/danilo-360-turn/ezgif-frame-155.jpg","/images/danilo-360-turn/ezgif-frame-156.jpg","/images/danilo-360-turn/ezgif-frame-157.jpg","/images/danilo-360-turn/ezgif-frame-158.jpg","/images/danilo-360-turn/ezgif-frame-159.jpg","/images/danilo-360-turn/ezgif-frame-160.jpg","/images/particles/Particles.png","/en/index.html","/es/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always-no-redirect","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"cof0N3ZmgZnYqXVbNEC3cCbW0Sfa5bxYsaJ+as4v/kU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
