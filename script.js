// script.js

document.addEventListener("DOMContentLoaded", function () {
    const animateMe = document.getElementById("animate-me");

    window.addEventListener("scroll", function () {
        const elementPosition = animateMe.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (elementPosition < screenPosition) {
            animateMe.style.opacity = "1";
            animateMe.style.transform = "translateY(0)";
        }
    });
});
