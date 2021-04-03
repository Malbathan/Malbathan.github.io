const menu = document.querySelector('nav.hide');
const button = document.getElementById('portfolio');

button.addEventListener('click', function () {
    let open = menu.classList.contains('hide');
    menu.classList.toggle('portfolioMenu');
    menu.classList.remove('hide'); 
});