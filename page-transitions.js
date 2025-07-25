// page-transitions.js
document.addEventListener("DOMContentLoaded", function() {
    // Create transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'transition-overlay';
    document.body.appendChild(overlay);
    
    // Handle same-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            overlay.classList.add('active');
            
            setTimeout(() => {
                const targetId = this.getAttribute('href');
                if (targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                }
                overlay.classList.remove('active');
            }, 300);
        });
    });
    
    // Handle "Watch Now" buttons
    document.querySelectorAll('.watch-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.querySelector('a')) { // Only if it's not a link
                e.preventDefault();
                overlay.classList.add('active');
                
                setTimeout(() => {
                    const title = this.closest('.card-show').querySelector('h3').textContent;
                    alert(`You clicked to watch "${title}". This is just a demo!`);
                    overlay.classList.remove('active');
                }, 300);
            }
        });
    });
    
    // Handle cross-page navigation
    document.querySelectorAll('a').forEach(link => {
        if (link.href && 
            !link.href.startsWith('javascript') && 
            !link.href.startsWith('#') &&
            !link.download && 
            link.target !== '_blank') {
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.href;
                
                overlay.classList.add('active');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            });
        }
    });
    
    // Remove overlay on page load
    window.addEventListener('load', () => {
        overlay.classList.remove('active');
    });
});