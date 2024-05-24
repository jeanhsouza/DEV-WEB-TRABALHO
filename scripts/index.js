document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const carrosselContainer = document.querySelector('.carrossel-container');
    const anterior = document.getElementById('anterior');
    const proximo = document.getElementById('proximo');

    let currentIndex = 0;
    const cards = document.querySelectorAll('.item-card');
    const cardWidth = cards[0].offsetWidth;

    function scrollToCard(index) {
        carrosselContainer.scrollLeft = index * cardWidth;
    }

    anterior.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
        scrollToCard(currentIndex);
    });

    proximo.addEventListener('click', () => {
        currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
        scrollToCard(currentIndex);
    });

    let autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
        scrollToCard(currentIndex);
    }, 3000);

    carrossel.addEventListener('mouseover', () => {
        clearInterval(autoSlideInterval);
    });

    carrossel.addEventListener('mouseout', () => {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
            scrollToCard(currentIndex);
        }, 3000);
    });
});
