const btn = document.querySelector('.obr__pets-btn');
const btn1 = document.querySelector('.obr__pets-btn-1');
const btn2 = document.querySelector('.obr__pets-btn-2');
const modalContainer = document.querySelector('.modal-container');
const modalContainer1 = document.querySelector('.modal-container1');
const modalContainer2 = document.querySelector('.modal-container2');

btn.addEventListener('click', function(){
    modalContainer.classList.add('active')
})

btn1.addEventListener('click', function(){
    modalContainer1.classList.add('active-1')
})