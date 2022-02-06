/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */

const sliderItem = document.getElementsByClassName('slider__item');
const sliderItemArr = Array.from(sliderItem);
const sliderArrowNext = document.getElementsByClassName('slider__arrow_next');
const sliderArrowPrev = document.getElementsByClassName('slider__arrow_prev');
let i = 0;

sliderArrowNext[0].onclick = function () {
  sliderItemArr[i].classList.remove('slider__item_active');
  ++i;
  if (i === sliderItemArr.length) i = 0;
  sliderItemArr[i].classList.add('slider__item_active');
};

sliderArrowPrev[0].onclick = function () {
  sliderItemArr[i].classList.remove('slider__item_active');
  --i;
  if (i === -1) i = sliderItemArr.length - 1;
  sliderItemArr[i].classList.add('slider__item_active');
};
const whatDid = document.querySelectorAll('.what-did');

whatDid.forEach((element) => {
  element.addEventListener('click', () => {
    element.querySelector('.what-did-description').classList.toggle('description-visible');
  });
});
