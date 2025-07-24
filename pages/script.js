document.addEventListener("DOMContentLoaded", function () {
  // 1. Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }

  // 2. Add action buttons to all episode cards
  function addActionButtonsToCards() {
    const actionButtonsHTML = `
            <div class="action-btn">
                <img src="../images/icons/icons8-like-symbol-100.png" alt="Like" title="Like">
                <img src="../images/icons/icons8-thumbs-up-96.png" alt="Thumbs up" title="Thumbs up">
                <img src="../images/icons/icons8-thumbs-down-96 (1).png" alt="Thumbs down" title="Thumbs down">
                <img src="../images/icons/icons8-download-96.png" alt="Download" title="Download">
            </div>
        `;

    document
      .querySelectorAll(".season-card:not(:has(.action-btn))")
      .forEach((card) => {
        card.insertAdjacentHTML("beforeend", actionButtonsHTML);
      });
  }

  // 3. Enhanced dropdown functionality
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener("click", function () {
      dropdownContent.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    window.addEventListener("click", function (e) {
      if (
        !e.target.matches(".dropbtn") &&
        !e.target.closest(".dropdown-content")
      ) {
        dropdownContent.classList.remove("show");
      }
    });
  }

  // 5. Season switching functionality
  const seasonLinks = document.querySelectorAll(".dropdown-content a");
  if (seasonLinks.length) {
    seasonLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const season = this.getAttribute("data-season");
        if (dropdownBtn) dropdownBtn.textContent = this.textContent;
        if (dropdownContent) dropdownContent.classList.remove("show");

        // Hide all season containers
        document.querySelectorAll(".season-container").forEach((container) => {
          container.style.display = "none";
        });

        // Show the selected season
        const selectedSeason = document.getElementById(season);
        if (selectedSeason) selectedSeason.style.display = "grid";

        // Add action buttons to new cards
        addActionButtonsToCards();
      });
    });
  }

  // 6. Episode card interactions
  const episodeCards = document.querySelectorAll(".season-card");

  episodeCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Highlight selected episode
      episodeCards.forEach((c) => c.classList.remove("selected"));
      this.classList.add("selected");

      // Log selected episode
      const episodeTitle = this.querySelector("h3")?.textContent;
      if (episodeTitle) console.log(`Selected episode: ${episodeTitle}`);
    });
  });

  // Initial setup
  addActionButtonsToCards();
});










// carousel functionality


  const castContainer = document.querySelector('.cast-container');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButtton = document.querySelector('.carousel-button.next');

  // scroll amount

  const scrollAmount = 800;

  prevButton.addEventListener("click", () => {
    castContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  nextButtton.addEventListener("click", () => {
    castContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  // hide/show button based on scroll position
  castContainer.addEventListener("scroll", () => {
    prevButton.style.display = castContainer.scrollLeft > 0 ? "flex" : "none";
    nextButtton.style.display =
      castContainer.scrollLeft < (castContainer.scrollWidth- castContainer.clientWidth)
        ? "flex"
        : "none";
  });

  // initial state
  prevButton.style.display = "none";
  if (castContainer.scrollWidth <= castContainer.clientWidth) {
    nextButtton.style.display = "none";
  }

// // 7. Video autoplay handler
//     const bannerVideo = document.querySelector(".banner video");
//     if (bannerVideo) {
//         // Ensure video plays when user interacts with it
//         bannerVideo.addEventListener("click", function() {
//             if (this.paused) {
//                 this.play().catch(e => console.log("Autoplay prevented:", e));
//             } else {
//                 this.pause();
//             }
//         });
//     }





