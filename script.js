// Dark Mode Toggle
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("light");

  // Optional: Save preference to localStorage
  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

// Load user's theme preference on page load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }
};
