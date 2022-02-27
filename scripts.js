let showPlaceholder = true;
let touches = 0;

const button = document.getElementById("runaway-btn");
let exitButton = document.getElementById("exit");

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
    console.log(touches);
    if (touches >= 5) {
      exitButton.style.display = "inline";
    }
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
