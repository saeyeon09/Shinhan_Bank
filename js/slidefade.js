window.onload = function () {
  let currentIndex = 0;
  const slider = document.querySelectorAll(".visImg");
  slider.forEach(el => el.style.opacity = "0");
  slider[0].style.opacity = "1";
  setInterval(() => {
    let nextIndex = (currentIndex + 1) % slider.length;

    slider[currentIndex].style.opacity = "0";
    slider[nextIndex].style.opacity = "1";
    slider.forEach(el => el.style.transition = "all 0.6s");
    currentIndex = nextIndex;

  }, 5000);
}