// Sélectionne la liste déroulante (select) avec l'ID season-select
const seasonSelect = document.querySelector('#season-select');
const episodes = document.querySelectorAll('.episode');// la meme mais pour les episodes


// Fonction pour filtrer les épisodes selon la saison choisie
function filterEpisodes(season) {
  episodes.forEach(episode => {
    episode.style.display = episode.classList.contains(season) ? 'block' : 'none';//Affiche ou cache les épisodes selon la saison
  });
}

// si la liste déroulante existe, filtre les épisodes selon la saison choisie
if (seasonSelect) {
  filterEpisodes(seasonSelect.value);

  seasonSelect.addEventListener('change', (e) => {
    filterEpisodes(e.target.value);
  });
}


