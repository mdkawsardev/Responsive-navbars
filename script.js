let toggleBtn = document.querySelector('button');
let menuBar = document.querySelector('.menu');
let menuItem = Array.from(menuBar.querySelectorAll('ul li a'));
menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        menuItem.forEach((sItem) => {
            sItem.classList.remove('active')
        })
        item.classList.add('active')
    })
})
const btnCount = () => {
    let point = 0;
    toggleBtn.addEventListener('click', () => {
    point++;
    if(point % 2 !== 0) {
        toggleBtn.classList.add('active');
        menuBar.classList.add('d-block');
    } else {
        toggleBtn.classList.remove('active');
        menuBar.classList.remove('d-block');
    }
})
}
btnCount()