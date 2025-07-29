document.addEventListener('DOMContentLoaded', function() {
    // Burger menu functionality
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle menu function
    function toggleMenu() {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Toggle body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // Event listeners
    burgerMenu.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // SPA Navigation functionality
    const mainContent = document.querySelector('.tvshows-content');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    // Handle Watch Now button click (Severance)
    document.querySelector('.watch-btn a[href="./pages/series.html"]')?.addEventListener('click', function(e) {
        e.preventDefault();
        showSeriesPage();
    });
    
    // Handle Home navigation
    document.querySelectorAll('nav a[href="#home"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showMainPage();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Function to show series page
    function showSeriesPage() {
        window.location.href = './pages/series.html';
    }
    
    // Function to show main page
    function showMainPage() {
        // This would be used if we were doing full SPA navigation
        // Currently just redirects to the series page
    }
    
    // Watch Now buttons functionality (except Severance)
    document.querySelectorAll('.watch-btn:not(:has(a))').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.closest('.card-show').querySelector('h3').textContent;
            alert(`You clicked to watch "${title}". This is just a demo!`);
        });
    });
    
    // Responsive adjustments
    function handleResize() {
        // Close menu if window is resized to desktop size
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    }
    
    window.addEventListener('resize', handleResize);
});