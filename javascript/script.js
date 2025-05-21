const track = document.getElementById("carouselTrack");
const slides = document.querySelectorAll("#carouselTrack > div");
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth;
let index = 1; // because we start from 1 (real first slide)
let transitioning = false;

// Start at real slide 1
track.style.transform = `translateX(-${slideWidth * index}px)`;

function moveToIndex(newIndex) {
  if (transitioning) return;
  transitioning = true;
  index = newIndex;
  track.style.transition = "transform 0.7s ease-in-out";
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (index >= totalSlides - 1) return;
  moveToIndex(index + 1);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (index <= 0) return;
  moveToIndex(index - 1);
});

track.addEventListener("transitionend", () => {
  transitioning = false;

  if (index === totalSlides - 1) {
    // Jump to real first slide
    track.style.transition = "none";
    index = 1;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  } else if (index === 0) {
    // Jump to real last slide
    track.style.transition = "none";
    index = totalSlides - 2;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }
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

function toggleSidebar() {
  const sidebar = document.getElementById('mobileSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const isOpen = sidebar.classList.contains('translate-x-0');

  if (!isOpen) {
    sidebar.classList.remove('-translate-x-full');
    sidebar.classList.add('translate-x-0');
    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden'); // Prevent scroll
  } else {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}


function toggleFAQ(button) {
  const content = button.nextElementSibling;
  const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

  if (isOpen) {
    gsap.to(content, {
      maxHeight: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut"
    });
  } else {
    gsap.set(content, { opacity: 0 });
    gsap.to(content, {
      maxHeight: 200, // adjust as needed
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut"
    });
  }
}