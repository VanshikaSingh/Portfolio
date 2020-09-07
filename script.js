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

/* Portfolio slider*/
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
