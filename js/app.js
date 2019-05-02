const dropdown = document.querySelector('.dropdown-menu');
const link = document.querySelector('.navbar-menu-1');
const mobileIcon = document.querySelector('.mobile-icon');
const mobileMenu = document.querySelector('.mobile-links-container');
const personaData = document.querySelector('#personal-data-label');
const buttonData = document.querySelector('#personal-data-agree');
const expandEffect = document.querySelectorAll('.effect');
const moveEffect = document.querySelectorAll('.product-text-name');
const slider = document.querySelector('.slider-box-image');
const arrows = document.querySelectorAll('.arrow');




link.addEventListener('mouseover', () => {
  dropdown.style.display = "inline-block";
});
dropdown.addEventListener('mouseout', () => {
  dropdown.style.display = "none";
});

mobileIcon.addEventListener('click', () => {
  if (mobileMenu.classList.contains('active') == false) {
    mobileMenu.classList.add('active');
  } else if (mobileMenu.classList.contains('active') == true) {
    mobileMenu.classList.remove('active');

  }
});
personaData.addEventListener('click', () => {
  if (personaData.classList.contains('checked') == false) {
    personaData.classList.add('checked');
  } else {
    personaData.classList.remove('checked')
  }
});


// Gallery effect

let arr = []
for (i = 0; i < expandEffect.length; i++) {
  arr.push(expandEffect[i])
}

for (i = 0; i < expandEffect.length; i++) {
  expandEffect[i].addEventListener('mouseover', function () {
    self = arr.indexOf(this);
    moveEffect[self].style.width = '90%';
  })
}

for (i = 0; i < expandEffect.length; i++) {
  expandEffect[i].addEventListener('mouseout', function () {
    self = arr.indexOf(this);
    moveEffect[self].style.width = '60%';
  })
}

//Slider

for (i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener('click', function () {
    if (slider.classList.contains('slider-box--redChair') == true) {
      slider.classList.remove('slider-box--redChair');
      slider.classList.add('slider-box--blackChair');
    } else if (slider.classList.contains('slider-box--blackChair') == true) {
      slider.classList.remove('slider-box--blackChair');
      slider.classList.add('slider-box--redChair');
    }
  })
}