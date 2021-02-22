'use strict';

const header = document.querySelector('.menu-box');
const headerMenu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');


burger.addEventListener('click', function(e) {
	headerMenu.classList.toggle('active');
	burger.classList.toggle('active');
	document.body.classList.toggle('lock');
});


function menuTop() {
	headerMenu.style.top = header.offsetHeight + 'px';
}

window.onload = menuTop()