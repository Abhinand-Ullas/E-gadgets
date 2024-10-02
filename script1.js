var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
function show_list() {
  var device = document.getElementById("list");
  device.classList.toggle("visible");  // Toggle visibility
}

window.onclick = function(event) {
  if (!event.target.matches('.menu-icon')) {
    var dropdown = document.getElementById("list");
    if (dropdown.classList.contains('visible')) {
      dropdown.classList.remove('visible');
    }
  }
}
