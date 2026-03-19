const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
// About blocks animation on scroll
const aboutTexts = document.querySelectorAll(".about-text h3, .about-text p, .about-text a");

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      aboutTexts.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("show-text");
        }, i * 200); // delay for each line
      });
    }
  });
}, { threshold: 0.4 });

const slides = document.querySelectorAll('.slideshow img');
let current = 0;

// Function to show slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// Next & Previous Functions
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Auto Slide every 2 seconds
let slideInterval = setInterval(nextSlide, 2000);

// Manual buttons also work and reset auto-slide
document.querySelector('.next-btn').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

// Function to reset interval so auto continues after manual click
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 2000);
}
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.top = "-100px"; // hide
  } else {
    navbar.style.top = "0"; // show
  }

  lastScroll = currentScroll;
});
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {

button.addEventListener("click", ()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));
button.classList.add("active");

const filter = button.dataset.filter;

projects.forEach(project=>{

if(filter === "all" || project.dataset.category === filter){
project.style.display="flex";
}
else{
project.style.display="none";
}

});

});

});

function goBack(){
window.history.back();
}
