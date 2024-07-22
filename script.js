document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Check if the current URL is not the root path
    if (window.location.pathname !== '/') {
        // Show the 404 section and hide the other sections
        document.getElementById('not-found').classList.remove('hidden');
        document.querySelectorAll('section:not(#not-found)').forEach(section => {
            section.classList.add('hidden');
        });
    }

    // Swiper and other functionality
    // ...
});
