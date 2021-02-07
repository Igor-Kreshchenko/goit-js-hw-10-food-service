const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcherRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.body;

bodyRef.classList.add(Theme.LIGHT);

themeSwitcherRef.addEventListener('change', onSwitcherClick);
saveDarkTheme();

function toDarkTheme() {
  bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
}

function toLightTheme() {
  bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
}

function onSwitcherClick() {
  if (themeSwitcherRef.checked) {
    toDarkTheme();
    localStorage.setItem('theme', Theme.DARK);
    return;
  }

  toLightTheme();
  localStorage.setItem('theme', Theme.LIGHT);
}

function saveDarkTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === Theme.DARK) {
    themeSwitcherRef.checked = true;
    toDarkTheme();
  }
}
