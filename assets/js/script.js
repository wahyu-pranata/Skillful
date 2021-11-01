// navbar dropdown arrow animate
const courseDropdown = document.querySelector('.course-dropdown');
const arrow = document.querySelector('.arrow');


courseDropdown.addEventListener('click', function() {
    arrow.classList.toggle('active');
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


// Loader
const loader = document.querySelector('.spinner');
window.addEventListener('load', loaderAnimation);

function loaderAnimation() {
  loader.classList.add('disppear');
}




