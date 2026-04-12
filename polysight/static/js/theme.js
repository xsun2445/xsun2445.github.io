// Run in <head> to avoid flash of wrong theme.

let toggleThemeSetting = () => {
  let s = determineThemeSetting();
  if (s === "system") setThemeSetting("light");
  else if (s === "light") setThemeSetting("dark");
  else setThemeSetting("system");
};

let setThemeSetting = (s) => {
  localStorage.setItem("theme", s);
  document.documentElement.setAttribute("data-theme-setting", s);
  applyTheme();
};

let applyTheme = () => {
  let theme = determineComputedTheme();
  document.documentElement.classList.add("transition");
  setTimeout(() => document.documentElement.classList.remove("transition"), 500);
  document.documentElement.setAttribute("data-theme", theme);
};

let determineThemeSetting = () => {
  let s = localStorage.getItem("theme");
  return s === "dark" || s === "light" || s === "system" ? s : "light";
};

let determineComputedTheme = () => {
  let s = determineThemeSetting();
  if (s === "system") {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return s;
};

let initTheme = () => {
  setThemeSetting(determineThemeSetting());
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("light-toggle").addEventListener("click", toggleThemeSetting);
  });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);
};
