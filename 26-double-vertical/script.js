const slideContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-side');
const slideLeft = document.querySelector('.left-side');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength -1) * 100}vh`

upButton.addEventListener('click', () => changesSlide('up'));
downButton.addEventListener('click', () => changesSlide('down'));

const changesSlide = (direction) => {
    const sliderHeight = slideContainer.clientHeight;
    if(direction === 'up') {
        activeSlideIndex ++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
}