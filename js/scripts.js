function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

function initSlideshow(container, slideSelector, fadeDuration, displayTime) {
  const slides = container.querySelectorAll(slideSelector);
  if (!slides.length) return;
  let current = 0;

  function showNextSlide() {
    const outgoing = slides[current];
    current = (current + 1) % slides.length;
    const incoming = slides[current];

    incoming.classList.add("active");
    outgoing.classList.remove("active");
    outgoing.classList.add("fading");

    setTimeout(() => outgoing.classList.remove("fading"), fadeDuration);
  }

  slides[0].classList.add("active");
  setInterval(showNextSlide, displayTime + fadeDuration);
}

window.addEventListener("DOMContentLoaded", function () {
  const fadeDuration = 1000;
  const displayTime = 2000;

  const stage = document.getElementById("stage");
  if (stage) initSlideshow(stage, "a", fadeDuration, displayTime);

  const panorama = document.querySelector(".panorama-banner");
  if (panorama) initSlideshow(panorama, "img.panorama-slides", fadeDuration, displayTime);
});
