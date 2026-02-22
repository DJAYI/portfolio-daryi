import { e as createAstro, f as createComponent, r as renderTemplate, l as renderScript, h as addAttribute, n as renderHead, u as unescapeHTML } from '../chunks/astro/server_B-FBJI0r.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://portfolio-daryi.vercel.app");
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const SITE_URL = "https://portfolio-daryi.vercel.app";
  const preferredLocale = Astro2.preferredLocale;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Danilo Arenas Yi \u2014 Fullstack Developer Portfolio</title><meta name="description" content="Fullstack Developer Portfolio of Danilo Arenas Yi (DJAYI). Specializing in React, Laravel, TypeScript. Choose your preferred language."><meta name="keywords" content="Danilo Arenas Yi, DJAYI, Fullstack Developer, Portfolio, Software Engineer, React, Laravel, TypeScript"><meta name="author" content="Danilo Arenas Yi"><meta name="robots" content="index, follow"><meta name="theme-color" content="#f5f5f5"><!-- Canonical & Hreflang --><link rel="canonical"', '><link rel="alternate" hreflang="en"', '><link rel="alternate" hreflang="es"', '><link rel="alternate" hreflang="x-default"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title" content="Danilo Arenas Yi \u2014 Fullstack Developer"><meta property="og:description" content="Fullstack Developer Portfolio of Danilo Arenas Yi (DJAYI). React, Laravel, TypeScript specialist."><meta property="og:image"', '><meta property="og:site_name" content="Danilo Arenas Yi \u2014 Portfolio"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Danilo Arenas Yi \u2014 Fullstack Developer"><meta name="twitter:description" content="Fullstack Developer Portfolio of Danilo Arenas Yi (DJAYI)."><meta name="twitter:image"', '><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Michroma&display=swap" rel="stylesheet"><!-- Structured Data (JSON-LD) --><script type="application/ld+json">', '<\/script><meta name="generator"', ">", '</head> <body class="m-0 p-0 overflow-hidden"> <!-- Hint del idioma preferido detectado en el servidor --> <input type="hidden" id="preferred-locale"', '> <div id="lang-selector" class="fixed inset-0 z-50 flex overflow-hidden" style="visibility: hidden;"> <!-- EN side --> <button id="en-side" class="lang-side h-full bg-neutral-100 flex items-center justify-center cursor-pointer border-none outline-none overflow-hidden" style="width: 50%;" data-lang="en"> <div class="text-center pointer-events-none select-none"> <span class="font-header text-7xl md:text-[10rem] text-neutral-900 block lang-text leading-none">\nEn\n</span> <p class="font-michroma text-sm md:text-lg text-neutral-500 mt-4 md:mt-6 lang-sub">\nEnglish\n</p> </div> </button> <!-- ES side --> <button id="es-side" class="lang-side h-full bg-neutral-900 flex items-center justify-center cursor-pointer border-none outline-none overflow-hidden" style="width: 50%;" data-lang="es"> <div class="text-center pointer-events-none select-none"> <span class="font-header text-7xl md:text-[10rem] text-neutral-100 block lang-text leading-none">\nEs\n</span> <p class="font-michroma text-sm md:text-lg text-neutral-400 mt-4 md:mt-6 lang-sub">\nEspa\xF1ol\n</p> </div> </button> </div> ', " </body> </html>"])), addAttribute(`${SITE_URL}/`, "href"), addAttribute(`${SITE_URL}/en/`, "href"), addAttribute(`${SITE_URL}/es/`, "href"), addAttribute(`${SITE_URL}/`, "href"), addAttribute(`${SITE_URL}/`, "content"), addAttribute(`${SITE_URL}/og-image.jpg`, "content"), addAttribute(`${SITE_URL}/og-image.jpg`, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Danilo Arenas Yi \u2014 Portfolio",
    "url": SITE_URL,
    "inLanguage": ["es", "en"],
    "author": {
      "@type": "Person",
      "name": "Danilo Arenas Yi",
      "alternateName": "DJAYI",
      "jobTitle": "Fullstack Developer",
      "sameAs": [
        "https://www.linkedin.com/in/daryi/",
        "https://github.com/DJAYI"
      ]
    }
  })), addAttribute(Astro2.generator, "content"), renderHead(), addAttribute(preferredLocale ?? "", "value"), renderScript($$result, "/home/roujin/Workspace/portfolio-daryi/src/pages/index.astro?astro&type=script&index=0&lang.ts"));
}, "/home/roujin/Workspace/portfolio-daryi/src/pages/index.astro", void 0);

const $$file = "/home/roujin/Workspace/portfolio-daryi/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
