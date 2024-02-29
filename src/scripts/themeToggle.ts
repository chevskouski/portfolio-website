type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as Theme;
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

const theme = getInitialTheme();

if (theme === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  document.documentElement.classList.add('dark');
}

window.localStorage.setItem('theme', theme);

interface ToggleClickHandler {
  (event: MouseEvent): void;
}

const handleToggleClick: ToggleClickHandler = () => {
  const element = document.documentElement;
  element.classList.toggle("dark");
  const isDark = element.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

document.getElementById("themeToggle")?.addEventListener("click", handleToggleClick);


