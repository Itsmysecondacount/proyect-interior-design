console.log('hola');

const btnOn = document.getElementById('btnOn');

btnOn.addEventListener('click', () => {
    const element = document.querySelector('nav');
    element.style.display = 'block';
});

const movSelector = document.getElementById('movile-selector');

movSelector.addEventListener('click', () => {
    const element = document.querySelector('nav');
    element.style.display = 'none'
})