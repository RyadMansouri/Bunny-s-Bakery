document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('mode-logo');
    const mainLogo = document.getElementById('main-logo'); // Main logo
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page filename
    const themeSuffix = getCurrentThemeSuffix(currentPage);
    const themeStyle = document.getElementById('theme-style');

    themeToggle.addEventListener('click', function() {
        if (themeStyle.getAttribute('href') === `light${themeSuffix}.css`) {
            themeStyle.setAttribute('href', `dark${themeSuffix}.css`);
            localStorage.setItem('theme', 'dark');
            // Change main logo source for dark mode
            mainLogo.src = 'WebsitePics/logo2.png';
            themeToggle.src ='WebsitePics/day-logo.png';
        } else {
            themeStyle.setAttribute('href', `light${themeSuffix}.css`);
            localStorage.setItem('theme', 'light');
            // Change main logo source for light mode
            mainLogo.src = 'WebsitePics/bunnylogo.png';
            themeToggle.src ='WebsitePics/night-logo.png';
        }
    });

    // Check for theme preference in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeStyle.setAttribute('href', `${savedTheme}${themeSuffix}.css`);
        // Set initial logo source based on saved theme
        if (savedTheme === 'light') {
            mainLogo.src = 'WebsitePics/bunnylogo.png';
            themeToggle.src ='WebsitePics/night-logo.png';
        } else {
            mainLogo.src = 'WebsitePics/logo2.png';
            themeToggle.src ='WebsitePics/day-logo.png';
        }
    }
});
    function getCurrentThemeSuffix(page) {
        if (page.includes('main')) {
            return 'main';
        } else if (page.includes('menu')) {
            return 'menu';
        } else if (page.includes('contact')) {
            return 'contact';
        } else if (page.includes('sugaries')) {
            return 'sugaries';
        } else if (page.includes('salties')) {
            return 'salties';
        } else if (page.includes('baked')) {
            return 'baked';
        } else if (page.includes('cakes')) {
            return 'cakes';
        } else if (page.includes('custom')) {
            return 'custom';
        } else if (page.includes('faq')) {
            return 'faq';
        }
        return ''; // Default to empty string
    }