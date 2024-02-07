/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== SERVICES TABS ====================*/
function toggleUserTab() {
  document.querySelector(".hsc-user").style.right = "0";
  document.querySelector(".hsc-driver").style.left = "100%";
  document.querySelector(".hsct-d").classList.remove("hsc-tab__active");
  document.querySelector(".hsct-c").classList.add("hsc-tab__active");
}

function toggleDriverTab() {
  document.querySelector(".hsc-user").style.right = "100%";
  document.querySelector(".hsc-driver").style.left = "0";
  document.querySelector(".hsct-d").classList.add("hsc-tab__active");
  document.querySelector(".hsct-c").classList.remove("hsc-tab__active");
}

/*==================== SAFETY TABS ====================*/
function toggleSafetyUserTab() {
  document.querySelector(".sutt-driver").classList.remove("hsc-tab__active");
  document.querySelector(".sutt-user").classList.add("hsc-tab__active");
  document.querySelector(".suc-user").style.right = "0";
  document.querySelector(".suc-driver").style.left = "100%";
}

function toggleSafetyDriverTab() {
  document.querySelector(".sutt-driver").classList.add("hsc-tab__active");
  document.querySelector(".sutt-user").classList.remove("hsc-tab__active");
  document.querySelector(".suc-user").style.right = "100%";
  document.querySelector(".suc-driver").style.left = "0";
}

/*==================== NAV NENU TOGGLE ====================*/
let navMenu = document.querySelector(".nav-menu");
function toggleNavMenu() {
  navMenu.classList.toggle("toggle-nav-menu");
}

/* ------------- AUTHENTICATION MODAL [TOGGLE SIGNIN & SIGNUP] ------------- */
const authTab = document.querySelectorAll(".lfb");
const authBox = document.querySelectorAll(".lcfs");

// Add a click event listener to each sidebar element
authTab.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Remove active class from all sidebar elements
    authTab.forEach((tab) => {
      tab.classList.remove("active");
    });
    // Add active class to the clicked sidebar element
    element.classList.add("active");

    // Remove active class from all containers
    authBox.forEach((card) => {
      card.classList.remove("active");
    });
    // Add active class to the container with the same index as the clicked sidebar element
    authBox[index].classList.add("active");
  });
});

/*==================== DRIVER FORM TOGGLE ====================*/
let driverForm = document.querySelector(".dh-form");
let driverAge = document.querySelector(".dhftt-1");
let driverLicense = document.querySelector(".dhftt-2");
function toggleDform() {
  driverForm.classList.add("display-driver-form");
}

driverAge.onclick = function () {
  driverAge.classList.toggle("dhftt-active");
};

driverLicense.onclick = function () {
  driverLicense.classList.toggle("dhftt-active");
};
