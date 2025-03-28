// Guaranteed Working Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('theme-toggle');
    const mobileToggle = document.getElementById('theme-toggle-mobile');
    const html = document.documentElement;

    function setTheme(isDark) {
        if (isDark) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        updateIcons(isDark);
    }

    function updateIcons(isDark) {
        const moons = document.querySelectorAll('.fa-moon');
        const suns = document.querySelectorAll('.fa-sun');
        moons.forEach(m => m.classList.toggle('hidden', isDark));
        suns.forEach(s => s.classList.toggle('hidden', !isDark));
    }

    // Initialize
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : systemDark;
    setTheme(isDark);

    // Event listeners
    if (toggle) toggle.addEventListener('click', () => setTheme(!html.classList.contains('dark')));
    if (mobileToggle) mobileToggle.addEventListener('click', () => setTheme(!html.classList.contains('dark')));
});