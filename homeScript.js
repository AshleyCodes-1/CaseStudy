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

// Toggle Dropdown in Sidebar
function toggleDropdownAppliances() {
  var x = document.getElementById("sidebarDropdown-appliances");
  if (x.classList.contains("w3-show")) {
    x.classList.remove("w3-show");
  } else {
    x.classList.add("w3-show");
  }
}

function toggleDropdownHome(){
  var y = document.getElementById("sidebarDropdown-home");
  if (y.classList.contains("w3-show")) {
    y.classList.remove("w3-show");
  } else {
    y.classList.add("w3-show");
  }
}

function toggleDropdownVehicle(){
  var z = document.getElementById("sidebarDropdown-vehicle");
  if (z.classList.contains("w3-show")) {
    z.classList.remove("w3-show");
  } else {
    z.classList.add("w3-show");
  }
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

// Image slider header
var slideImageIndex = 1;
showImageDivs(slideImageIndex);

function plusImageDivs(n) {
  showImageDivs(slideImageIndex += n);
}

function currentDiv(n) {
  showImageDivs(slideImageIndex = n);
}

function showImageDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideImageIndex = 1}    
  if (n < 1) {slideImageIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideImageIndex-1].style.display = "block";  
  dots[slideImageIndex-1].className += " w3-red";
}