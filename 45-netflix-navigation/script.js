const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav')

openBtn.addEventListener('click', () => {
    navs.forEach(element => element.classList.add('visible'));
})

closeBtn.addEventListener('click', () => {
    navs.forEach(element => element.classList.remove('visible'));
})