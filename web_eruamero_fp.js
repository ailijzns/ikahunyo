const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
});

// JavaScript for smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const viewBtn = document.getElementById("viewResumeBtn");
    const modal = document.getElementById("resumeModal");
    const closeBtn = document.querySelector(".close");
    const resumeImg = document.getElementById("resumeImage");

    viewBtn.onclick = function () {
        modal.style.display = "block";
        resumeImg.src = "resume.png";
    }

    closeBtn.onclick = function () {
        modal.style.display = "none";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
});
