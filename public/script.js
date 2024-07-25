//Icons
const sunIcon = document.querySelector("#soleil");
const moonIcon = document.querySelector("#lune");
//Theme Var:
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

console.log(userTheme);
console.log(systemTheme);

//Icons toggling:

const iconsToggle = () => {
  sunIcon.classList.toggle("invisible");
  moonIcon.classList.toggle("invisible");
};

//Initial Theme check:
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("invisible");
    return;
  }
  sunIcon.classList.add("invisible");
};

// Manual Theme Switch:

function themeSwitch() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconsToggle();
    return;
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconsToggle();
  }
}

// Call theme switch by click
sunIcon.addEventListener("click", themeSwitch);

// moonIcon.addEventListener("click", themeSwitch);

// Call theme check on page load
themeCheck();
