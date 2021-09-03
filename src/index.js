import menuTpl from './templates/menu.hbs';
import menuList from './menu.json';

const refs = {
  switchTheme: document.querySelector('#theme-switch-toggle'),
  mainTheme: document.querySelector('body'),
  menu: document.querySelector('.js-menu'),
};

refs.switchTheme.addEventListener('change', onSwitchTheme);

function onSwitchTheme() {
  if (!refs.mainTheme.classList.contains('dark-theme')) {
    refs.mainTheme.classList.add('dark-theme');
    refs.mainTheme.classList.remove('light-theme');
  } else {
    refs.mainTheme.classList.remove('dark-theme');
    refs.mainTheme.classList.add('light-theme');
  }
}

refs.switchTheme.addEventListener('change', onDarkTheme);
loadDarkTheme();

function onDarkTheme() {
  refs.switchTheme.checked
    ? localStorage.setItem('darkTheme', refs.switchTheme.checked)
    : localStorage.removeItem('darkTheme', refs.switchTheme.checked);
}

function loadDarkTheme() {
  const sevedTheme = JSON.parse(localStorage.getItem('darkTheme'));
  if (sevedTheme) {
    refs.switchTheme.checked = true;
    refs.mainTheme.classList.add('dark-theme');
  }
}

const menuMarkup = createMenuMarkap(menuList);
refs.menu.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkap(menuList) {
  return menuList.map(menuTpl).join('');
}
