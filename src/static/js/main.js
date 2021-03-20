import {menu} from './menu.js'
import {tabsListener} from './tabs.js'


window.onload = () => {
	menu('.header', '.header__menu')
	tabsListener('.tabs__item', '.tabs__box')
}
