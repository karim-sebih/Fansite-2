
const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.characters');
const search = document.getElementById('search');
const paginationContainer = document.querySelector('.pagination');

// la page commence à la 1
let currentPage = 1;
const itemsPerPage = 6; //limite de 6 items par pages


// Filtre les éléments selon le filtre actif et la recherche
function getFilteredItems() {
  const activeFilter = document.querySelector('.btn.active')?.dataset.filter || '';
  const searchValue = search.value.toLowerCase().trim();

  return Array.from(storeProducts).filter(product => {
    const matchFilter = activeFilter === '' || product.classList.contains(activeFilter);
    const matchSearch = product.textContent.toLowerCase().includes(searchValue);
    return matchFilter && matchSearch;
  });
}
// Affiche les éléments de la page demandée
function showPage(items, page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  storeProducts.forEach(product => {
    product.style.display = 'none';
  });

  items.slice(start, end).forEach(product => {
    product.style.display = 'block';
  });
}

function setupPagination(items) {
  paginationContainer.innerHTML = '';
  // Calcule le nombre total de pages pour la pagination
  const totalPages = Math.ceil(items.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.classList.add('page-btn');
    if (i === currentPage) btn.classList.add('active');

    // Ajoute un événement au clic pour changer de page
    btn.addEventListener('click', () => {
      currentPage = i;
      updateDisplay();
    });//Mets a jour de la page actuelle et de l'affichage

    paginationContainer.appendChild(btn);
  }
}

// Met à jour l'affichage (filtrage, page, pagination)

function updateDisplay() {
  const filteredItems = getFilteredItems();
  showPage(filteredItems, currentPage);
  setupPagination(filteredItems);
}


btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentPage = 1;
    updateDisplay();
  });
});

// Barre de recherche
search.addEventListener('keyup', () => {
  currentPage = 1;
  updateDisplay();
});

updateDisplay();

