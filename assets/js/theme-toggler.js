// Enhanced theme toggler with icon sync
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('theme-toggle-mobile');
    const html = document.documentElement;

    const updateIcons = (isDark) => {
        const icons = [
            ...document.querySelectorAll('.theme-icon-moon'),
            ...document.querySelectorAll('.theme-icon-sun')
        ];
        
        icons.forEach(icon => {
            if (icon.classList.contains('theme-icon-moon')) {
                icon.classList.toggle('hidden', isDark);
            } else {
                icon.classList.toggle('hidden', !isDark);
            }
        });
    };

    const toggleTheme = () => {
        const isDark = !html.classList.contains('dark');
        html.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateIcons(isDark);
    };

    // Initialize theme
    const preferredTheme = localStorage.getItem('theme') || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (preferredTheme === 'dark') {
        html.classList.add('dark');
        updateIcons(true);
    }

    // Event listeners
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
});