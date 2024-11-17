// DOM Elements

const carouselContainer = document.querySelector('.carousel__container');
const slideImages = document.querySelectorAll('.slide__image');
const backButton = document.querySelector('.back__button');
const nextButton = document.querySelector('.next__button');
const slides = carouselContainer.querySelectorAll('.slide');
const positionButtons = document.querySelectorAll('.position__button');

let slidePosition = 0;

// Functions

// Go forward one slide
function next() {
  if (slidePosition <= slides.length - 2) {
    slidePosition++;

    slides.forEach((slide) => {
      slide.style.transform = `translateX(calc(-${slidePosition * 100}% - 1rem))`;
    });
  }
}

// Go back one slide
function back() {
  slidePosition--;

  slides.forEach((slide) => {
    slide.style.transform = `translateX(calc(-${slidePosition * 100}% - 1rem))`;
  });
}

function jumpToSlide(position) {
  slidePosition = position;

  slides.forEach((slide) => {
    slide.style.transform = `translateX(calc(-${slidePosition * 100}% - 1rem))`;
  });
}

// Event listeners
nextButton.addEventListener('click', () => {
  next();
});

backButton.addEventListener('click', () => {
  back();
});

positionButtons.forEach((positionButton) => {
  positionButton.addEventListener('click', (e) => {
    position = e.target.textContent - 1;
    console.log('position', position);

    jumpToSlide(position);
  });
});
