const subscribeDialog = document.querySelector(".subscribe-dialog");
const showDialogBtn = document.querySelector(".show-dialog-btn");
const closeBtn = document.querySelector(".close-dialog-btn");

showDialogBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const scrollY = window.scrollY;
  subscribeDialog.showModal();

  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
});

closeBtn.addEventListener("click", () => {
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);

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
