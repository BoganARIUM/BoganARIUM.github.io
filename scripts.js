let showPlaceholder = true;
let touches = 0;
let userInput = "";
let valid = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";

const runaway = document.getElementById("runaway-btn");
const errorScreen = document.getElementById("error");
const boganVideo = document.getElementById("bogan-video");
const video = document.getElementById("video");

["mouseover", "click"].forEach(function (action) {
  runaway.addEventListener(action, function (event) {
    const topDistance = getRandomNumber(window.innerHeight - this.offsetHeight);
    const leftDistance = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", leftDistance).play();
    animateMove(this, "top", topDistance).play();

    touches++;
    if (touches >= 7) {
      errorScreen.style.display = "grid";
    }
  });
});

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc",
  });

const getRandomNumber = (num) => {
  const value = Math.floor(Math.random() * (num + 1));
  //Have a minimum value
  return value < 300 ? value + 500 : value;
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
