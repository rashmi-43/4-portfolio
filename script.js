script

const themeToggle = document.getElementById("themeToggle");

// Load the saved theme
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️ Light";
}

// Toggle between dark and light themes
themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark");

    themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";

    localStorage.setItem(
        "portfolioTheme",
        isDark ? "dark" : "light"
    );
});
