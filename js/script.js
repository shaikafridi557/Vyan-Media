document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  const carousel = document.querySelector('.hero-carousel');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  let currentSlide = 0;
  let autoSlideInterval;

  // Show a specific slide based on index
  function showSlide(index) {
    if (index >= slides.length) {
      index = 0; // Loop back to the first slide
    } else if (index < 0) {
      index = slides.length - 1; // Ensure negative values wrap around to the last slide
    }

    // Hide all slides and remove the active class
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    dots.forEach((dot) => {
      dot.classList.remove('active');
    });

    // Show the current slide and activate the corresponding dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
  }

  // Move to the next slide
  function nextSlide() {
    showSlide(currentSlide + 1); // Go to the next slide (forward)
  }

  // Start auto-sliding with interval
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
  }

  // Stop auto-sliding when mouse enters carousel
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Prev/Next buttons
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      showSlide(currentSlide - 1); // Manually move to the previous slide
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      nextSlide(); // Just move forward on next button click
    });
  }

  // Dots navigation
  if (dots.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index); // Jump to the specific slide when a dot is clicked
      });
    });
  }

  // Auto-slide
  if (carousel) {
    startAutoSlide();
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
  }

  // Initialize first slide
  showSlide(currentSlide);
});
