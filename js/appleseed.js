document.addEventListener("DOMContentLoaded", () => {
  // Carrousel duplication (effet infini)
  const slider = document.querySelector(".gallery");
  if (slider) {
    slider.innerHTML += slider.innerHTML;
  }

  // Dropdown menu
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function (e) {
      if (
        !e.target.matches(".dropbtn") &&
        !e.target.closest(".dropdown-content")
      ) {
        dropdownContent.classList.remove("show");
      }
    });
  }

  // Season switching
  const seasonLinks = document.querySelectorAll(".dropdown-content a");
  if (seasonLinks.length) {
    seasonLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const season = this.getAttribute("data-media");
        if (dropdownBtn) dropdownBtn.textContent = this.textContent;
        if (dropdownContent) dropdownContent.classList.remove("show");

        // Cacher tous les blocs .media-container
        document.querySelectorAll(".media-container").forEach((container) => {
          container.style.display = "none";
        });

        // Afficher la saison sélectionnée
        const selectedSeason = document.getElementById(season);
        if (selectedSeason) selectedSeason.style.display = "grid";

        // Ajouter des boutons si nécessaire
        if (typeof addActionButtonsToCards === "function") {
          addActionButtonsToCards();
        }
      });
    });
  }

  // Exposer les fonctions globales si besoin
  window.openSidebar = openSidebar;
  window.closeSidebar = closeSidebar;
});
