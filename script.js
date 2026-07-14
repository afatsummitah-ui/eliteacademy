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
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action,{
        method:"POST",
        body:data
    });

    if(response.ok){

        toast.classList.add("show");

        form.reset();

        setTimeout(()=>{
            toast.classList.remove("show");
        },3000);

    }else{

        alert("Something went wrong!");

    }

});
