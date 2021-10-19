// navbar dropdown arrow animate
const courseDropdown = document.querySelector('.course-dropdown');
const arrowDown = document.querySelector('.arrow.down');
const arrowUp = document.querySelector('.arrow.up');


courseDropdown.addEventListener('click', function() {
    arrowDown.classList.toggle('d-none');
    arrowUp.classList.toggle('d-none');
})


// navbar dropdown
const myDropdown  = document.querySelector('.my-dropdown');

courseDropdown.addEventListener('click', function() {
    myDropdown.classList.toggle('active');
})