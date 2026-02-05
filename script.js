function observeCarousel(carouselSelector) {
    const carousel = document.querySelector(carouselSelector);
    if (!carousel) return;

    const cards = carousel.querySelectorAll('.card');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        },
        {
            root: carousel,
            threshold: 0.8
        }
    );

    cards.forEach(card => observer.observe(card));
}

observeCarousel('.carousel');

