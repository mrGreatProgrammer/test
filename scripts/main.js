const burgerBtn = document.querySelector('.burger-btn');
const headerNavMenu = document.querySelector('.header__nav--menu');


burgerBtn.addEventListener('click', ()=>{
    burgerBtn.classList.toggle('opened');
    headerNavMenu.classList.toggle('opened');
});

const rangeInp = document.querySelector('#range');
const percentage = document.querySelector('.percentage');
percentage.textContent = `${rangeInp.value} %`;  

rangeInp.addEventListener('change', (e)=>{
    console.log(e.target.value);
    percentage.textContent = `${e.target.value} %`;  
})
