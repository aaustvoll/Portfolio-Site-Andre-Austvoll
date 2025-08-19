function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

window.addEventListener("DOMContentLoaded", function () {
  const stage = document.getElementById("stage");
  const slides = stage.querySelectorAll("a");
  let current = 0;
  const fadeDuration = 1000;   // 1s, matches CSS transition
  const displayTime = 3000;    // 3s visible before fade starts

  function showNextSlide() {
    const outgoing = slides[current];
    current = (current + 1) % slides.length;
    const incoming = slides[current];

    // put incoming underneath, make it visible
    incoming.classList.add("active");

    // fade out outgoing
    outgoing.classList.remove("active");
    outgoing.classList.add("fading");

    // cleanup fading class after transition
    setTimeout(() => {
      outgoing.classList.remove("fading");
    }, fadeDuration);
  }

  // init: show first slide
  slides[0].classList.add("active");

  // cycle
  setInterval(showNextSlide, displayTime + fadeDuration);
});
