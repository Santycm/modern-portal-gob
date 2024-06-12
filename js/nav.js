const menuAnimations = {
  show: "slide-in-right",
  hide: "slide-out-right",
};

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

const nav = document.querySelectorAll("#elementsNav > li");
const bgNav = document.querySelector(".header");

//Cambio de colores del nav al hacer scroll
window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop;
  if (window.innerWidth > 1200) {
    if (scroll > 300) {
      changeNavColors();
    } else if (scroll < 300) {
      resetNavColors();
    }
  } else if (window.innerWidth < 1200) {
    changeNavColors();
  }
});

[openMenuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    changeNavColors();

    if (!menu.classList.contains(menuAnimations.show)) {
      menu.classList.add(menuAnimations.show);
      menu.classList.remove(menuAnimations.hide);
    } else {
      menu.classList.add(menuAnimations.hide);
      menu.classList.remove(menuAnimations.show);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1200) {
        if (menu.classList.contains(menuAnimations.hide)) {
          menu.classList.remove(menuAnimations.hide);
        }
      }
    });
    menu.style.transition = "transform 05.s ease";
  });
});

menu.addEventListener("transitionend", (e) => {
  e.target.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.target.closest(".dropdown").classList.toggle("active");
  });
});

function changeNavColors() {
  nav.forEach(function (navElement) {
    if (navElement.classList.contains("home")) {
      return;
    } else {
      navElement.classList.add("bg-transparent");
      navElement.classList.add("text-black");
      navElement.classList.remove("bg-mainColor");
      navElement.classList.remove("text-white");
    }
  });
  bgNav.classList.add("bg-[#f2f2f2]");
  bgNav.classList.remove("bg-transparent");
}

function resetNavColors() {
  nav.forEach(function (navElement) {
    if (navElement.classList.contains("home")) {
      return;
    } else {
      navElement.classList.remove("bg-transparent");
      navElement.classList.add("bg-mainColor");
      navElement.classList.remove("text-black");
      navElement.classList.add("text-white");
    }
  });
  bgNav.classList.remove("bg-[#f2f2f2]");
  bgNav.classList.add("bg-transparent");
}