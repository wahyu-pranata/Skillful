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


// Scroll to top
const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}