
const root = document.documentElement;

const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Dark / Light Mode
themeToggle.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") !== "light";

  root.setAttribute("data-theme", isLight ? "light" : "dark");

  themeToggle.textContent = isLight ? "☾" : "☼";

  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark mode" : "Switch to light mode"
  );
});

// Mobile Navigation Menu
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();
