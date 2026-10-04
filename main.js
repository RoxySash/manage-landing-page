const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

const emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("inputArea").value;
  const errMsg = document.getElementById("errorMessage");

  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (pattern.test(email)) {
    errMsg.style.display = "none";
    alert("Email is valid! Form Submitted.");
    document.getElementById("emailForm").reset();
  } else {
    errMsg.style.display = "block";
    errMsg.style.color = "red";
    errMsg.style.fontSize = "small";
    errMsg.textContent = "Please enter a valid email.";
  }
});

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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
