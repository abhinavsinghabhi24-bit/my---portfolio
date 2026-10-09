const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Mobile menu
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    menuBtn.textContent = navLinks.classList.contains("open")
        ? "✕"
        : "☰";
});

// Close menu after clicking a link
document.querySelectorAll("#nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuBtn.textContent = "☰";
    });
});

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();