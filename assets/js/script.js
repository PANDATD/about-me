// ✅ Dark mode toggle with persistence
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.querySelector('.dark-toggle').textContent = isDark ? '☀️' : '🌙';
    document.querySelector('.dark-toggle').setAttribute('aria-pressed', isDark);
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

// ✅ Scroll Progress Bar & Back to Top Button
const progressBar = document.getElementById('progress-bar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    // 🎯 Update scroll progress bar
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrolled + "%";

    // 🎯 Show back-to-top button after scrolling down
    if (scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// ✅ Back to Top smooth scroll
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
