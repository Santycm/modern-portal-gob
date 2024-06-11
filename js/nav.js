const menuAnimations = {
  show: "slide-in-right",
  hide: "slide-out-right",
};

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    if (window.innerWidth < 1200) {
      showCloseMenuMobile();
    }
    menu.style.transition = "transform 05.s ease";
  });
});

function showCloseMenuMobile() {
  if (!menu.classList.contains(menuAnimations.show)) {
    menu.classList.add(menuAnimations.show);
    menu.classList.remove(menuAnimations.hide);
  } else {
    menu.classList.add(menuAnimations.hide);
    menu.classList.remove(menuAnimations.show);
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1200) {
    if (menu.classList.contains(menuAnimations.hide)) {
      menu.classList.remove(menuAnimations.hide);
    }
  }
});

menu.addEventListener("transitionend", (e) => {
  e.target.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.target.closest(".dropdown").classList.toggle("active");
  });
});
