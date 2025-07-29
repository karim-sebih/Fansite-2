
const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.characters');
const search = document.getElementById('search');
const paginationContainer = document.querySelector('.pagination');

let currentPage = 1;
const itemsPerPage = 6;


function getFilteredItems() {
  const activeFilter = document.querySelector('.btn.active')?.dataset.filter || '';
  const searchValue = search.value.toLowerCase().trim();

  return Array.from(storeProducts).filter(product => {
    const matchFilter = activeFilter === '' || product.classList.contains(activeFilter);
    const matchSearch = product.textContent.toLowerCase().includes(searchValue);
    return matchFilter && matchSearch;
  });
}

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
  const totalPages = Math.ceil(items.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.classList.add('page-btn');
    if (i === currentPage) btn.classList.add('active');

    btn.addEventListener('click', () => {
      currentPage = i;
      updateDisplay();
    });

    paginationContainer.appendChild(btn);
  }
}

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

// Recherche
search.addEventListener('keyup', () => {
  currentPage = 1;
  updateDisplay();
});

updateDisplay();

