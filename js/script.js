document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const openMenuIcon = document.querySelector('.open-menu');
    const closeMenuIcon = document.querySelector('.close-menu');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        openMenuIcon.classList.toggle('hidden');
        closeMenuIcon.classList.toggle('hidden');
    });
});
