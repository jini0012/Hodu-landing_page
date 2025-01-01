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

const explainHodu = document.querySelector(".explain-hodu");
const explainHoduBtn = explainHodu.querySelector("button");

explainHoduBtn.addEventListener("click", () => {
  const explainText = explainHodu.querySelector("p");

  explainText.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown <br />Ipsum is simply dummy text of the printing and typesetting industry.<br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br />The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.<br /> Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br />There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br /> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.<br /> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. <br />It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;
  explainText.style.maxWidth = "93.8rem";
  explainHoduBtn.style.display = "none";
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
