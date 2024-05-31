//============================> Loader <============================

let loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("hide");
});

//============================> Navbar <============================
let list = document.getElementById("list");
let bar = document.querySelector(".bar");

bar.addEventListener("click", () => {
  list.classList.toggle("active");
  bar.classList.toggle("close");
});

//============================>  Header Sticky <============================

window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

//============================> popup Video <============================

let btn = document.querySelector(".btn");
let video = document.querySelector(".video");
let clo = document.querySelector(".clo");

btn.addEventListener("click", () => {
  video.classList.add("active");
});

clo.addEventListener("click", () => {
  video.classList.remove("active");
});

//============================>  New Tab <============================

let tablinks = document.querySelectorAll(".serv-link .box");
let tablinkArray = Array.from(tablinks);
let tabDivs = document.querySelectorAll(".container > .srv-sec");
let tabArray = Array.from(tabDivs);

tablinkArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tablinkArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    tabArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display = "grid";
  });
});

//============================>  Tilt Effect <============================
VanillaTilt.init(document.querySelectorAll(".right img"), {
  max: 5,
  speed: 400,
});

//============================>  Tilt Effect <============================

let scroll = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scroll.classList.add("show");
  } else {
    scroll.classList.remove("show");
  }
});

scroll.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

