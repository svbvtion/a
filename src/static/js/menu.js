const menu = (headerClass, headerMenuClass, burgerClass='.burger') => {
	const header = document.querySelector(headerClass);
	const headerMenu = document.querySelector(headerMenuClass);
	const burger = document.querySelector(burgerClass);

	headerMenu.style.top = header.offsetHeight + 'px';

	burger.addEventListener('click', (e) => {
		headerMenu.classList.toggle('active');
		burger.classList.toggle('active');
		document.body.classList.toggle('lock');
	});	
}

export {menu}