const body = document.querySelector('body')
const buttons = document.querySelectorAll('.color-item')

buttons.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        body.style.backgroundColor = `${e.target.id}`;
    });
});