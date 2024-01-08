// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

function toggleHamburgerMenu() {
  big_wrapper.classList.toggle("active");
}

function events() {
  toggle_btn.addEventListener("click", toggleHamburgerMenu);
}

events();
