// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(
    ".course-card, .teacher-card, .testimonial-card, .feature, .stat-box, .faq-item"
).forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Smooth Scroll for Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});