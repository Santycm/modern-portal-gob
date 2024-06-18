var splide = new Splide(".slider__home", {
  classes: {
    arrows: "splide__arrows",
    arrow: "rounded-full",
    prev: "splide__arrow--prev absolute !left-5 top-1/3 transform-translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem]  flex items-center justify-center fill-black bg-white bg-opacity-50 hover:bg-opacity-80 shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] lg:[&>svg]:w-[3rem] lg:min-w-[4rem] lg:h-[4rem] ",
    next: "splide__arrow--next absolute !right-5 top-1/3 transform-translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem]  flex items-center justify-center fill-black bg-white bg-opacity-50 hover:bg-opacity-80 shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] lg:[&>svg]:w-[3rem] lg:min-w-[4rem] lg:h-[4rem]",
    pagination: "splide__pagination  focus:!outline-none",
    page: "splide__pagination__page border-2 border-solid  w-3 h-3  lg:w-4 lg:h-4 shadow-md focus:!outline-none",
  },
  rewind: true,
  autoplay: "play",
});
splide.mount();

var splide = new Splide(".destacados", {
  perPage: 1,
  gap: ".5rem",
  perMove: 1,
  rewind: true,
  pagination: true,
  classes: {
    arrows: "splide__arrows ",
    arrow: "border-2 ",
    prev: "splide__arrow--prev border-white border-2 rounded-xl flex items-center justify-center focus:!outline-none hover:bg-white [&>svg]:p-2 [&>svg]:fill-white hover:[&>svg]:fill-black transition-colors z-20",

    next: "splide__arrow--next border-white border-2 rounded-xl flex items-center justify-center focus:!outline-none hover:bg-white [&>svg]:p-2 [&>svg]:fill-white hover:[&>svg]:fill-black transition-colors z-20",

    pagination: "splide__pagination gap-1 lg:flex justify-center hidden",
    page: "splide__pagination__page border-2 border-solid  w-4 h-4  border-white",
  },
  autoplay: "play",
});
splide.mount();

var splide = new Splide(".slider__services", {
  classes: {
    arrows: " ",
    arrow: "rounded-full",
    prev: "splide__arrow--prev absolute !left-5 top-1/2 transform -translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center  shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] z-20",
    next: "splide__arrow--next absolute !right-5 top-1/2 transform -translate-y-1/2 min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] z-20",
    pagination: "splide__pagination flex  gap-1",
    page: "splide__pagination__page border-2 border-solid !bg-transparent w-2 h-2 shadow-md flex",
  },
  rewind: true,
  autoplay: "play",
});
splide.mount();

var splide = new Splide(".patrocinadores", {
  breakpoints: {
    1920: {
      perPage: 6,
      gap: ".5rem",
    },
    1440: {
      perPage: 6,
      gap: ".5rem",
    },
    1280: {
      perPage: 5,
    },
    1024: {
      perPage: 5,
      gap: ".5rem",
    },
    960: {
      perPage: 4,
      gap: ".5rem",
    },
    720: {
      perPage: 4,
      gap: ".5rem",
    },
    640: {
      perPage: 3,
      gap: ".5rem",
    },
    480: {
      perPage: 1,
      gap: ".5rem",
    },
  },
  perPage: 4,
  gap: ".5rem",
  perMove: 1,
  autoplay: "play",
  rewind: true,
  pagination: false,
  classes: {
    arrows: "splide__arrows",
    arrow: "rounded-full",
    prev: "splide__arrow--prev absolute !left-[-3rem] scale-x-[1] top-[0.5rem] lg:top-[2rem] min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center focus:!outline-none [&>svg]:w-[1rem] z-20",
    next: "splide__arrow--next absolute !right-[-3rem] top-[0.5rem] lg:top-[2rem] min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center focus:!outline-none [&>svg]:w-[1rem] z-20",
  },
});
splide.mount();

/*Tabs redes sociales */

let tabs = document.querySelector("#tabs");

tabs.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.closest(".tabRedes")) {
    let tabSelected = e.target.closest(".tabRedes").dataset.target;
    let tabSelected2 = e.target.closest(".tabRedes");

    let tabLater = document.querySelector(".activeTab");

    tabLater.classList.remove("activeTab");
    tabLater.classList.remove("bg-mainColor");
    tabLater.classList.add("text-black");

    tabSelected2.classList.add("activeTab");
    tabSelected2.classList.remove("text-black");
    tabSelected2.classList.add("text-white");
    tabSelected2.classList.add("bg-mainColor");

    let itemsRedes = [...document.querySelectorAll(".itemRed")];

    for (const i in itemsRedes) {
      if (tabSelected == itemsRedes[i].dataset.select) {
        itemsRedes[i].classList.remove("hidden");
      } else {
        itemsRedes[i].classList.add("hidden");
      }
    }
  }
});

//button up

const btnUp = document.getElementById("btnUp");

btnUp.addEventListener("mouseover", () => {
  btnUp.lastChild.textContent = "Volver arriba";
});

btnUp.addEventListener("mouseout", () => {
  btnUp.lastChild.textContent = "";
});

window.addEventListener("scroll", () => {
  btnUpVisible();
});

function btnUpVisible() {
  if (document.documentElement.scrollTop > 0) {
    btnUp.classList.remove("hidden");
    btnUp.classList.add("flex");
  } else {
    btnUp.classList.add("hidden");
    btnUp.classList.remove("flex");
  }
}

//Comprobar la posicion de lapagina para mostrar o no el boton al ser recargada
btnUpVisible();

btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  btnUp.lastChild.textContent = "";
});
