const spans = document.querySelectorAll('.option')
const body = document.querySelector('body')

spans.forEach ((b) => {
    b.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id;
    })
})