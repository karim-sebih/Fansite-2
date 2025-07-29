document.querySelectorAll('.game-carousel').forEach((carousel, index) => {
    const slidesContainer = carousel.querySelector('.game-slides');
    const slideContainers = carousel.querySelectorAll('.game-slide-container');
    const pagination = carousel.querySelector('.game-pagination');
    const prevBtn = carousel.querySelector('.game-prev');
    const nextBtn = carousel.querySelector('.game-next');

    let currentIndex = 0;//commence à 0
    // Nombre total de diapositives dans ce carrousel
    const totalSlides = slideContainers.length;

    // Créer les points de pagination dans un tableau
    const dots = [];
    // Crée un point de pagination pour chaque diapositive
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('game-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
      });
      pagination.appendChild(dot);
      dots.push(dot);
    }


    // Met à jour l'affichage du carrousel
    function updateCarousel() {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }
    // Passe à la diapositive suivante
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }
    // Passe à la diapositive précédente
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    // Ajoute un événement clic pour passer à la diapositive suivante ou précédente
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-slide (facultatif, différent intervalle par carrousel possible)
    setInterval(nextSlide, 10000);
  });

