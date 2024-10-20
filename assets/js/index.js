import themeDark from "./dom/theme_dark.js";

const w = window;
const d = document;
const ls = localStorage;

d.addEventListener("DOMContentLoaded", (e) => { 
  themeDark(d, w, ls);
});

