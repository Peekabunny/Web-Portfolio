function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// selectors
const themeToggleBtn = document.querySelector('.theme-toggle');

// state
const theme = localStorage.getItem('theme');

// on mount
theme && document.body.classList.add(theme);

// handlers
const handleThemeToggle = () => {
  document.body.classList.toggle('dark-mode');
  var img = document.getElementById("icon");
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
    img.src = '/images/sun.png';
  } else {
    img.src = '/images/moon.png';
    localStorage.removeItem('theme');
  }
};

// events
themeToggleBtn.addEventListener('click', handleThemeToggle);




