document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card')
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = '2500ms';
        }, 1000 * index)
    })
})