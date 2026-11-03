console.log("Welcome to Akul's Portfolio!");

// SCROLL REVEAL ANIMATION

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// NAVIGATION CLICK

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log("Navigation: " + link.textContent);
    });
});