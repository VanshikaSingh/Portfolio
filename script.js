/*const filterButtons = document.querySelector("#filter-btns").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let i = 0; i < filterButtons.length; i++) {
      filterButtons.classList.remove("active");
    }
    this.classList.add("active");
  });
} */

//header fixed

window.onscroll = function () {
  const docScrollTop = documentElement.docScrollTop;

  if (window.innerHTML > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
};

const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; 1 < a.length; i++) {
      a[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});
