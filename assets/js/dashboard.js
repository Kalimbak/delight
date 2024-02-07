const togPay = document.querySelectorAll(".toggle-pay");
const payMethod = document.querySelectorAll(".wtmc");
const sbTab = document.querySelectorAll(".sbc");
const uBox = document.querySelectorAll(".uwd");

togPay.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Toggle class to the clicked element
    element.classList.toggle("bxs-toggle-right");

    // Toggle active class to the container with the same index as the clicked element
    payMethod[index].classList.toggle("active");
  });
});

// Add a click event listener to each sidebar element
sbTab.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Remove active class from all sidebar elements
    sbTab.forEach((stab) => {
      stab.classList.remove("active");
    });
    // Add active class to the clicked sidebar element
    element.classList.add("active");

    // Remove active class from all containers
    uBox.forEach((ucard) => {
      ucard.classList.remove("active");
    });
    // Add active class to the container with the same index as the clicked sidebar element
    uBox[index].classList.add("active");
  });
});
