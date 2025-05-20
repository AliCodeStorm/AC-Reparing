document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');

  const slideCount = slides.length / 2; // Since we cloned them
  let currentIndex = 0;
  let isTransitioning = false;
  let autoScrollInterval;

  // Set initial position
  track.style.transform = 'translateX(0)';

  // Next slide
  function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex++;
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    if (currentIndex >= slideCount) {
      setTimeout(() => {
        track.style.transition = 'none';
        currentIndex = 0;
        track.style.transform = 'translateX(0)';
        setTimeout(() => {
          track.style.transition = 'transform 0.5s ease';
        }, 20);
      }, 1000);
    }

    setTimeout(() => {
      isTransitioning = false;
    }, 1000);
  }

  function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;

    if (currentIndex <= 0) {
      track.style.transition = 'none';
      currentIndex = slideCount;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      setTimeout(() => {
        track.style.transition = 'transform 0.5s ease';
        currentIndex--;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 20);
    } else {
      currentIndex--;
      track.style.transition = 'transform 0.5s ease';
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setTimeout(() => {
      isTransitioning = false;
    }, 1000);
  }

  function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, 3000);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  nextBtn.addEventListener('click', () => {
    stopAutoScroll();
    nextSlide();
    startAutoScroll();
  });

  prevBtn.addEventListener('click', () => {
    stopAutoScroll();
    prevSlide();
    startAutoScroll();
  });
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', stopAutoScroll);
  carousel.addEventListener('mouseleave', startAutoScroll);

  // Initialize
  startAutoScroll();
});

const container = document.getElementById('reviewsContainer');
const btnLeft = document.getElementById('scrollLeft');
const btnRight = document.getElementById('scrollRight');

const scrollAmount = 320;

btnLeft.addEventListener('click', () => {
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

function submitForm(event) {
  event.preventDefault();
  alert('Thanks for contacting us! We will get back to you shortly.');
  document.getElementById('contactForm').reset();
}

function toggleFAQ(button) {
  const expanded = button.getAttribute('aria-expanded') === 'true';

  document.querySelectorAll('section div[aria-expanded="true"]').forEach(btn => {
    if (btn !== button) {
      btn.setAttribute('aria-expanded', 'false');
      btn.nextElementSibling.style.maxHeight = null;
      btn.querySelector('svg').style.transform = '';
    }
  });

  // Toggle current
  button.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  const content = button.nextElementSibling;
  if (!expanded) {
    content.style.maxHeight = content.scrollHeight + 'px';
    button.querySelector('svg').style.transform = 'rotate(180deg)';
  } else {
    content.style.maxHeight = null;
    button.querySelector('svg').style.transform = '';
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('mobileSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.toggle('-translate-x-full');
  overlay.classList.toggle('hidden');
}