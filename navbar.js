new IntersectionObserver(function (e, o) {
  if (e[0].intersectionRatio > 0) {
    document.documentElement.removeAttribute("class");
  } else {
    document.documentElement.setAttribute("class", "stuck");
  }
}).observe(document.querySelector(".trigger"));


//back top

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}