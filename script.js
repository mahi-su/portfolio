// simple fade-in effect
const sections = document.querySelectorAll(".section, .hero");

const reveal = () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
};

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(30px)";
    sec.style.transition = "0.8s";
});

window.addEventListener("scroll", reveal);
reveal();