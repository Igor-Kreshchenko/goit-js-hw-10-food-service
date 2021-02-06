import templateFunction from './template/menu-item';
import dishes from './menu.json';

const menuListRef = document.querySelector('.js-menu');

function createMenuItemsList(dishes) {
  return templateFunction(dishes);
}

const allMenuItems = createMenuItemsList(dishes);

menuListRef.insertAdjacentHTML('beforeend', allMenuItems);
