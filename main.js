const subscribeForm = document.querySelector(".subscribe-form");
const subscribeDialog = document.querySelector(".subscribe-dialog");
const closeBtn = document.querySelector(".close-dialog-btn");

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.body.style.overflow = "hidden";
  subscribeDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  document.body.style.overflow = "";
  subscribeDialog.close();
});

const navBtn = document.querySelector(".mobile-nav-btn");
const headerNav = document.querySelector("header nav");

navBtn.addEventListener("click", () => {
  headerNav.classList.toggle("nav-active");
  if (headerNav.classList.contains("nav-active")) {
    navBtn.querySelector("img").src = "./img/arrow-right.svg";
    navBtn.style.right = "50vw";
  } else {
    navBtn.querySelector("img").src = "./img/menu.svg";
    navBtn.style.right = "2rem";
  }
});
