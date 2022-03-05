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

["mouseover", "click"].forEach(function (action) {
  runaway.addEventListener(action, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();

    touches++;
    if (touches >= 7) {
      errorScreen.style.display = "grid";
    }
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

document.addEventListener("keydown", function (event) {
  userInput = userInput.concat(event.key);
  if (userInput === valid) {
    boganVideo.style.display = "grid";
    video.play();
    setTimeout(() => {
      userInput = "";
      boganVideo.style.display = "none";
    }, 31000);
  }
});
