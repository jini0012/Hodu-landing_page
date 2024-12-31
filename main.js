const dialog = document.getElementById("subscribe");
const showDialogBtn = document.getElementById("showDialogBtn");
const closeBtn = document.getElementById("closeBtn");

showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
  e.preventDefault();
  const scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
});

closeBtn.addEventListener("click", () => {
  dialog.close();
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);

});

const navBtn = document.querySelector(".nav-btn");
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
