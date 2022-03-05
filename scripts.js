let showPlaceholder = true;
let touches = 0;

const button = document.getElementById("runaway-btn");
let errorScreen = document.getElementById("error");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc",
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();

    touches++;
    if (touches >= 5) {
      errorScreen.style.zIndex = "10";
      errorScreen.style.opacity = "1";
    }
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
