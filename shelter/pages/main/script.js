const btn = document.querySelector('.obr__pets-btn');
const modalContainer = document.querySelector('.modal-container');

btn.addEventListener('click', function(){
    modalContainer.classList.add('active')
})

// const burgerMenu = document.querySelector('.nav__burger')
// const headerList = document.querySelector('.hn__list')

burgerMenu.addEventListener('click', ()=> {
    headerList.classList.add('active')
})