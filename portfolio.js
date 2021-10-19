"use strict";
//=======================================
const myNav = document.getElementById("myNav");
const hum = document.getElementById("hum");
const mob_overlay = document.getElementById("mob_overlay");
const mob_nav_container = document.querySelector(".mob_nav_container");
const mob_nav_container_overlay = document.querySelector(
  ".mob_nav_container_overlay"
);
const mob_nav_link_container = document.querySelector(
  ".mob_nav_link_container"
);
//=============================================

// code for scroll button in head tag starts -----
let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myNav").style.top = "0px";
  } else {
    document.getElementById("myNav").style.top = "-51px";
  }
  prevScrollpos = currentScrollPos;
});
// code for scroll button in head tag ends -----

//===============================================

// code for humburger button in mob_nav starts -----
let check = "hide";
//----------------
let mob_nav_hide_visible = function (ele) {
  //function for hide/show of small screen nav container
  if (ele === "visible") {
    mob_nav_container_overlay.classList.remove("dis_block");
    mob_nav_container_overlay.classList.add("dis_none");
    mob_nav_link_container.classList.remove("mob_container_show");
    mob_nav_link_container.classList.add("mob_container_hide");
    check = "hide";
  }
  if (ele === "hide") {
    mob_nav_container_overlay.classList.remove("dis_none");
    mob_nav_container_overlay.classList.add("dis_block");
    mob_nav_link_container.classList.remove("mob_container_hide");
    mob_nav_link_container.classList.add("mob_container_show");
    check = "visible";
  }
};
// code for humburger button in mob_nav ends -----

//------------------------------------------
hum.addEventListener("click", function () {
  //calling hide/show function of mob nav for humburger icon
  mob_nav_hide_visible(check);
});
//------------------------------------------
//------------------------------------------
mob_nav_container_overlay.addEventListener("click", function () {
  //calling hide/show function of mob nav for overlay
  mob_nav_hide_visible(check);
});
//------------------------------------------
window.addEventListener("resize", function () {
  //calling hide/show function of mob nav if mob_nav is visible on screen resize hiding it
  mob_nav_hide_visible("visible");
});
//------------------------------------------

//================================================
