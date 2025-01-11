
// Toggle mobile navigation
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".mobile-nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggleButton.addEventListener("click", function () {
        const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
        toggleButton.setAttribute("aria-expanded", !isExpanded);
        navLinks.style.display = isExpanded ? "none" : "flex";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let index = 0;

    function showSlide(i) {
        index = (i + slide.length) % slide.length;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    // Automatic sliding every 3 seconds
    setInterval(() => {
        showSlide(index + 1);
    }, 3000); // 3000 milliseconds = 3 seconds

    prev.addEventListener("click", () => showSlide(index - 1));
    next.addEventListener("click", () => showSlide(index + 1));
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let index = 0;

    function showSlide(i) {
        index = (i + slide.length) % slide.length;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    // Automatic sliding every 3 seconds
    setInterval(() => {
        showSlide(index + 1);
    }, 3000); // 3000 milliseconds = 3 seconds

    prev.addEventListener("click", () => showSlide(index - 1));
    next.addEventListener("click", () => showSlide(index + 1));
});
