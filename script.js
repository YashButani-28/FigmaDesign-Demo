document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = document.getElementById('toggle-menu');
    const navMenu = document.querySelector('.navigations');

    toggleMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close the menu when clicking anywhere outside of it
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !toggleMenu.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
});
