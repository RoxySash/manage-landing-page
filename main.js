
const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.style.width = "400px";
  hamburgerBtn.style.display = "none";
  closeBtn.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.width = "0";
  closeBtn.style.display = "none";
  hamburgerBtn.style.display = "flex";
});