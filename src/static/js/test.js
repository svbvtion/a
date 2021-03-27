'use strict';

const input = document.querySelector('.inp');
const brands = document.querySelector('.brands');

const create = num => {
	let code = ''

	for(let i = 1; i <= num; i++){
		code += `<div class="brands__item brand"><span>brand-${i}</span></div>`
	}
	return code
}

input.addEventListener('change', function(e) {
	let divs = create(+this.value);
	brands.innerHTML = divs
});

