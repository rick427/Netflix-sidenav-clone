const netflix_open_btn = document.querySelector('.netflix-open-btn');
const netflix_close_btn = document.querySelector('.netflix-close-btn');
const netflix_nav = document.querySelectorAll('.netflix-nav');

netflix_open_btn.addEventListener('click', () => {
    netflix_nav.forEach(el => {
        el.classList.add('visible')
    })
});

netflix_close_btn.addEventListener('click', () => {
    netflix_nav.forEach(el => {
        el.classList.remove('visible')
    })
});
