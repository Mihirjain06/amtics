// js/loadheaderfooter.js
async function loadHeaderFooter() {
    const navbarContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');

    // Check localStorage for cached content
    const cachedNavbar = localStorage.getItem('navbar-html');
    const cachedFooter = localStorage.getItem('footer-html');

    if (cachedNavbar && cachedFooter) {
        navbarContainer.innerHTML = cachedNavbar;
        footerContainer.innerHTML = cachedFooter;
        initializeBootstrap(); // Initialize dropdowns, etc.
        return;
    }

    try {
        // Fetch navbar
        const navbarResponse = await fetch('navbar.html');
        if (!navbarResponse.ok) throw new Error('Failed to load navbar');
        const navbarHtml = await navbarResponse.text();
        navbarContainer.innerHTML = navbarHtml;
        localStorage.setItem('navbar-html', navbarHtml);

        // Fetch footer (adjust filename as needed)
        const footerResponse = await fetch('footer.html');
        if (!footerResponse.ok) throw new Error('Failed to load footer');
        const footerHtml = await footerResponse.text();
        footerContainer.innerHTML = footerHtml;
        localStorage.setItem('footer-html', footerHtml);

        initializeBootstrap();
    } catch (error) {
        console.error('Error loading header/footer:', error);
        // Fallback: Show basic navbar/footer or error message
        navbarContainer.innerHTML = '<p>Error loading navigation. Please refresh.</p>';
        footerContainer.innerHTML = '<p>Error loading footer. Please refresh.</p>';
    }
}

function initializeBootstrap() {
    // Re-initialize Bootstrap components (e.g., dropdowns, carousel)
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(dropdown => {
        new bootstrap.Dropdown(dropdown);
    });
}

window.addEventListener('DOMContentLoaded', loadHeaderFooter);