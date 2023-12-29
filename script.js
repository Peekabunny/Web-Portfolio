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
theme && document.body.classList.add('dark-mode');

// handlers
const handleThemeToggle = () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } 
  else{
        localStorage.removeItem('theme')
    }
};

//event


themeToggleBtn.addEventListener('click', handleThemeToggle);