/**
 * Signature brush carousel — auto-play, one image at a time.
 */
(function () {
  var carousel = document.getElementById('signatureCarousel');
  if (!carousel) return;

  var slides = carousel.querySelectorAll('.carousel-slide');
  var dotsContainer = document.getElementById('carouselDots');
  var current = 0;
  var intervalMs = 3500;
  var timer;

  slides.forEach(function (_, index) {
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot' + (index === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (index + 1));
    dot.addEventListener('click', function () {
      goTo(index);
      resetTimer();
    });
    dotsContainer.appendChild(dot);
  });

  var dots = dotsContainer.querySelectorAll('.carousel-dot');

  function goTo(index) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = index;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, intervalMs);
  }

  resetTimer();
})();
