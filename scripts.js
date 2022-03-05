let showPlaceholder = true;
let touches = 0;
let userInput = "";
let valid = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";

const runaway = document.getElementById("runaway-btn");
const errorScreen = document.getElementById("error");
const boganVideo = document.getElementById("bogan-video");
const video = document.getElementById("video");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc",
  });

["mouseover", "click"].forEach(function (el) {
  runaway.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();

    touches++;
    if (touches >= 5) {
      errorScreen.style.zIndex = "2";
      errorScreen.style.opacity = "1";
    }
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

document.addEventListener("keydown", function (event) {
  userInput = userInput.concat(event.key);
  if (userInput === valid) {
    boganVideo.style.zIndex = "3";
    boganVideo.style.opacity = "1";
    video.play();
    setTimeout(() => {
      userInput = "";
      boganVideo.style.zIndex = "-2";
      boganVideo.style.opacity = "0";
    }, 31000);
  }
});
