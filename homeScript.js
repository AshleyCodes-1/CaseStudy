// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

// What are you looking for section
var slideIndex = 0;
var slides = document.querySelectorAll('.service-slide');

function plusDivs(n) {
    slides[slideIndex].style.display = "none";
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].style.display = "block";
}

plusDivs(0);