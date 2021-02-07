import templateFunction from './template/menu-item';
import dishes from './menu.json';

const menuListRef = document.querySelector('.js-menu');

const allMenuItems = templateFunction(dishes);

menuListRef.insertAdjacentHTML('beforeend', allMenuItems);
