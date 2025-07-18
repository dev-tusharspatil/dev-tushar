"use strict";

const slider = tns({
    container: '.testimonial-carousel',
    loop: true,
    items: 3,
    responsive: {
	    0:{
	            items:1,
        },
        768:{
            items:2,
        },
        1200: {
	        items:3,
        }

	},
    slideBy: 'page',
    nav: true,    
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    gutter: 30,
    navPosition: 'bottom',
    mouseDrag: true,
    controls: false,
    speed: 800,

});


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".read-more-btn");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const quoteText = btn.previousElementSibling;
        quoteText.classList.toggle("expanded");

        btn.textContent = quoteText.classList.contains("expanded")
          ? "Read Less"
          : "Read More";
      });
    });
  });

