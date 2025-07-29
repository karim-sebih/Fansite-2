// spa-navigation.js - Simple view switching for SPA

document.addEventListener('DOMContentLoaded', function() {
  // Cache DOM elements
  const mainContent = document.querySelector('.tvshows-content');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  
  // Create a container for series content
  const seriesContainer = document.createElement('div');
  seriesContainer.id = 'series-container';
  seriesContainer.style.display = 'none';
  mainContent.parentNode.insertBefore(seriesContainer, mainContent.nextSibling);

  // Store the original main content
  const originalMainContent = mainContent.innerHTML;

  // Handle Watch Now button click (Severance)
  document.querySelector('.watch-btn a[href="./pages/series.html"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    showSeriesPage();
  });

  // Handle Home navigation
  document.querySelectorAll('nav a[href="../index.html"], nav a[href="#home"]').forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.location.pathname.endsWith('index.html')) {
        e.preventDefault();
        showMainPage();
      }
    });
  });

  // Function to show series page
  function showSeriesPage() {
    // Hide main content
    mainContent.style.display = 'none';
    
    // Load series content if not already loaded
    if (!seriesContainer.hasChildNodes()) {
      fetch('./pages/series.html')
        .then(response => response.text())
        .then(html => {
          // Extract the content between header and footer
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const seriesContent = doc.querySelector('body').innerHTML;
          
          // Insert into our container
          seriesContainer.innerHTML = seriesContent;
          
          // Load series.css
          loadSeriesCSS();
          
          // Show the container
          seriesContainer.style.display = 'block';
          
          // Initialize series page functionality
          initSeriesPage();
        })
        .catch(error => {
          console.error('Error loading series page:', error);
          seriesContainer.innerHTML = '<div style="padding: 20px; color: white;">Failed to load content</div>';
          seriesContainer.style.display = 'block';
        });
    } else {
      // Content already loaded, just show it
      seriesContainer.style.display = 'block';
    }
  }

  // Function to show main page
  function showMainPage() {
    // Show main content
    mainContent.style.display = 'block';
    
    // Hide series content
    seriesContainer.style.display = 'none';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Function to load series.css
  function loadSeriesCSS() {
    // Check if already loaded
    if (document.querySelector('link[href="./pages/series.css"]')) return;
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './pages/series.css';
    document.head.appendChild(link);
  }

  // Function to initialize series page
  function initSeriesPage() {
    // This would contain any initialization code needed for the series page
    // You might need to call functions from your original script.js here
  }
});