const btns = document.querySelectorAll('.btn-modal');
const modal = document.querySelector('.bloc-modal');
const close = document.querySelector('.close');
const index = document.querySelector('.bloc-modal img');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        index.src = `img/etape-${e.target.getAttribute('data-index')}.png`;
        modal.classList.add('active');
    })
})

modal.addEventListener('click', () => {
    modal.classList.remove('active');
})