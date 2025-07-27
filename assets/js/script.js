// ✅ Dark mode toggle with localStorage
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.querySelector('.dark-toggle').textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark);
}

// ✅ Load saved dark mode preference
window.onload = () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
        document.querySelector('.dark-toggle').textContent = '☀️';
    }
    AOS.init({ duration: 1000, once: true });
};
