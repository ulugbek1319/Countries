const elDarkModeButton = document.querySelector('.dark-mode-button');
const elLightModeButton = document.querySelector('.dark-mode-button');

elDarkModeButton.addEventListener('click', function() {
    document.body.classList.add('dark-mode');
})
elLightModeButton.addEventListener('mouseenter', function() {
    document.body.classList.remove('dark-mode');
})