let showPlaceholder = true;
let touches = 0;
let userInput = "";
const codes = {
  konami: "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba",
  godMode: "iddqd",
  blood: "abacabb",
};
const part1 = "Gb7D";
const part2 = "ppNa9";
const part3 = "RKBe";
const part4 = "5qDo";

const runaway = document.getElementById("runaway-btn");
const mainImage = document.getElementById("main-image");
const errorScreen = document.getElementById("error");
const boganVideo = document.getElementById("bogan-video");
const boganButton = document.getElementById("bogan-button");
const video = document.getElementById("video");

window.onload = () => {
  const selectRandomImage = `assets/images/image${Math.ceil(Math.random() * 21)}.png`;
  mainImage.src = selectRandomImage;
};

["mouseover", "click"].forEach(function (action) {
  runaway.addEventListener(action, function (event) {
    const topDistance = getRandomNumber(window.innerHeight - this.offsetHeight);
    const leftDistance = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", leftDistance).play();
    animateMove(this, "top", topDistance).play();

    touches++;
    if (touches >= 7) {
      errorScreen.style.display = "grid";
      runaway.style.display = "none";
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
  return Math.floor(Math.random() * (num + 1));
};

document.addEventListener("keydown", function (event) {
  userInput = userInput.concat(event.key);

  if (userInput === codes.konami) {
    boganVideo.style.display = "grid";
    video.play();
    userInput = "";
    setTimeout(() => {
      boganVideo.style.display = "none";
    }, 31000);
    setTimeout(() => {
      boganButton.innerHTML = `
      <a href="https://forms.gle/${part3}${part1}${part4}${part2}">
        <button class="raffleButton" >FCFS</button
      </a>`;
    }, 12000);
    setTimeout(() => {
      boganButton.remove();
    }, 13500);
  }

  if (userInput === codes.godMode) {
    window.open("https://forms.gle/spDG32ER6gvVkDNs5", "_blank", "toolbar=0,location=0,menubar=0");
    userInput = "";
  }

  if (userInput === codes.blood) {
    window.open("http://www.ouaismaisbon.ch/", "_blank", "toolbar=0,location=0,menubar=0");
    userInput = "";
  }

  if (event.key === "Escape") {
    boganVideo.style.display = "none";
    video.pause();
    video.currentTime = 0;
    userInput = "";
  }
});
