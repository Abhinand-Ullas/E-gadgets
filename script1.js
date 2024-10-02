var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
function show_list()
{
  var device = document.getElementById("list");


  if (device.style.display == "block")
  {
    device.style.display == "none";
  }
  else
  {
    device.style.display == "block";
    }
}
window.onclick = function (event)
{
  if (!event.target.matches('.menu-icon'))
  {
    document.getElementById('list')
      .style.display = "none";
  }
}