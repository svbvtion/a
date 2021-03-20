 // Зачищаем все классы 'active'
const removeTabsActive = (items, box) => {
	for(let index in Array.from(items)){
		items[index].classList.remove('active')
		box[index].classList.remove('active')
	}
}

// Получаем необходимый контент (в JSON)

const getTabContent = url => {
	return fetch(url)
		.then(resp => resp.json())
}

// Добавляем полученный контент в нужный блок

const addTabContent = async (url, container) => {
	let content = await getTabContent(url)
	container.innerHTML = content;
}

// Устанавливаем состояние табов

const setupTab = (item, box) => {
	item.classList.add('active');
	box.classList.add('active');
	addTabContent(item.getAttribute('href'), box)
}


const tabsListener = (items, box, active=0) => {
	const tabsItems = document.querySelectorAll(items);
	const tabsBox = document.querySelectorAll(box);

	setupTab(tabsItems[active], tabsBox[active])
	
	tabsItems.forEach((tab, index) => {
		tab.addEventListener('click', function (e) {

			e.preventDefault()
			removeTabsActive(tabsItems, tabsBox);
			setupTab(this, tabsBox[index]);
		
		});
	})
}

export {tabsListener}