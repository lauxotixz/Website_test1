const cards = document.querySelectorAll('.card');

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
        root: document.querySelector('.upphovsratt_carousel'),
        threshold: 0.8
    }
);

cards.forEach(card => observer.observe(card));
