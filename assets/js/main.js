document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMobile = document.getElementById('nav-mobile');

    if (mobileMenuBtn && navMobile) {
        mobileMenuBtn.addEventListener('click', () => {
            navMobile.classList.toggle('active');
        });
    }

    // Dynamic Footer Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
