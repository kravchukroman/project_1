const banner = document.querySelector("div");
const button = document.querySelector("button");
function showBanner() {
  banner.style.opacity = 1;
}
button.addEventListener("click", showBanner);
