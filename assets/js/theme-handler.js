// Guaranteed Theme Toggle Solution
(function() {
    // Wait for full page load
    window.addEventListener('load', function() {
        // Get elements
        const html = document.documentElement;
        const body = document.body;
        const toggle = document.getElementById('theme-toggle');
        const mobileToggle = document.getElementById('theme-toggle-mobile');
        
        // Apply theme forcefully
        function setTheme(isDark) {
            if (isDark) {
                html.classList.add('dark');
                body.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                html.classList.remove('dark');
                body.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
            updateIcons(isDark);
        }
        
        // Update icons
        function updateIcons(isDark) {
            const icons = document.querySelectorAll('.fa-moon, .fa-sun');
            icons.forEach(icon => {
                if (icon.classList.contains('fa-moon')) {
                    icon.style.display = isDark ? 'none' : 'block';
                } else {
                    icon.style.display = isDark ? 'block' : 'none';
                }
            });
        }
        
        // Initialize
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);
        
        // Add event listeners
        if (toggle) {
            toggle.addEventListener('click', function() {
                setTheme(!html.classList.contains('dark'));
            });
        }
        
        if (mobileToggle) {
            mobileToggle.addEventListener('click', function() {
                setTheme(!html.classList.contains('dark'));
            });
        }
    });
})();