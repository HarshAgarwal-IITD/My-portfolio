

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Carousel functionality
const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

document.getElementById('prev').addEventListener('click', () => {
    carouselItems[currentItem].classList.add('hidden');
    currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentItem].classList.remove('hidden');
    gsap.fromTo(carouselItems[currentItem], { opacity: 0 }, { opacity: 1, duration: 1 });
});

document.getElementById('next').addEventListener('click', () => {
    carouselItems[currentItem].classList.add('hidden');
    currentItem = (currentItem + 1) % carouselItems.length;
    carouselItems[currentItem].classList.remove('hidden');
    gsap.fromTo(carouselItems[currentItem], { opacity: 0 }, { opacity: 1, duration: 1 });
});

// GSAP animations
gsap.from("header", { y: -100, opacity: 0, duration: 1 });
gsap.from("#hero h2", { x: -100, opacity: 0, duration: 1, delay: 0.5 });
gsap.from("#hero p", { x: 100, opacity: 0, duration: 1, delay: 0.7 });
