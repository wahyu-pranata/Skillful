// navbar dropdown arrow animate
const courseDropdown = document.querySelector(".course-dropdown");
const arrow = document.querySelector(".arrow");

courseDropdown.addEventListener("click", function () {
  arrow.classList.toggle("active");
});

// navbar dropdown
const myDropdown = document.querySelector(".my-dropdown");

courseDropdown.addEventListener("click", function () {
  myDropdown.classList.toggle("active");
});

// Scroll to top
const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function () {
  scrollFunction();
};

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
const loader = document.querySelector(".spinner");
window.addEventListener("load", loaderAnimation);

function loaderAnimation() {
  loader.classList.add("disppear");
}

//exit offcanvas
const exitBtn = document.querySelector("button.btn-close");
exitBtn.addEventListener("click", function () {
  if (myDropdown.classList.contains("active")) {
    myDropdown.classList.remove("active");
    arrow.classList.toggle("active");
  }
});

// Feedback form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxjh1-KFYGSphGs1m5z9HDxXrJgdgtedWf5QUDaxpxIDTkpX5hkOA1-tjN5bA4IPjEk/exec'
const form = document.forms['feedback-form']
const btnSubmit = document.querySelector('.btn-submit');
const btnLoading = document.getElementById('btn-loading');

form.addEventListener('submit', e => {
  e.preventDefault()
  btnLoading.classList.toggle('d-none');
  btnSubmit.classList.toggle('d-none');
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      btnLoading.classList.toggle('d-none');
      btnSubmit.classList.toggle('d-none');
      Swal.fire(
        'Lorem ipsum',
        'lorem ipsum lorem ipsum lorem',
        'success'
      )
      form.reset();
      console.log('Success!', response)
    })
    .catch(error => {
      Swal.fire(
        'Lorem ipsum',
        'lorem ipsum lorem ipsum lorem',
        'error'
      )
      console.error('Error!', error.message)
    })
})
