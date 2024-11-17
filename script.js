// DOM Elements

const carouselContainer = document.querySelector('.carousel__container');
const slideImages = document.querySelectorAll('.slide__image');
const backButton = document.querySelector('.back__button');
const nextButton = document.querySelector('.next__button');

let slidePosition = 0;

// Event listeners
nextButton.addEventListener('click', (e) => {
  const slides = carouselContainer.querySelectorAll('.slide');
  if (slidePosition <= slides.length - 2) {
    slidePosition++;

    slides.forEach((slide) => {
      slide.style.transform = `translateX(calc(-${slidePosition * 100}% - 1rem))`;
    });
  }
});

backButton.addEventListener('click', (e) => {
  const slides = carouselContainer.querySelectorAll('.slide');

  slidePosition--;

  slides.forEach((slide) => {
    slide.style.transform = `translateX(calc(-${slidePosition * 100}% - 1rem))`;
  });
});
