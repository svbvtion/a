'use strict';

const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');


burger.addEventListener('click', function(e) {
	headerMenu.classList.toggle('active');
	burger.classList.toggle('active');
});


function menuTop() {
	headerMenu.style.top = header.offsetHeight + 'px';
}

menuTop()