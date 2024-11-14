document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menuLeft = document.getElementById("menu-left");

  const mainApp = document.getElementById("main-app");
  const app = document.getElementById("app");

  const navMobile = document.getElementById("nav-mobile");
  const navOptions = document.getElementById("sidebar-options");

  window.addEventListener("resize", () => {
    if (window.innerWidth < 640) {
      navMobile.innerHTML = navOptions.innerHTML;
    } else {
      navMobile.innerHTML = "";
    }
    if (app.classList.contains("app-open-menu")) {
      menuBtn.click();
    }
    dropdownFunctions();
  });

  

  if (window.innerWidth < 640) {
    navMobile.innerHTML = navOptions.innerHTML;
  } else {
    navMobile.innerHTML = "";
  }

  menuBtn.addEventListener("click", () => {
    mobileMenuFunction(menuLeft, mainApp, app, menuBtn);
  });
  dropdownFunctions();
});

const dropdownFunctions = () => {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      const dropdownMenu = dropdown.nextElementSibling;
      dropdownMenu.classList.toggle("hidden");
      if (dropdownMenu.classList.contains("hidden")) {
        dropdown.querySelectorAll("i")[1].classList.remove("!rotate-180");
        dropdown
          .querySelectorAll("i")[1]
          .classList.add("transition-transform", "duration-300");
      } else {
        dropdown
          .querySelectorAll("i")[1]
          .classList.add("!rotate-180", "transition-transform", "duration-300");
      }
    });
  });
};

const mobileMenuFunction = (menuLeft, mainApp, app, menuBtn) => {
   
  menuLeft.classList.toggle("hidden");
  mainApp.classList.toggle("app-container");
  app.classList.toggle("app-open-menu");
  if (menuBtn.innerHTML.trim() === '<i class="fas fa-times text-white"></i>') {
    menuBtn.innerHTML = '<i class="fas fa-bars text-white"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fas fa-times text-white"></i>';
  }
};
