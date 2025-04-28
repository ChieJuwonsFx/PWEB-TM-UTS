var currentSlide = 0;
var slides = document.querySelectorAll('.carousel-item');
var indicators = document.querySelectorAll('.carousel-indicator');
var interval = 5000;
var slideInterval;

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);

indicators.forEach(function(indicator, index) {
    indicator.addEventListener('click', function() {
        goToSlide(index);
        resetInterval();
    });
});

function startInterval() {
    slideInterval = setInterval(nextSlide, interval);
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

startInterval();

var carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
});

carousel.addEventListener('mouseleave', function() {
    startInterval();
});

function checkVisibility() {
    var elements = document.querySelectorAll('');
    
    elements.forEach(function(element) {
        var elementTop = element.getBoundingClientRect().top;
        var elementBottom = element.getBoundingClientRect().bottom;
        var viewportHeight = window.innerHeight;
        
        if (elementTop < viewportHeight && elementBottom > 0) {
            element.classList.add('visible', 'animated', 'fadeInUp');
        }
    });
}

window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});