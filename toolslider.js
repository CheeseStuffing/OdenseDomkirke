/* Den skal starte ved første slide */
var slideIndex = 1;
showSlides(slideIndex);

/* Next/previous controls */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/* Thumbnail image controls */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) { /* n determines the forward/backward functionality */
  var i; /*Hvorfor "i"? */
  var slides = document.getElementsByClassName("mySlides"); /*Henter mySlides ind i scriptet */
  var dots = document.getElementsByClassName("dot"); /* Henter dot css in i scripted */
  if (n > slides.length) {slideIndex = 1} /* n determines the forward/backward functionality */
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
