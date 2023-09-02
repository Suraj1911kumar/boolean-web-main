// back to top and upper progress bar

// back to top
let mybutton = document.getElementById("btn-back-to-top");

let sideNav = document.getElementById("floatSide");
let sideNavbar = document.getElementById("showNav");
window.onscroll = function () {
  scrollFunction();
  myFunction();
  sidebar();
  showNav();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function sidebar() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    sideNav.style.display = "block";
  } else {
    sideNav.style.display = "none";
  }
}
function showNav() {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    sideNavbar.style.display = "none";
  }
}

// upper progress bar

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function openSide() {
  document.getElementById("showNav").style.display = "block";
}
function closeSide() {
  document.getElementById("showNav").style.display = "none";
}
