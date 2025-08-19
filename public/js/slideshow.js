let slideIndex=0;
let slides,dots;

  document.addEventListener("DOMContentLoaded", function() {
  slides = document.querySelectorAll(".slide");
  dots = document.querySelectorAll(".dot");
  showSlide(slideIndex);
})

function showSlide(index) {
  if(index >= slides.length) slideIndex=0;
  else if(index < 0) slideIndex = slides.length -1;
  else slideIndex = index;
  
  slides.forEach((slide,i) => {
    slide.classList.remove("active");
  });

  slides[slideIndex].classList.add("active");

  dots.forEach((dot,i) =>{
    dot.classList.toggle("active", i === slideIndex);
  });
}

window.changeSlide = function(n) {
  showSlide(slideIndex + n);
}

