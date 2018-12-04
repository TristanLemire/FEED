

/*
  Barre de navigation et menu burger
*/

var body = document.querySelectorAll("section");
var links = document.querySelectorAll("a");
var nav = document.getElementById("nav");
var button = document.querySelector(".menu");
button.addEventListener("click", function() {
  nav.classList.toggle("is-open");
  body.forEach(bodySection => {
    bodySection.classList.toggle("is-blured");
  });
});
links.forEach(link => {
  link.addEventListener("click", function() {
    nav.classList.remove("is-open");
    body.forEach(bodySection => {
      bodySection.classList.remove("is-blured");
    });
  });
});

window.addEventListener("scroll", function() {
  var y = window.scrollY;
  if (y > 55) {
    nav.classList.add("is-dark");
  } else nav.classList.remove("is-dark");
});
// Fin barre de navigation et menu burger

// Scroll to a certain element
function scrollToThis(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
