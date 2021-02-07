const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcherRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.body;

bodyRef.classList.add(Theme.LIGHT);

themeSwitcherRef.addEventListener('change', onSwitcherClick);
saveDarkTheme();

function setDarkTheme() {
  bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
}

function setLightTheme() {
  bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
}

function onSwitcherClick() {
  if (themeSwitcherRef.checked) {
    setDarkTheme();
    localStorage.setItem('theme', Theme.DARK);
    return;
  }

  setLightTheme();
  localStorage.removeItem('theme');
}

function saveDarkTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    themeSwitcherRef.checked = true;
    setDarkTheme();
  }
}
