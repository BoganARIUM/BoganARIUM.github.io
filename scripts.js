const enter = document.getElementById("enter");
const videoContainer = document.getElementById("bogan-video");
const video = document.getElementById("video");

document.querySelector("button").addEventListener("click", () => {
  enter.style.display = "none";
  videoContainer.style.display = "grid";
  video.play();
});
