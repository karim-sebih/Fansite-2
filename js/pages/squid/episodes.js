



const seasonSelect = document.querySelector('#season-select');
const episodes = document.querySelectorAll('.episode');

function filterEpisodes(season) {
  episodes.forEach(episode => {
    episode.style.display = episode.classList.contains(season) ? 'block' : 'none';
  });
}


if (seasonSelect) {
  filterEpisodes(seasonSelect.value);

  seasonSelect.addEventListener('change', (e) => {
    filterEpisodes(e.target.value);
  });
}


