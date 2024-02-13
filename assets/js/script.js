var heartButtons = document.querySelectorAll(".card__textRight button");

heartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var heartIcon = this.querySelector("i");
        if (heartIcon.classList.contains("fa-heart-o")) {
            heartIcon.classList.remove("fa-heart-o");
            heartIcon.classList.add("fa-heart");
            this.parentNode.classList.add("active");
        } else {
            heartIcon.classList.remove("fa-heart");
            heartIcon.classList.add("fa-heart-o");
            this.parentNode.classList.remove("active");
        }
        event.stopPropagation();
    });
});
const restaurantElements = document.querySelectorAll('.restaurant__single');

restaurantElements.forEach((element) => {
  element.addEventListener('click', () => {
    const restaurantId = element.getAttribute('data-restaurant');
    window.location.href = `menu${restaurantId}.html`;
  });
});
const heartIcon = document.querySelector(".menu__contents_head i");

heartIcon.addEventListener("click", function() {
    if (heartIcon.classList.contains("fa-heart-o")) {
        heartIcon.classList.remove("fa-heart-o");
        heartIcon.classList.add("fa-heart");
    } else {
        heartIcon.classList.remove("fa-heart");
        heartIcon.classList.add("fa-heart-o");
    }
});
const singleForms = document.querySelectorAll('.single__form');

singleForms.forEach((singleForm) => {
  singleForm.addEventListener('mouseover', (event) => {
    // Check if the device has a mouse
    if ('ontouchstart' in window) {
      // If the device has a mouse, only toggle the class on click
      if (event.type === 'click') {
        singleForm.classList.toggle('checked');
        const tick = singleForm.querySelector('.single__form_tick');
        if (tick.style.transform === 'translateX(0%)') {
          tick.style.transform = 'translateX(100%)';
        } else {
          tick.style.transform = 'translateX(0%)';
        }
      }
    } else {
      // If the device doesn't have a mouse, toggle the class on hover
      singleForm.classList.toggle('checked');
      const tick = singleForm.querySelector('.single__form_tick');
      if (tick.style.transform === 'translateX(0%)') {
        tick.style.transform = 'translateX(100%)';
      } else {
        tick.style.transform = 'translateX(0%)';
      }
    }
  });

  // Add a click event listener for devices with a mouse
  singleForm.addEventListener('click', () => {
    singleForm.classList.toggle('checked');
    const tick = singleForm.querySelector('.single__form_tick');
    if (tick.style.transform === 'translateX(0%)') {
      tick.style.transform = 'translateX(100%)';
    } else {
      tick.style.transform = 'translateX(0%)';
    }
  });

  // Add a mouseout event listener to undo the changes when the mouse pointer leaves the element
  singleForm.addEventListener('mouseout', () => {
    singleForm.classList.remove('checked');
    const tick = singleForm.querySelector('.single__form_tick');
    tick.style.transform = 'translateX(100%)';
  });
});
// opening page animation
$(document).ready(function () {
  $(".menuContents").addClass("animate-complete");
});

$(document).ready(function () {
  $(".menu__contents_head").addClass("animate-complete");
});

$(document).ready(function () {
  $(".entrees-animation").addClass("animate-complete");
});

$(document).ready(function () {
  $(".plats-animation").addClass("animate-complete");
});
$(document).ready(function () {
  $(".desserts-animation").addClass("animate-complete");
});
$(document).ready(function () {
  $(".background-picture-animation").addClass("animate-complete");
});