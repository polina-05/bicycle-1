let menu = document.querySelector(".menu__body");
let burger = document.querySelector(".icon-menu");
burger.onclick = function (e) {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  document.body.classList.toggle("lock");
};
