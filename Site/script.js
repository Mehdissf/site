const nav = document.getElementById("nav");
const modeToggleBtn = document.getElementById("mode-toggle");

modeToggleBtn.addEventListener("click", function () {
  nav.classList.toggle("dark-mode");
});

function togglemeny() {
  var menu = document.getElementById("menu");
  var icon = document.getElementById("ikon");

  if (menu.style.display === "block") {
    icon.innerHTML = '<i class="fa fa-bars"></i>';
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
    icon.innerHTML = '<i class="fa fa-times"></i>';
  }
}

mapboxgl.accessToken =
  "pk.eyJ1IjoibGFuenp6eiIsImEiOiJjbGh2Mnp1a2owNGs0M3JtZHY1dmJsNmgxIn0.WK-bsq9ibjlRVXi64j2usA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [18.06300275, 59.43986375],
  zoom: 12,
});

var marker = new mapboxgl.Marker()
  .setLngLat([18.06300275, 59.43986375])
  .addTo(map);
